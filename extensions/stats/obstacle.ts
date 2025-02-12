import { IObstacleCount } from './types/stats.ts';
import { Obstacle } from '../../beatmap/v3/obstacle.ts';

/** Count number of type of obstacles with their properties in given array and return a obstacle count object.
 * ```ts
 * const list = count(walls);
 * console.log(list);
 * ```
 */
export function countObstacle(obstacles: Obstacle[]): IObstacleCount {
    const obstacleCount: IObstacleCount = {
        total: 0,
        interactive: 0,
        chroma: 0,
        noodleExtensions: 0,
        mappingExtensions: 0,
    };
    for (let i = obstacles.length - 1; i > -1; i--) {
        obstacleCount.total++;
        if (obstacles[i].isInteractive()) {
            obstacleCount.interactive++;
        }
        if (obstacles[i].isChroma()) {
            obstacleCount.chroma++;
        }
        if (obstacles[i].isNoodleExtensions()) {
            obstacleCount.noodleExtensions++;
        }
        if (obstacles[i].isMappingExtensions()) {
            obstacleCount.mappingExtensions++;
        }
    }
    return obstacleCount;
}
