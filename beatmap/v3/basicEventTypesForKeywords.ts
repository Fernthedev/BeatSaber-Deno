import { IBasicEventTypesForKeywords } from '../../types/beatmap/v3/basicEventTypesForKeywords.ts';
import { IWrapEventTypesForKeywordsAttribute } from '../../types/beatmap/wrapper/eventTypesForKeywords.ts';
import { ObjectReturnFn } from '../../types/utils.ts';
import { WrapEventTypesForKeywords } from '../wrapper/eventTypesForKeywords.ts';

/** Basic event types for keywords beatmap v3 class object.
 *
 * Used in basic event types with keywords.
 */
export class BasicEventTypesForKeywords extends WrapEventTypesForKeywords<
    Required<IBasicEventTypesForKeywords>
> {
    static default: ObjectReturnFn<Required<IBasicEventTypesForKeywords>> = {
        k: '',
        e: () => [],
    };

    protected constructor(basicEventTypesForKeywords: Required<IBasicEventTypesForKeywords>) {
        super(basicEventTypesForKeywords);
    }

    static create(): BasicEventTypesForKeywords[];
    static create(
        ...basicEventTypesForKeywords: Partial<
            IWrapEventTypesForKeywordsAttribute<Required<IBasicEventTypesForKeywords>>
        >[]
    ): BasicEventTypesForKeywords[];
    static create(
        ...basicEventTypesForKeywords: (
            & Partial<IBasicEventTypesForKeywords>
            & Partial<IWrapEventTypesForKeywordsAttribute<Required<IBasicEventTypesForKeywords>>>
        )[]
    ): BasicEventTypesForKeywords[];
    static create(
        ...basicEventTypesForKeywords: (
            & Partial<IBasicEventTypesForKeywords>
            & Partial<IWrapEventTypesForKeywordsAttribute<Required<IBasicEventTypesForKeywords>>>
        )[]
    ): BasicEventTypesForKeywords[] {
        const result: BasicEventTypesForKeywords[] = [];
        basicEventTypesForKeywords?.forEach((betfk) =>
            result.push(
                new this({
                    k: betfk.keyword ?? betfk.k ?? BasicEventTypesForKeywords.default.k,
                    e: betfk.events ?? betfk.e ?? BasicEventTypesForKeywords.default.e(),
                }),
            )
        );
        if (result.length) {
            return result;
        }
        return [
            new this({
                k: BasicEventTypesForKeywords.default.k,
                e: BasicEventTypesForKeywords.default.e(),
            }),
        ];
    }

    toJSON(): IBasicEventTypesForKeywords {
        return {
            k: this.keyword,
            e: this.events,
        };
    }

    get keyword() {
        return this.data.k;
    }
    set keyword(value: IBasicEventTypesForKeywords['k']) {
        this.data.k = value;
    }

    get events() {
        return this.data.e;
    }
    set events(value: IBasicEventTypesForKeywords['e']) {
        this.data.e = value;
    }
}
