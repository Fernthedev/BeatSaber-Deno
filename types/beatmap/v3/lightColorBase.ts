import { ICustomDataBase } from '../shared/custom/customData.ts';

export interface ILightColorBase {
    /** Relative beat time `<float>` to event box group. */
    b: number;
    /** Transition type `<int>` of base light color.
     * ```ts
     * 0 -> Instant
     * 1 -> Interpolate
     * 2 -> Extend
     * ```
     */
    i: 0 | 1 | 2;
    /** Color `<int>` of base light color.
     * ```ts
     * -1 -> None
     * 0 -> Red
     * 1 -> Blue
     * 2 -> White
     * ```
     */
    c: -1 | 0 | 1 | 2;
    /** Brightness `<float>` of base light color.
     *
     * Range: `0-1` (0% to 100%), can be more than 1.
     */
    s: number;
    /** Frequency `<int>` of base light color.
     *
     * Blinking frequency in beat time of the event, `0` is static.
     */
    f: number;
    customData?: ICustomDataBase;
}
