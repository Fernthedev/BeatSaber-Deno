import { CharacteristicName } from '../../types/beatmap/shared/characteristic.ts';
import { EnvironmentAllName } from '../../types/beatmap/shared/environment.ts';
import { INote } from '../../types/beatmap/v2/note.ts';
import { IBaseObject as IBaseObjectV1 } from '../../types/beatmap/v2/object.ts';
import { IBaseObject as IBaseObjectV3 } from '../../types/beatmap/v3/baseObject.ts';
import { IWrapBaseNoteAttribute } from '../../types/beatmap/wrapper/baseNote.ts';
import { IWrapBaseObjectAttribute } from '../../types/beatmap/wrapper/baseObject.ts';
import { IWrapInfo } from '../../types/beatmap/wrapper/info.ts';
import { Vector2 } from '../../types/vector.ts';
import { LANE_SIZE } from './constants.ts';
import { IBombNote } from '../../types/beatmap/v3/bombNote.ts';

/** Convert grid lane size unit to unity unit */
export function gridToUnityUnit(value: number) {
   return value * LANE_SIZE;
}

/** Convert unity unit to grid lane size unit */
export function unityToGridUnit(value: number) {
   return value / LANE_SIZE;
}

export function currentEnvironment(
   info: IWrapInfo,
   characteristic?: CharacteristicName,
): EnvironmentAllName {
   if (characteristic === '360Degree' || characteristic === '90Degree') {
      return info.allDirectionsEnvironmentName;
   }
   return info.environmentName;
}

/** Pass this to wrapper object array `sort` function as an argument */
export function sortObjectFn(a: IWrapBaseObjectAttribute, b: IWrapBaseObjectAttribute) {
   return a.time - b.time;
}

/** Pass this to wrapper note array `sort` function as an argument */
export function sortNoteFn(a: IWrapBaseNoteAttribute, b: IWrapBaseNoteAttribute) {
   if (Array.isArray(a.customData.coordinates) && Array.isArray(b.customData.coordinates)) {
      return (
         a.time - b.time ||
         (a.customData.coordinates as Vector2)[0] - (b.customData.coordinates as Vector2)[0] ||
         (a.customData.coordinates as Vector2)[1] - (b.customData.coordinates as Vector2)[1]
      );
   }
   if (Array.isArray(a.customData._position) && Array.isArray(b.customData._position)) {
      return (
         a.time - b.time ||
         (a.customData._position as Vector2)[0] - (b.customData._position as Vector2)[0] ||
         (a.customData._position as Vector2)[1] - (b.customData._position as Vector2)[1]
      );
   }
   return a.time - b.time || a.posX - b.posX || a.posY - b.posY;
}

/** Pass this to v1 or v2 object array `sort` function as an argument */
export function sortV2ObjectFn(a: IBaseObjectV1, b: IBaseObjectV1) {
   return a._time - b._time;
}

/** Pass this to v1 or v2 note array `sort` function as an argument */
export function sortV2NoteFn(a: INote, b: INote) {
   if (Array.isArray(a._customData?._position) && Array.isArray(b._customData?._position)) {
      return (
         a._time - b._time ||
         (a._customData!._position as Vector2)[0] - (b._customData!._position as Vector2)[0] ||
         (a._customData!._position as Vector2)[1] - (b._customData!._position as Vector2)[1]
      );
   }
   return a._time - b._time || a._lineIndex - b._lineLayer || a._lineIndex - b._lineLayer;
}

/** Pass this to v3 object array `sort` function as an argument */
export function sortV3ObjectFn(a: IBaseObjectV3, b: IBaseObjectV3) {
   return a.b - b.b;
}

/** Pass this to v3 note array `sort` function as an argument */
export function sortV3NoteFn(a: IBombNote, b: IBombNote) {
   if (Array.isArray(a.customData?.coordinates) && Array.isArray(b.customData?.coordinates)) {
      return (
         a.b - b.b ||
         (a.customData!.coordinates as Vector2)[0] - (b.customData!.coordinates as Vector2)[0] ||
         (a.customData!.coordinates as Vector2)[1] - (b.customData!.coordinates as Vector2)[1]
      );
   }
   return a.b - b.b || a.x - b.x || a.y - b.y;
}
