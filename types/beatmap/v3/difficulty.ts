import { IBPMEvent } from './bpmEvent.ts';
import { IRotationEvent } from './rotationEvent.ts';
import { IColorNote } from './colorNote.ts';
import { IBombNote } from './bombNote.ts';
import { IObstacle } from './obstacle.ts';
import { ISlider } from './slider.ts';
import { IBurstSlider } from './burstSlider.ts';
import { IWaypoint } from './waypoint.ts';
import { IBasicEvent } from './basicEvent.ts';
import { IColorBoostEvent } from './colorBoostEvent.ts';
import { ILightColorEventBoxGroup } from './lightColorEventBoxGroup.ts';
import { ILightRotationEventBoxGroup } from './lightRotationEventBoxGroup.ts';
import { IBasicEventTypesWithKeywords } from './basicEventTypesWithKeywords.ts';
import { ILightTranslationEventBoxGroup } from './lightTranslationEventBoxGroup.ts';
import { ICustomDataDifficulty } from './custom/customData.ts';
import { IBaseItem } from './baseItem.ts';

export interface IDifficulty extends IBaseItem {
    version: `3.${0 | 1 | 2}.0`;
    bpmEvents: IBPMEvent[];
    rotationEvents: IRotationEvent[];
    colorNotes: IColorNote[];
    bombNotes: IBombNote[];
    obstacles: IObstacle[];
    sliders: ISlider[];
    burstSliders: IBurstSlider[];
    waypoints: IWaypoint[];
    basicBeatmapEvents: IBasicEvent[];
    colorBoostBeatmapEvents: IColorBoostEvent[];
    lightColorEventBoxGroups: ILightColorEventBoxGroup[];
    lightRotationEventBoxGroups: ILightRotationEventBoxGroup[];
    lightTranslationEventBoxGroups: ILightTranslationEventBoxGroup[];
    basicEventTypesWithKeywords: IBasicEventTypesWithKeywords;
    useNormalEventsAsCompatibleEvents: boolean;
    customData?: ICustomDataDifficulty;
}
