import { WrapBaseObject } from './baseObject.ts';
import { IWrapGridObject } from '../../types/beatmap/wrapper/gridObject.ts';
import { LINE_COUNT } from '../shared/constants.ts';
import { Vector2 } from '../../types/vector.ts';

/** Beatmap grid class object. */
export abstract class WrapGridObject<T extends Record<keyof T, unknown>> extends WrapBaseObject<T>
    implements IWrapGridObject<T> {
    abstract get posX(): IWrapGridObject['posX'];
    abstract set posX(value: IWrapGridObject['posX']);
    abstract get posY(): IWrapGridObject['posY'];
    abstract set posY(value: IWrapGridObject['posY']);

    setPosX(value: number) {
        this.posX = value;
        return this;
    }
    setPosY(value: number) {
        this.posY = value;
        return this;
    }

    mirror(_ = true) {
        this.posX = LINE_COUNT - 1 - this.posX;
        return this;
    }

    swapPosition(toSwap: IWrapGridObject) {
        const tempX = toSwap.posX;
        toSwap.posX = this.posX;
        this.posX = tempX;
        const tempY = toSwap.posY;
        toSwap.posY = this.posY;
        this.posY = tempY;
        return this;
    }

    getPosition(type?: 'vanilla' | 'me' | 'ne'): Vector2 {
        switch (type) {
            case 'vanilla':
                return [this.posX - 2, this.posY];
            case 'me':
                return [
                    (this.posX <= -1000
                        ? this.posX / 1000
                        : this.posX >= 1000
                        ? this.posX / 1000
                        : this.posX) - 2,
                    this.posY <= -1000
                        ? this.posY / 1000
                        : this.posY >= 1000
                        ? this.posY / 1000
                        : this.posY,
                ];
            case 'ne':
                return [this.posX - 2, this.posY];
            default:
                return [
                    (this.posX <= -1000
                        ? this.posX / 1000
                        : this.posX >= 1000
                        ? this.posX / 1000
                        : this.posX) - 2,
                    this.posY <= -1000
                        ? this.posY / 1000
                        : this.posY >= 1000
                        ? this.posY / 1000
                        : this.posY,
                ];
        }
    }

    getDistance(compareTo: IWrapGridObject) {
        const [nX1, nY1] = this.getPosition();
        const [nX2, nY2] = compareTo.getPosition();
        return Math.sqrt(Math.pow(nX2 - nX1, 2) + Math.pow(nY2 - nY1, 2));
    }

    isVertical(compareTo: IWrapGridObject) {
        const [nX1] = this.getPosition();
        const [nX2] = compareTo.getPosition();
        const d = nX1 - nX2;
        return d > -0.001 && d < 0.001;
    }

    isHorizontal(compareTo: IWrapGridObject) {
        const [_, nY1] = this.getPosition();
        const [_2, nY2] = compareTo.getPosition();
        const d = nY1 - nY2;
        return d > -0.001 && d < 0.001;
    }

    isDiagonal(compareTo: IWrapGridObject) {
        const [nX1, nY1] = this.getPosition();
        const [nX2, nY2] = compareTo.getPosition();
        const dX = Math.abs(nX1 - nX2);
        const dY = Math.abs(nY1 - nY2);
        return dX === dY;
    }

    isInline(compareTo: IWrapGridObject, lapping = 0.5) {
        return this.getDistance(compareTo) <= lapping;
    }

    isAdjacent(compareTo: IWrapGridObject) {
        const d = this.getDistance(compareTo);
        return d > 0.499 && d < 1.001;
    }

    isWindow(compareTo: IWrapGridObject, distance = 1.8) {
        return this.getDistance(compareTo) > distance;
    }

    isSlantedWindow(compareTo: IWrapGridObject) {
        return (
            this.isWindow(compareTo) &&
            !this.isDiagonal(compareTo) &&
            !this.isHorizontal(compareTo) &&
            !this.isVertical(compareTo)
        );
    }
}
