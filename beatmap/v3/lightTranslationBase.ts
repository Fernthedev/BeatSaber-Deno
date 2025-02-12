import { ILightTranslationBase } from '../../types/beatmap/v3/lightTranslationBase.ts';
import { IWrapLightTranslationBaseAttribute } from '../../types/beatmap/wrapper/lightTranslationBase.ts';
import { ObjectReturnFn } from '../../types/utils.ts';
import { deepCopy } from '../../utils/misc.ts';
import { WrapLightTranslationBase } from '../wrapper/lightTranslationBase.ts';

/** Light translation base beatmap v3 class object. */
export class LightTranslationBase extends WrapLightTranslationBase<
    Required<ILightTranslationBase>
> {
    static default: ObjectReturnFn<Required<ILightTranslationBase>> = {
        b: 0,
        p: 0,
        e: 0,
        t: 0,
        customData: () => {
            return {};
        },
    };

    protected constructor(lightTranslationBase: Required<ILightTranslationBase>) {
        super(lightTranslationBase);
    }

    static create(): LightTranslationBase[];
    static create(
        ...lightTranslations: Partial<
            IWrapLightTranslationBaseAttribute<Required<ILightTranslationBase>>
        >[]
    ): LightTranslationBase[];
    static create(...lightTranslations: Partial<ILightTranslationBase>[]): LightTranslationBase[];
    static create(
        ...lightTranslations: (
            & Partial<ILightTranslationBase>
            & Partial<IWrapLightTranslationBaseAttribute<Required<ILightTranslationBase>>>
        )[]
    ): LightTranslationBase[];
    static create(
        ...lightTranslations: (
            & Partial<ILightTranslationBase>
            & Partial<IWrapLightTranslationBaseAttribute<Required<ILightTranslationBase>>>
        )[]
    ): LightTranslationBase[] {
        const result: LightTranslationBase[] = [];
        lightTranslations?.forEach((lr) =>
            result.push(
                new this({
                    b: lr.time ?? lr.b ?? LightTranslationBase.default.b,
                    p: lr.previous ?? lr.p ?? LightTranslationBase.default.p,
                    e: lr.easing ?? lr.e ?? LightTranslationBase.default.e,
                    t: lr.translation ?? lr.t ?? LightTranslationBase.default.t,
                    customData: lr.customData ?? LightTranslationBase.default.customData(),
                }),
            )
        );
        if (result.length) {
            return result;
        }
        return [
            new this({
                b: LightTranslationBase.default.b,
                p: LightTranslationBase.default.p,
                e: LightTranslationBase.default.e,
                t: LightTranslationBase.default.t,
                customData: LightTranslationBase.default.customData(),
            }),
        ];
    }

    toJSON(): Required<ILightTranslationBase> {
        return {
            b: this.time,
            p: this.previous,
            e: this.easing,
            t: this.translation,
            customData: deepCopy(this.data.customData),
        };
    }

    get time() {
        return this.data.b;
    }
    set time(value: ILightTranslationBase['b']) {
        this.data.b = value;
    }

    get previous() {
        return this.data.p;
    }
    set previous(value: ILightTranslationBase['p']) {
        this.data.p = value;
    }

    get easing() {
        return this.data.e;
    }
    set easing(value: ILightTranslationBase['e']) {
        this.data.e = value;
    }

    get translation() {
        return this.data.t;
    }
    set translation(value: ILightTranslationBase['t']) {
        this.data.t = value;
    }

    get customData(): NonNullable<ILightTranslationBase['customData']> {
        return this.data.customData;
    }
    set customData(value: NonNullable<ILightTranslationBase['customData']>) {
        this.data.customData = value;
    }
}
