import { IWrapBaseObject, IWrapBaseObjectAttribute } from './baseObject.ts';

export interface IWrapLightTranslationBaseAttribute<
    T extends Record<keyof T, unknown> = Record<string, unknown>,
> extends IWrapBaseObjectAttribute<T> {
    /** Relative beat time `<float>` to event box group. */
    time: number;
    /** Use previous event translation value `<int>` in light translation. */
    previous: 0 | 1;
    /** Ease type `<int>` of light translation.
     * ```ts
     * -1 -> Step
     * 0 -> Linear
     * 1 -> EaseInQuad
     * 2 -> EaseOutQuad
     * 3 -> EaseInOutQuad
     * ```
     */
    easing: -1 | 0 | 1 | 2 | 3;
    /** Translation value `<float>` of light translation. */
    translation: number;
}

export interface IWrapLightTranslationBase<
    T extends Record<keyof T, unknown> = Record<string, unknown>,
> extends IWrapBaseObject<T>, IWrapLightTranslationBaseAttribute<T> {
    setTime(value: number): this;
    setPrevious(value: 0 | 1): this;
    setEasing(value: -1 | 0 | 1 | 2 | 3): this;
    setTranslation(value: number): this;
}
