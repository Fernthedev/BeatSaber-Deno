import { IBasicEventTypesForKeywords } from '../../types/beatmap/v3/basicEventTypesForKeywords.ts';
import { IBasicEventTypesWithKeywords } from '../../types/beatmap/v3/basicEventTypesWithKeywords.ts';
import { ObjectReturnFn } from '../../types/utils.ts';
import { WrapEventTypesWithKeywords } from '../wrapper/eventTypesWithKeywords.ts';
import { BasicEventTypesForKeywords } from './basicEventTypesForKeywords.ts';

/** Basic event types with keywords beatmap v3 class object. */
export class BasicEventTypesWithKeywords extends WrapEventTypesWithKeywords<
    Required<IBasicEventTypesWithKeywords>,
    Required<IBasicEventTypesForKeywords>
> {
    static default: ObjectReturnFn<Required<IBasicEventTypesWithKeywords>> = {
        d: () => [],
    };

    private d: BasicEventTypesForKeywords[];
    protected constructor(
        basicEventTypesWithKeywords: Required<IBasicEventTypesWithKeywords>,
    ) {
        super(basicEventTypesWithKeywords);
        this.d = basicEventTypesWithKeywords.d.map(
            (d) => BasicEventTypesForKeywords.create({ e: d.e, k: d.k })[0],
        );
    }

    static create(
        basicEventTypesWithKeywords: Partial<IBasicEventTypesWithKeywords> = {},
    ): BasicEventTypesWithKeywords {
        return new this({
            d: basicEventTypesWithKeywords.d ?? BasicEventTypesWithKeywords.default.d(),
        });
    }

    toJSON(): IBasicEventTypesWithKeywords {
        return {
            d: this.list.map((d) => d.toJSON()),
        };
    }

    get list() {
        return this.d;
    }
    set list(value: BasicEventTypesForKeywords[]) {
        this.d = value;
    }

    addData(value: BasicEventTypesForKeywords) {
        this.list.push(value);
        return this;
    }
}
