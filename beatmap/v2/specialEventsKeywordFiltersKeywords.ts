import { ISpecialEventsKeywordFiltersKeywords } from '../../types/beatmap/v2/specialEventsKeywordFiltersKeywords.ts';
import { IWrapEventTypesForKeywordsAttribute } from '../../types/beatmap/wrapper/eventTypesForKeywords.ts';
import { ObjectReturnFn } from '../../types/utils.ts';
import { WrapEventTypesForKeywords } from '../wrapper/eventTypesForKeywords.ts';

/** Special event types for keywords beatmap v2 class object.
 *
 * Used in special event types with keywords.
 */
export class SpecialEventsKeywordFiltersKeywords extends WrapEventTypesForKeywords<
    Required<ISpecialEventsKeywordFiltersKeywords>
> {
    static default: ObjectReturnFn<Required<ISpecialEventsKeywordFiltersKeywords>> = {
        _keyword: '',
        _specialEvents: () => [],
    };

    protected constructor(
        specialEventsForKeywords: Required<ISpecialEventsKeywordFiltersKeywords>,
    ) {
        super(specialEventsForKeywords);
    }

    static create(): SpecialEventsKeywordFiltersKeywords[];
    static create(
        ...basicEventTypesForKeywords: Partial<IWrapEventTypesForKeywordsAttribute>[]
    ): SpecialEventsKeywordFiltersKeywords[];
    static create(
        ...basicEventTypesForKeywords: Partial<ISpecialEventsKeywordFiltersKeywords>[]
    ): SpecialEventsKeywordFiltersKeywords[];
    static create(
        ...basicEventTypesForKeywords: (
            & Partial<ISpecialEventsKeywordFiltersKeywords>
            & Partial<IWrapEventTypesForKeywordsAttribute>
        )[]
    ): SpecialEventsKeywordFiltersKeywords[];
    static create(
        ...basicEventTypesForKeywords: (
            & Partial<ISpecialEventsKeywordFiltersKeywords>
            & Partial<IWrapEventTypesForKeywordsAttribute>
        )[]
    ): SpecialEventsKeywordFiltersKeywords[] {
        const result: SpecialEventsKeywordFiltersKeywords[] = [];
        basicEventTypesForKeywords?.forEach((betfk) =>
            result.push(
                new this({
                    _keyword: betfk.keyword ??
                        betfk._keyword ??
                        SpecialEventsKeywordFiltersKeywords.default._keyword,
                    _specialEvents: betfk.events ??
                        betfk._specialEvents ??
                        SpecialEventsKeywordFiltersKeywords.default._specialEvents(),
                }),
            )
        );
        if (result.length) {
            return result;
        }
        return [
            new this({
                _keyword: SpecialEventsKeywordFiltersKeywords.default._keyword,
                _specialEvents: SpecialEventsKeywordFiltersKeywords.default._specialEvents(),
            }),
        ];
    }

    toJSON(): ISpecialEventsKeywordFiltersKeywords {
        return {
            _keyword: this.keyword,
            _specialEvents: this.events,
        };
    }

    get keyword() {
        return this.data._keyword;
    }
    set keyword(value: ISpecialEventsKeywordFiltersKeywords['_keyword']) {
        this.data._keyword = value;
    }

    get events() {
        return this.data._specialEvents;
    }
    set events(value: ISpecialEventsKeywordFiltersKeywords['_specialEvents']) {
        this.data._specialEvents = value;
    }
}
