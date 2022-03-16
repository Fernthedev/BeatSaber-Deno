import { InfoData, CharacteristicOrder, DifficultyRank } from '../../types/mod.ts';
import logger from '../../logger.ts';

// deno-lint-ignore ban-types
const tag = (func: Function) => {
    return `[shared::parse::${func.name}]`;
};

// TODO: more error check
// TODO: contemplate whether to make pure function or keep as is
export const info = (infoData: InfoData): InfoData => {
    logger.info(tag(info), 'Parsing beatmap info v2.x.x');
    infoData._difficultyBeatmapSets.sort(
        (a, b) =>
            CharacteristicOrder[a._beatmapCharacteristicName] -
            CharacteristicOrder[b._beatmapCharacteristicName]
    );
    infoData._difficultyBeatmapSets.forEach((set) => {
        let num = 0;
        set._difficultyBeatmaps.forEach((a) => {
            if (a._difficultyRank - num <= 0) {
                logger.warn(tag(info), a._difficulty + ' is unordered');
            }
            if (DifficultyRank[a._difficulty] !== a._difficultyRank) {
                logger.error(tag(info), a._difficulty + ' has invalid rank');
            }
            num = a._difficultyRank;
        });
        set._difficultyBeatmaps.sort((a, b) => a._difficultyRank - b._difficultyRank);
    });

    return infoData;
};
