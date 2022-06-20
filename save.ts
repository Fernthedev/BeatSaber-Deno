import { IInfoData } from './types/beatmap/shared/info.ts';
import { DifficultyData as DifficultyDataV2 } from './beatmap/v2/difficulty.ts';
import { DifficultyData as DifficultyDataV3 } from './beatmap/v3/difficulty.ts';
import { ISaveOptionsDifficulty, ISaveOptionsDifficultyList, ISaveOptionsInfo } from './types/bsmap/save.ts';
import { IDifficultyList } from './types/bsmap/list.ts';
import { performDifficulty, performInfo } from './optimize.ts';
import globals from './globals.ts';
import logger from './logger.ts';

const tag = (name: string) => {
    return `[save::${name}]`;
};

const optionsInfo: Required<ISaveOptionsInfo> = {
    directory: '',
    filePath: 'Info.dat',
    optimise: { enabled: true },
};

const optionsDifficulty: Required<ISaveOptionsDifficulty> = {
    directory: '',
    filePath: 'UnnamedPath.dat',
    optimise: { enabled: true },
};

const optionsDifficultyList: Required<ISaveOptionsDifficultyList> = {
    directory: '',
    optimise: { enabled: true },
};

/** Set default option value for save function. */
export const defaultOptions = {
    info: optionsInfo,
    difficulty: optionsDifficulty,
    difficultyList: optionsDifficultyList,
};

/** Asynchronously save beatmap info.
 * ```ts
 * await save.info(info);
 * ```
 */
export async function info(data: IInfoData, options: Partial<ISaveOptionsInfo> = {}) {
    const opt: Required<ISaveOptionsDifficulty> = {
        directory: options.directory ?? (globals.directory || defaultOptions.info.directory),
        filePath: options.filePath ?? 'Info.dat',
        optimise: options.optimise ?? { enabled: true },
    };
    logger.info(tag('info'), `Async saving info`);
    if (opt.optimise.enabled) {
        logger.info(tag('info'), `Optimising info data`);
        performInfo(data, opt.optimise);
    }
    logger.info(tag('info'), `Writing to ${opt.directory + opt.filePath}`);
    await Deno.writeTextFile(opt.directory + opt.filePath, JSON.stringify(data));
}

/** Synchronously save beatmap info.
 * ```ts
 * save.infoSync(info);
 * ```
 */
export function infoSync(data: IInfoData, options: Partial<ISaveOptionsInfo> = {}) {
    const opt: Required<ISaveOptionsDifficulty> = {
        directory: options.directory ?? (globals.directory || defaultOptions.info.directory),
        filePath: options.filePath ?? 'Info.dat',
        optimise: options.optimise ?? { enabled: true },
    };
    logger.info(tag('infoSync'), `Sync saving info`);
    if (opt.optimise.enabled) {
        logger.info(tag('infoSync'), `Optimising info data`);
        performInfo(data, opt.optimise);
    }
    logger.info(tag('infoSync'), `Writing to ${opt.directory + opt.filePath}`);
    Deno.writeTextFileSync(opt.directory + opt.filePath, JSON.stringify(data));
}

/** Asynchronously save beatmap difficulty.
 * ```ts
 * await save.difficulty(difficulty);
 * ```
 */
export async function difficulty(
    data: DifficultyDataV2 | DifficultyDataV3,
    options: Partial<ISaveOptionsDifficulty> = {},
) {
    const opt: Required<ISaveOptionsDifficulty> = {
        directory: options.directory ?? (globals.directory || defaultOptions.difficulty.directory),
        filePath: options.filePath ?? data.fileName ?? 'UnnamedDifficulty.dat',
        optimise: options.optimise ?? { enabled: true },
    };
    logger.info(tag('difficulty'), `Async saving difficulty`);
    const objectData = data.toObject();
    if (opt.optimise.enabled) {
        performDifficulty(objectData, opt.optimise);
    }
    logger.info(tag('difficulty'), `Writing to ${opt.directory + opt.filePath}`);
    await Deno.writeTextFile(opt.directory + opt.filePath, JSON.stringify(objectData));
}

/** Synchronously save beatmap difficulty.
 * ```ts
 * save.difficultySync(difficulty);
 * ```
 */
export function difficultySync(
    data: DifficultyDataV2 | DifficultyDataV3,
    options: Partial<ISaveOptionsDifficulty> = {},
) {
    const opt: Required<ISaveOptionsDifficulty> = {
        directory: options.directory ?? (globals.directory || defaultOptions.difficulty.directory),
        filePath: options.filePath ?? data.fileName ?? 'UnnamedDifficulty.dat',
        optimise: options.optimise ?? { enabled: true },
    };
    logger.info(tag('difficultySync'), `Sync saving difficulty`);
    const objectData = data.toObject();
    if (opt.optimise.enabled) {
        performDifficulty(objectData, opt.optimise);
    }
    logger.info(tag('difficultySync'), `Writing to ${opt.directory + opt.filePath}`);
    Deno.writeTextFileSync(opt.directory + opt.filePath, JSON.stringify(objectData));
}

/** Asynchronously save multiple beatmap difficulties.
 * ```ts
 * await save.difficultyList(difficulties);
 * ```
 */
export function difficultyList(difficulties: IDifficultyList, options: Partial<ISaveOptionsDifficultyList> = {}) {
    logger.info(tag('difficultyList'), `Async saving list of difficulty`);
    difficulties.forEach(async (dl) => {
        const opt: Required<ISaveOptionsDifficultyList> = {
            directory: options.directory ?? (globals.directory || defaultOptions.difficultyList.directory),
            optimise: options.optimise ?? { enabled: true },
        };
        logger.info(tag('difficultyListSync'), `Saving ${dl.characteristic} ${dl.difficulty}`);
        const objectData = dl.data.toObject();
        if (opt.optimise.enabled) {
            performDifficulty(objectData, opt.optimise);
        }
        logger.info(tag('difficultyList'), `Writing to ${opt.directory + dl.settings._beatmapFilename}`);
        await Deno.writeTextFile(opt.directory + dl.settings._beatmapFilename, JSON.stringify(objectData));
    });
}

/** Synchronously save multiple beatmap difficulties.
 * ```ts
 * save.difficultyList(difficulties);
 * ```
 */
export function difficultyListSync(difficulties: IDifficultyList, options: Partial<ISaveOptionsDifficultyList> = {}) {
    logger.info(tag('difficultyListSync'), `Sync saving list of difficulty`);
    difficulties.forEach((dl) => {
        const opt: Required<ISaveOptionsDifficultyList> = {
            directory: options.directory ?? (globals.directory || defaultOptions.difficultyList.directory),
            optimise: options.optimise ?? { enabled: true },
        };
        logger.info(tag('difficultyListSync'), `Saving ${dl.characteristic} ${dl.difficulty}`);
        const objectData = dl.data.toObject();
        if (opt.optimise.enabled) {
            performDifficulty(objectData, opt.optimise);
        }
        logger.info(tag('difficultyList'), `Writing to ${opt.directory + dl.settings._beatmapFilename}`);
        Deno.writeTextFileSync(opt.directory + dl.settings._beatmapFilename, JSON.stringify(objectData));
    });
}
