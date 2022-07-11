import { IBookmark } from './bookmark.ts';
import { IBPMChange } from '../shared/bpm.ts';
import { IHeckCustomData } from './heck.ts';
import { IChromaCustomData, IChromaNote, IChromaObstacle } from './chroma.ts';
import { INENote, INEObstacle, INESlider } from './noodleExtensions.ts';
import { ICustomEvent } from './customEvent.ts';
import { ICustomDataBase } from '../shared/customData.ts';
import { IPointDefinition } from './pointDefinition.ts';

/** Custom Data interface for difficulty file.
 * @extends CustomData
 * @extends CCustomData
 * @extends INECustomData
 */
export interface ICustomDataDifficulty extends ICustomDataBase, IHeckCustomData, IChromaCustomData {
    customEvents?: ICustomEvent[];
    pointDefinitions?: IPointDefinition[];
    time?: number;
    BPMChanges?: IBPMChange[];
    _bookmarks?: IBookmark[];
}

export type ICustomDataNote = ICustomDataBase & IChromaNote & INENote;
export type ICustomDataSlider = ICustomDataBase & IChromaNote & INESlider;
export type ICustomDataObstacle = ICustomDataBase & IChromaObstacle & INEObstacle;
