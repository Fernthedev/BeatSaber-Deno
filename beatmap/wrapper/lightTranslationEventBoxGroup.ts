import { WrapEventBoxGroup } from './eventBoxGroup.ts';
import { IWrapLightTranslationEventBoxGroup } from '../../types/beatmap/wrapper/lightTranslationEventBoxGroup.ts';
import { IWrapLightTranslationEventBox } from '../../types/beatmap/wrapper/lightTranslationEventBox.ts';

/** Light translation event box group beatmap class object. */
export abstract class WrapLightTranslationEventBoxGroup<
    TGroup extends Record<keyof TGroup, unknown>,
    TBox extends Record<keyof TBox, unknown>,
    TBase extends Record<keyof TBase, unknown>,
    TFilter extends Record<keyof TFilter, unknown>,
> extends WrapEventBoxGroup<TGroup, TBox, TBase, TFilter>
    implements IWrapLightTranslationEventBoxGroup<TGroup, TBox, TBase, TFilter> {
    abstract get boxes(): IWrapLightTranslationEventBox<TBox, TBase, TFilter>[];
    abstract set boxes(value: IWrapLightTranslationEventBox<TBox, TBase, TFilter>[]);
}
