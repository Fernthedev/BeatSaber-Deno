import { IBaseObject } from '../../types/beatmap/v3/baseObject.ts';
import { IDifficulty } from '../../types/beatmap/v3/difficulty.ts';
import { Difficulty } from './difficulty.ts';
import { DifficultyCheck } from './dataCheck.ts';
import { deepCheck } from '../shared/dataCheck.ts';
import logger from '../../logger.ts';

function tag(name: string): string[] {
   return ['v3', 'parse', name];
}

const sortObjectTime = (a: IBaseObject, b: IBaseObject) => a.b - b.b;

export function difficulty(
   data: Partial<IDifficulty>,
   checkData: {
      enabled: boolean;
      throwError?: boolean;
   } = { enabled: true, throwError: true },
): Difficulty {
   logger.tInfo(tag('difficulty'), 'Parsing beatmap difficulty v3.x.x');
   if (!(data.version === '3.0.0' || data.version === '3.1.0' || data.version === '3.2.0')) {
      logger.tWarn(tag('difficulty'), 'Unidentified beatmap version');
      data.version = '3.0.0';
   }
   if (checkData.enabled) {
      deepCheck(data, DifficultyCheck, 'difficulty', data.version, checkData.throwError);
   }

   data.bpmEvents?.sort(sortObjectTime);
   data.rotationEvents?.sort(sortObjectTime);
   data.colorNotes?.sort(sortObjectTime);
   data.bombNotes?.sort(sortObjectTime);
   data.obstacles?.sort(sortObjectTime);
   data.sliders?.sort(sortObjectTime);
   data.burstSliders?.sort(sortObjectTime);
   data.waypoints?.sort(sortObjectTime);
   data.basicBeatmapEvents?.sort(sortObjectTime);
   data.colorBoostBeatmapEvents?.sort(sortObjectTime);
   data.lightColorEventBoxGroups?.sort(sortObjectTime);
   data.lightRotationEventBoxGroups?.sort(sortObjectTime);

   return new Difficulty(data);
}
