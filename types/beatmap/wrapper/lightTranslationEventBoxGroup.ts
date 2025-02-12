import { IWrapEventBoxGroup, IWrapEventBoxGroupAttribute } from './eventBoxGroup.ts';
import {
    IWrapLightTranslationEventBox,
    IWrapLightTranslationEventBoxAttribute,
} from './lightTranslationEventBox.ts';

export interface IWrapLightTranslationEventBoxGroupAttribute<
    TGroup extends Record<keyof TGroup, unknown> = Record<string, unknown>,
    TBox extends Record<keyof TBox, unknown> = Record<string, unknown>,
    TBase extends Record<keyof TBase, unknown> = Record<string, unknown>,
    TFilter extends Record<keyof TFilter, unknown> = Record<string, unknown>,
> extends IWrapEventBoxGroupAttribute<TGroup, TBox, TBase, TFilter> {
    boxes: IWrapLightTranslationEventBoxAttribute<TBox, TBase, TFilter>[];
}

export interface IWrapLightTranslationEventBoxGroup<
    TGroup extends Record<keyof TGroup, unknown> = Record<string, unknown>,
    TBox extends Record<keyof TBox, unknown> = Record<string, unknown>,
    TBase extends Record<keyof TBase, unknown> = Record<string, unknown>,
    TFilter extends Record<keyof TFilter, unknown> = Record<string, unknown>,
> extends
    IWrapEventBoxGroup<TGroup, TBox, TBase, TFilter>,
    IWrapLightTranslationEventBoxGroupAttribute<TGroup, TBox, TBase, TFilter> {
    boxes: IWrapLightTranslationEventBox<TBox, TBase, TFilter>[];
}
