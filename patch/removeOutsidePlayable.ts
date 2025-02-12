import { isV3 } from '../beatmap/version.ts';
import logger from '../logger.ts';
import { BeatPerMinute } from '../beatmap/shared/bpm.ts';
import { IWrapBaseObject } from '../types/beatmap/wrapper/baseObject.ts';
import { IWrapDifficulty } from '../types/beatmap/wrapper/difficulty.ts';

let duration = 0;
const filterTime = <T extends IWrapBaseObject>(obj: T) =>
    duration ? !(obj.time < 0 || obj.time > duration) : !(obj.time < 0);

export default function (data: IWrapDifficulty, bpm: BeatPerMinute, audioLength: number) {
    duration = bpm.toBeatTime(audioLength, true);
    logger.debug('[patch::removeOutsidePlayable] Removing outside playable BPM events');
    data.bpmEvents = data.bpmEvents.filter(filterTime);
    logger.debug('[patch::removeOutsidePlayable] Removing outside playable rotation events');
    data.rotationEvents = data.rotationEvents.filter(filterTime);
    logger.debug('[patch::removeOutsidePlayable] Removing outside playable color notes');
    data.colorNotes = data.colorNotes.filter(filterTime);
    logger.debug('[patch::removeOutsidePlayable] Removing outside playable bomb notes');
    data.bombNotes = data.bombNotes.filter(filterTime);
    logger.debug('[patch::removeOutsidePlayable] Removing outside playable obstacles');
    data.obstacles = data.obstacles.filter(filterTime);
    logger.debug('[patch::removeOutsidePlayable] Removing outside playable sliders');
    data.sliders = data.sliders.filter(filterTime);
    logger.debug('[patch::removeOutsidePlayable] Removing outside playable burst sliders');
    data.burstSliders = data.burstSliders.filter(filterTime);
    logger.debug('[patch::removeOutsidePlayable] Removing outside playable waypoints');
    data.waypoints = data.waypoints.filter(filterTime);
    logger.debug('[patch::removeOutsidePlayable] Removing outside playable fake color notes');
    if (isV3(data)) {
        if (data.customData.fakeColorNotes) {
            data.customData.fakeColorNotes = data.customData.fakeColorNotes.filter((obj) =>
                duration ? !(obj.b < 0 || obj.b > duration) : !(obj.b < 0)
            );
        }
        logger.debug('[patch::removeOutsidePlayable] Removing outside playable fake bomb notes');
        if (data.customData.fakeBombNotes) {
            data.customData.fakeBombNotes = data.customData.fakeBombNotes.filter((obj) =>
                duration ? !(obj.b < 0 || obj.b > duration) : !(obj.b < 0)
            );
        }
        logger.debug('[patch::removeOutsidePlayable] Removing outside playable fake obstacles');
        if (data.customData.fakeObstacles) {
            data.customData.fakeObstacles = data.customData.fakeObstacles.filter((obj) =>
                duration ? !(obj.b < 0 || obj.b > duration) : !(obj.b < 0)
            );
        }
        logger.debug('[patch::removeOutsidePlayable] Removing outside playable fake burst sliders');
        if (data.customData.fakeBurstSliders) {
            data.customData.fakeBurstSliders = data.customData.fakeBurstSliders.filter((obj) =>
                duration ? !(obj.b < 0 || obj.b > duration) : !(obj.b < 0)
            );
        }
    }
    logger.debug('[patch::removeOutsidePlayable] Removing outside playable basic events');
    data.basicEvents = data.basicEvents.filter(filterTime);
    logger.debug(
        '[patch::removeOutsidePlayable] Removing outside playable color boost beatmap events',
    );
    data.colorBoostEvents = data.colorBoostEvents.filter(filterTime);
    logger.debug(
        '[patch::removeOutsidePlayable] Removing outside playable light color event box groups',
    );
    data.lightColorEventBoxGroups = data.lightColorEventBoxGroups.filter(filterTime);
    logger.debug(
        '[patch::removeOutsidePlayable] Removing outside playable light rotation event box groups',
    );
    data.lightRotationEventBoxGroups = data.lightRotationEventBoxGroups.filter(filterTime);
}
