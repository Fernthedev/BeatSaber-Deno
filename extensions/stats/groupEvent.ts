import { EventList } from '../../beatmap/shared/environment.ts';
import { LightColorEventBoxGroup } from '../../beatmap/v3/lightColorEventBoxGroup.ts';
import { LightRotationEventBoxGroup } from '../../beatmap/v3/lightRotationEventBoxGroup.ts';
import { LightTranslationEventBoxGroup } from '../../beatmap/v3/lightTranslationEventBoxGroup.ts';
import { EnvironmentAllName } from '../../types/beatmap/shared/environment.ts';
import { ICountEventBoxGroup } from './types/stats.ts';

/** Count number of type of events with their properties in given array and return a event count object.
 * ```ts
 * const list = count(events);
 * console.log(list);
 * ```
 */
export function countColorEBG(
    ebg: LightColorEventBoxGroup[],
    environment: EnvironmentAllName = 'DefaultEnvironment',
): ICountEventBoxGroup {
    const commonEvent = EventList[environment]?.[1] ?? EventList['DefaultEnvironment'][1];
    const ebgCount: ICountEventBoxGroup = {};
    for (let i = commonEvent.length - 1; i >= 0; i--) {
        ebgCount[commonEvent[i]] = {
            total: 0,
            eventBox: 0,
            base: 0,
        };
    }

    for (let i = ebg.length - 1; i >= 0; i--) {
        if (!ebgCount[ebg[i].id]) {
            ebgCount[ebg[i].id] = {
                total: 0,
                eventBox: 0,
                base: 0,
            };
        }
        ebgCount[ebg[i].id].total++;
        ebgCount[ebg[i].id].eventBox += ebg[i].events.length;
        ebgCount[ebg[i].id].base += ebg[i].events.reduce(
            (t, e) => t + e.events.length,
            0,
        );
    }
    return ebgCount;
}

export function countRotationEBG(
    ebg: LightRotationEventBoxGroup[],
    environment: EnvironmentAllName = 'DefaultEnvironment',
): ICountEventBoxGroup {
    const commonEvent = EventList[environment]?.[1] ?? EventList['DefaultEnvironment'][1];
    const ebgCount: ICountEventBoxGroup = {};
    for (let i = commonEvent.length - 1; i >= 0; i--) {
        ebgCount[commonEvent[i]] = {
            total: 0,
            eventBox: 0,
            base: 0,
        };
    }

    for (let i = ebg.length - 1; i >= 0; i--) {
        if (!ebgCount[ebg[i].id]) {
            ebgCount[ebg[i].id] = {
                total: 0,
                eventBox: 0,
                base: 0,
            };
        }
        ebgCount[ebg[i].id].total++;
        ebgCount[ebg[i].id].eventBox += ebg[i].events.length;
        ebgCount[ebg[i].id].base += ebg[i].events.reduce(
            (t, e) => t + e.events.length,
            0,
        );
    }
    return ebgCount;
}

export function countTranslationEBG(
    ebg: LightTranslationEventBoxGroup[],
    environment: EnvironmentAllName = 'DefaultEnvironment',
): ICountEventBoxGroup {
    const commonEvent = EventList[environment]?.[1] ?? EventList['DefaultEnvironment'][1];
    const ebgCount: ICountEventBoxGroup = {};
    for (let i = commonEvent.length - 1; i >= 0; i--) {
        ebgCount[commonEvent[i]] = {
            total: 0,
            eventBox: 0,
            base: 0,
        };
    }

    for (let i = ebg.length - 1; i >= 0; i--) {
        if (!ebgCount[ebg[i].id]) {
            ebgCount[ebg[i].id] = {
                total: 0,
                eventBox: 0,
                base: 0,
            };
        }
        ebgCount[ebg[i].id].total++;
        ebgCount[ebg[i].id].eventBox += ebg[i].events.length;
        ebgCount[ebg[i].id].base += ebg[i].events.reduce(
            (t, e) => t + e.events.length,
            0,
        );
    }
    return ebgCount;
}
