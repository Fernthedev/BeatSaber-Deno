import logger from '../logger.ts';
import { ColorArray } from '../types/colors.ts';
import { ColorScheme, EnvironmentSchemeName } from '../beatmap/shared/colorScheme.ts';
import { EnvironmentAllName } from '../types/beatmap/shared/environment.ts';
import { isV2 } from '../beatmap/version.ts';
import { IWrapDifficulty } from '../types/beatmap/wrapper/difficulty.ts';
import { IWrapEvent } from '../types/beatmap/wrapper/event.ts';

const tag = (name: string) => {
    return `[convert::${name}]`;
};

/** Convert old Chroma color value to Chroma 2 custom data.
 * ```ts
 * const newData = convert.ogChromaToChromaV2(oldData);
 * ```
 */
export function ogChromaToChromaV2<T extends IWrapDifficulty>(
    data: T,
    environment: EnvironmentAllName = 'DefaultEnvironment',
): T {
    logger.info(
        tag('ogChromaToChromaV2'),
        'Converting old Chroma event value to Chroma event customData',
    );
    const events: IWrapEvent[] = data.basicEvents;
    const newEvents: IWrapEvent[] = [];
    const colorScheme = ColorScheme[EnvironmentSchemeName[environment]];
    const defaultLeftLight: ColorArray = [
        colorScheme._envColorLeft!.r,
        colorScheme._envColorLeft!.g,
        colorScheme._envColorLeft!.b,
    ];
    const defaultRightLight: ColorArray = [
        colorScheme._envColorRight!.r,
        colorScheme._envColorRight!.g,
        colorScheme._envColorRight!.b,
    ];
    const oldChromaColorConvert = (rgb: number): ColorArray => {
        rgb = rgb - 2000000000;
        const red = (rgb >> 16) & 0x0ff;
        const green = (rgb >> 8) & 0x0ff;
        const blue = rgb & 0x0ff;
        return [red / 255, green / 255, blue / 255];
    };
    const currentColor: { [key: number]: ColorArray | null } = {};
    for (const ev of events) {
        let noChromaColor = false;
        if (ev.value >= 2000000000) {
            currentColor[ev.type] = oldChromaColorConvert(ev.value) as ColorArray;
        }
        if (!currentColor[ev.type]) {
            noChromaColor = true;
            currentColor[ev.type] = ev.value >= 1 && ev.value <= 4
                ? defaultRightLight
                : ev.value >= 5 && ev.value <= 8
                ? defaultLeftLight
                : [1, 1, 1];
        }
        if (ev.value === 4) {
            ev.value = 0;
        }
        if (ev.value !== 0 && !(ev.value >= 2000000000)) {
            if (ev.customData && !ev.customData._color) {
                if (isV2(data)) {
                    ev.customData._color = currentColor[ev.type];
                } else {
                    ev.customData.color = currentColor[ev.type];
                }
            }
            if (!ev.customData) {
                if (isV2(data)) {
                    ev.customData = { _color: currentColor[ev.type] };
                } else {
                    ev.customData = { color: currentColor[ev.type] };
                }
            }
        }
        if (!(ev.value >= 2000000000)) {
            // hush
            // deno-lint-ignore no-explicit-any
            newEvents.push(ev as any);
            if (noChromaColor) {
                currentColor[ev.type] = null;
            }
        }
    }
    data.basicEvents = newEvents;

    return data;
}
