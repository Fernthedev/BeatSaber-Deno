import { Vector2 } from '../../types/vector.ts';
import { IObstacle } from '../../types/beatmap/v2/obstacle.ts';
import { IWrapObstacleAttribute } from '../../types/beatmap/wrapper/obstacle.ts';
import { ObjectReturnFn } from '../../types/utils.ts';
import { deepCopy } from '../../utils/misc.ts';
import { WrapObstacle } from '../wrapper/obstacle.ts';
import { ModType } from '../../types/beatmap/shared/modCheck.ts';

/** Obstacle beatmap v2 class object. */
export class Obstacle extends WrapObstacle<Required<IObstacle>> {
    static default: ObjectReturnFn<Required<IObstacle>> = {
        _time: 0,
        _lineIndex: 0,
        _type: 0,
        _duration: 1,
        _width: 1,
        _customData: () => {
            return {};
        },
    };

    constructor();
    constructor(data: Partial<IWrapObstacleAttribute<Required<IObstacle>>>);
    constructor(data: Partial<IObstacle>);
    constructor(data: Partial<IObstacle> & Partial<IWrapObstacleAttribute<Required<IObstacle>>>);
    constructor(
        data: Partial<IObstacle> & Partial<IWrapObstacleAttribute<Required<IObstacle>>> = {},
    ) {
        super({
            _time: data.time ?? data._time ?? Obstacle.default._time,
            _type: data._type ?? Obstacle.default._type,
            _lineIndex: data.posX ?? data._lineIndex ?? Obstacle.default._lineIndex,
            _duration: data.duration ?? data._duration ?? Obstacle.default._duration,
            _width: data.width ?? data._width ?? Obstacle.default._width,
            _customData: data.customData ?? data._customData ?? Obstacle.default._customData(),
        });
    }

    static create(): Obstacle[];
    static create(...data: Partial<IWrapObstacleAttribute<Required<IObstacle>>>[]): Obstacle[];
    static create(...data: Partial<IObstacle>[]): Obstacle[];
    static create(
        ...data: (Partial<IObstacle> & Partial<IWrapObstacleAttribute<Required<IObstacle>>>)[]
    ): Obstacle[];
    static create(
        ...data: (Partial<IObstacle> & Partial<IWrapObstacleAttribute<Required<IObstacle>>>)[]
    ): Obstacle[] {
        const result: Obstacle[] = [];
        data?.forEach((obj) => result.push(new this(obj)));
        if (result.length) {
            return result;
        }
        return [new this()];
    }

    toJSON(): Required<IObstacle> {
        return {
            _time: this.time,
            _type: this.type,
            _lineIndex: this.posX,
            _duration: this.duration,
            _width: this.width,
            _customData: deepCopy(this.customData),
        };
    }

    get time() {
        return this.data._time;
    }
    set time(value: IObstacle['_time']) {
        this.data._time = value;
    }

    get posX() {
        return this.data._lineIndex;
    }
    set posX(value: IObstacle['_lineIndex']) {
        this.data._lineIndex = value;
    }

    get type() {
        return this.data._type;
    }
    set type(value: IObstacle['_type']) {
        this.data._type = value;
    }

    get posY() {
        return this.type == 1 ? 0 : 2;
    }
    set posY(value: 0 | 2) {
        if (value != 0 && value != 2) {
            this.type = 0;
            return;
        }
    }

    get duration() {
        return this.data._duration;
    }
    set duration(value: IObstacle['_duration']) {
        this.data._duration = value;
    }

    get width() {
        return this.data._width;
    }
    set width(value: IObstacle['_width']) {
        this.data._width = value;
    }

    get height() {
        return this.type == 1 ? 3 : 5;
    }
    set height(value: 3 | 5) {
        if (value != 3 && value != 5) {
            this.type = 0;
            return;
        }
    }

    get customData(): NonNullable<IObstacle['_customData']> {
        return this.data._customData;
    }
    set customData(value: NonNullable<IObstacle['_customData']>) {
        this.data._customData = value;
    }

    getPosition(type?: ModType): Vector2 {
        switch (type) {
            case 'vanilla':
                return super.getPosition();
            case 'ne':
                if (this.customData._position) {
                    return [this.customData._position[0], this.customData._position[1]];
                }
            /** falls through */
            case 'me':
            default:
                return [
                    (this.posX <= -1000
                        ? this.posX / 1000
                        : this.posX >= 1000
                        ? this.posX / 1000
                        : this.posX) - 2,
                    (this.posY <= -1000
                        ? this.posY / 1000
                        : this.posY >= 1000
                        ? this.posY / 1000
                        : this.posY) - 0.5,
                ];
        }
    }

    isChroma(): boolean {
        return Array.isArray(this.customData._color);
    }

    isNoodleExtensions(): boolean {
        return (
            Array.isArray(this.customData._animation) ||
            typeof this.customData._fake === 'boolean' ||
            typeof this.customData._interactable === 'boolean' ||
            Array.isArray(this.customData._localRotation) ||
            typeof this.customData._noteJumpMovementSpeed === 'number' ||
            typeof this.customData._noteJumpStartBeatOffset === 'number' ||
            Array.isArray(this.customData._position) ||
            Array.isArray(this.customData._rotation) ||
            Array.isArray(this.customData._scale)
        );
    }

    isMappingExtensions(): boolean {
        return this.type > 2 || this.posX <= -1000 || this.posX >= 1000;
    }
}
