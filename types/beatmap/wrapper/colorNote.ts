import { IWrapBaseNote, IWrapBaseNoteAttribute } from './baseNote.ts';

export interface IWrapColorNoteAttribute<
    T extends Record<keyof T, unknown> = Record<string, unknown>,
> extends IWrapBaseNoteAttribute<T> {
    /** Type `<int>` of note.
     * ```ts
     * 0 -> Red
     * 1 -> Blue
     * 3 -> Bomb
     * ```
     */
    type: 0 | 1 | 3;
    /** Angle offset in degree counter-clockwise `<int>` of note.*/
    angleOffset: number;
}

export interface IWrapColorNote<T extends Record<keyof T, unknown> = Record<string, unknown>>
    extends IWrapBaseNote<T>, IWrapColorNoteAttribute<T> {
    setType(value: 0 | 1 | 3): this;
    setAngleOffset(value: number): this;

    /** Check if note is a red or blue note.
     * ```ts
     * if (note.isNote()) {}
     * ```
     */
    isNote(): boolean;

    /** Check if note is a bomb note.
     * ```ts
     * if (note.isBomb()) {}
     * ```
     */
    isBomb(): boolean;

    /** Compare current note with the note ahead of it and return if the notes is a double.
     * ```ts
     * if (note.isDouble(notes, index)) {}
     * ```
     */
    isDouble(compareTo: IWrapColorNote, tolerance: number): boolean;
}
