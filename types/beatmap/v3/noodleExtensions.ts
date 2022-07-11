import { PercentPointDefinition, Vector2, Vector3, Vector3PointDefinition } from '../shared/heck.ts';
import { IChromaAnimation } from './chroma.ts';
import { IHeckCustomEventDataBase } from './heck.ts';

export enum NEDataAbbr {
    childrenTracks = 'Ct',
    color = 'C',
    definitePosition = 'Dp',
    dissolve = 'D',
    dissolveArrow = 'Da',
    duration = 'Dur',
    easing = 'E',
    interactable = 'I',
    localRotation = 'Lr',
    parentTrack = 'Pt',
    position = 'P',
    rotation = 'R',
    scale = 'S',
    time = 'T',
    track = 'Tr',
    worldPositionStays = 'Wps',
}

/** Noodle Extensions Object interface for Beatmap Object. */
interface INEObject {
    coordinates?: Vector2;
    worldRotation?: number | Vector3;
    localRotation?: Vector3;
    noteJumpMovementSpeed?: number;
    noteJumpStartBeatOffset?: number;
    uninteractable?: boolean;
    track?: string | string[];
    animation?: INEAnimation & IChromaAnimation;
}

/** Noodle Extensions Note interface for Beatmap Note.
 * @extends INEObject
 */
export interface INENote extends INEObject {
    flip?: Vector2;
    disableNoteGravity?: boolean;
    disableNoteLook?: boolean;
}

/** Noodle Extensions Slider interface for Beatmap Slider.
 * @extends INENote
 */
export interface INESlider extends INENote {
    tailCoordinates?: Vector2;
}

/** Noodle Extensions Obstacle interface for Beatmap Obstacle.
 * @extends INEObject
 */
export interface INEObstacle extends INEObject {
    size?: Vector3;
}

/** AssignPathAnimation interface for Noodle Extensions Custom Event.
 * @extends IHeckCustomEventDataBase
 */
export interface INECustomEventDataAnimateTrack extends IHeckCustomEventDataBase {
    dissolve?: string | PercentPointDefinition[];
    dissolveArrow?: string | PercentPointDefinition[];
    interactable?: string | PercentPointDefinition[];
    time?: string | PercentPointDefinition[];
}

/** AssignPathAnimation interface for Noodle Extensions Custom Event.
 * @extends IHeckCustomEventDataBase
 */
export interface INECustomEventDataAssignPathAnimation extends IHeckCustomEventDataBase {
    dissolve?: string | PercentPointDefinition[];
    dissolveArrow?: string | PercentPointDefinition[];
    interactable?: string | PercentPointDefinition[];
    definitePosition?: string | Vector3PointDefinition[];
}

/** AssignPathAnimation interface for Noodle Extensions Custom Event. */
export interface INECustomEventDataAssignTrackParent {
    childrenTracks: string[];
    parentTrack: string;
    worldPositionStays?: boolean;
}

/** AssignPlayerToTrack interface for Noodle Extensions Custom Event.
 * @extends INECustomEventDataBase
 */
export interface INECustomEventDataAssignPlayerToTrack extends IHeckCustomEventDataBase {
    track: string;
}

/** Noodle Extensions Animation interface for Noodle Extensions Object. */
export interface INEAnimation {
    offsetPosition?: string | Vector3PointDefinition[];
    offsetRotation?: string | Vector3PointDefinition[];
    localRotation?: string | Vector3PointDefinition[];
    scale?: string | Vector3PointDefinition[];
    dissolve?: string | PercentPointDefinition[];
    dissolveArrow?: string | PercentPointDefinition[];
    interactable?: string | PercentPointDefinition[];
    definitePosition?: string | Vector3PointDefinition[];
    time?: string | PercentPointDefinition[];
}
