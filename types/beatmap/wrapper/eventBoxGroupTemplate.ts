import { IWrapEventBox } from './eventBox.ts';
import { IWrapEventBoxGroup } from './eventBoxGroup.ts';

export interface IWrapEventBoxGroupTemplate<
    TGroup extends Record<keyof TGroup, unknown> = Record<string, unknown>,
    TBox extends Record<keyof TBox, unknown> = Record<string, unknown>,
    TBase extends Record<keyof TBase, unknown> = Record<string, unknown>,
    TFilter extends Record<keyof TFilter, unknown> = Record<string, unknown>,
> extends IWrapEventBoxGroup<TGroup> {
    events: IWrapEventBox<TBox, TBase, TFilter>[];
}
