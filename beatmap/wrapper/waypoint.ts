import { LINE_COUNT } from '../shared/constants.ts';
import { IWrapWaypoint } from '../../types/beatmap/wrapper/waypoint.ts';
import { WrapGridObject } from './gridObject.ts';

/** Waypoint beatmap class object. */
export abstract class WrapWaypoint<T extends Record<keyof T, unknown>> extends WrapGridObject<T>
    implements IWrapWaypoint<T> {
    abstract get direction(): IWrapWaypoint['direction'];
    abstract set direction(value: IWrapWaypoint['direction']);

    setDirection(value: IWrapWaypoint['direction']) {
        this.direction = value;
        return this;
    }

    mirror() {
        this.posX = LINE_COUNT - 1 - this.posX;
        switch (this.direction) {
            case 2:
                this.direction = 3;
                break;
            case 3:
                this.direction = 2;
                break;
            case 6:
                this.direction = 7;
                break;
            case 7:
                this.direction = 6;
                break;
            case 4:
                this.direction = 5;
                break;
            case 5:
                this.direction = 4;
                break;
        }
        return this;
    }

    isValid(): boolean {
        return this.direction >= 0 && this.direction <= 9 && this.direction !== (8 as 0);
    }
}
