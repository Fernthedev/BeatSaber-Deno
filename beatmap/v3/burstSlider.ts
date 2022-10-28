import { IBurstSlider } from '../../types/beatmap/v3/burstSlider.ts';
import { ObjectReturnFn } from '../../types/utils.ts';
import { deepCopy } from '../../utils/misc.ts';
import { WrapBurstSlider } from '../wrapper/burstSlider.ts';

/** Burst slider beatmap v3 class object.
 *
 * Also known as chain.
 */
export class BurstSlider extends WrapBurstSlider<Required<IBurstSlider>> {
    static default: ObjectReturnFn<Required<IBurstSlider>> = {
        b: 0,
        c: 0,
        x: 0,
        y: 0,
        d: 0,
        tb: 0,
        tx: 0,
        ty: 0,
        sc: 1,
        s: 1,
        customData: () => {
            return {};
        },
    };

    protected constructor(burstSlider: Required<IBurstSlider>) {
        super(burstSlider);
    }

    static create(): BurstSlider[];
    static create(...burstSliders: Partial<IBurstSlider>[]): BurstSlider[];
    static create(...burstSliders: Partial<IBurstSlider>[]): BurstSlider[] {
        const result: BurstSlider[] = [];
        burstSliders?.forEach((bs) =>
            result.push(
                new this({
                    b: bs.b ?? bs.tb ?? BurstSlider.default.b,
                    c: bs.c ?? BurstSlider.default.c,
                    x: bs.x ?? BurstSlider.default.x,
                    y: bs.y ?? BurstSlider.default.y,
                    d: bs.d ?? BurstSlider.default.d,
                    tb: bs.tb ?? bs.b ?? BurstSlider.default.tb,
                    tx: bs.tx ?? BurstSlider.default.tx,
                    ty: bs.ty ?? BurstSlider.default.ty,
                    sc: bs.sc ?? BurstSlider.default.sc,
                    s: bs.s ?? BurstSlider.default.s,
                    customData: bs.customData ?? BurstSlider.default.customData(),
                }),
            )
        );
        if (result.length) {
            return result;
        }
        return [
            new this({
                b: BurstSlider.default.b,
                c: BurstSlider.default.c,
                x: BurstSlider.default.x,
                y: BurstSlider.default.y,
                d: BurstSlider.default.d,
                tb: BurstSlider.default.tb,
                tx: BurstSlider.default.tx,
                ty: BurstSlider.default.ty,
                sc: BurstSlider.default.sc,
                s: BurstSlider.default.s,
                customData: BurstSlider.default.customData(),
            }),
        ];
    }

    toJSON(): Required<IBurstSlider> {
        return {
            b: this.time,
            c: this.color,
            x: this.posX,
            y: this.posY,
            d: this.direction,
            tb: this.tailTime,
            tx: this.tailPosX,
            ty: this.tailPosY,
            sc: this.sliceCount,
            s: this.squish,
            customData: deepCopy(this.customData),
        };
    }

    get time() {
        return this.data.b;
    }
    set time(value: IBurstSlider['b']) {
        this.data.b = value;
    }

    get posX() {
        return this.data.x;
    }
    set posX(value: IBurstSlider['x']) {
        this.data.x = value;
    }

    get posY() {
        return this.data.y;
    }
    set posY(value: IBurstSlider['y']) {
        this.data.y = value;
    }

    get color() {
        return this.data.c;
    }
    set color(value: IBurstSlider['c']) {
        this.data.c = value;
    }

    get direction() {
        return this.data.d;
    }
    set direction(value: IBurstSlider['d']) {
        this.data.d = value;
    }

    get tailTime() {
        return this.data.tb;
    }
    set tailTime(value: IBurstSlider['tb']) {
        this.data.tb = value;
    }

    get tailPosX() {
        return this.data.tx;
    }
    set tailPosX(value: IBurstSlider['tx']) {
        this.data.tx = value;
    }

    get tailPosY() {
        return this.data.ty;
    }
    set tailPosY(value: IBurstSlider['ty']) {
        this.data.ty = value;
    }

    get sliceCount() {
        return this.data.sc;
    }
    set sliceCount(value: IBurstSlider['sc']) {
        this.data.sc = value;
    }

    get squish() {
        return this.data.s;
    }
    set squish(value: IBurstSlider['s']) {
        this.data.s = value;
    }

    get customData(): NonNullable<IBurstSlider['customData']> {
        return this.data.customData;
    }
    set customData(value: NonNullable<IBurstSlider['customData']>) {
        this.data.customData = value;
    }

    setCustomData(value: NonNullable<IBurstSlider['customData']>): this {
        this.customData = value;
        return this;
    }
    addCustomData(object: IBurstSlider['customData']): this {
        this.customData = { ...this.customData, object };
        return this;
    }

    mirror(flipColor = true) {
        if (this.customData.coordinates) {
            this.customData.coordinates[0] = -1 - this.customData.coordinates[0];
        }
        if (this.customData.flip) {
            this.customData.flip[0] = -1 - this.customData.flip[0];
        }
        if (this.customData.animation) {
            if (Array.isArray(this.customData.animation.definitePosition)) {
                this.customData.animation.definitePosition.forEach((dp) => {
                    dp[0] = -dp[0];
                });
            }
            if (Array.isArray(this.customData.animation.offsetPosition)) {
                this.customData.animation.offsetPosition.forEach((op) => {
                    op[0] = -op[0];
                });
            }
        }
        return super.mirror(flipColor);
    }
}
