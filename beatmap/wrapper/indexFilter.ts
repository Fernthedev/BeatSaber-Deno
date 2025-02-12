import { IWrapIndexFilter } from '../../types/beatmap/wrapper/indexFilter.ts';
import { LimitAlsoAffectsType, RandomType } from '../mod.ts';
import { WrapBaseItem } from './baseItem.ts';

/** Index filter beatmap class object. */
export abstract class WrapIndexFilter<T extends Record<keyof T, unknown>> extends WrapBaseItem<T>
    implements IWrapIndexFilter<T> {
    abstract get type(): IWrapIndexFilter['type'];
    abstract set type(value: IWrapIndexFilter['type']);
    abstract get p0(): IWrapIndexFilter['p0'];
    abstract set p0(value: IWrapIndexFilter['p0']);
    abstract get p1(): IWrapIndexFilter['p1'];
    abstract set p1(value: IWrapIndexFilter['p1']);
    abstract get reverse(): IWrapIndexFilter['reverse'];
    abstract set reverse(value: IWrapIndexFilter['reverse']);
    abstract get chunks(): IWrapIndexFilter['chunks'];
    abstract set chunks(value: IWrapIndexFilter['chunks']);
    abstract get limit(): IWrapIndexFilter['limit'];
    abstract set limit(value: IWrapIndexFilter['limit']);
    abstract get limitAffectsType(): IWrapIndexFilter['limitAffectsType'];
    abstract set limitAffectsType(value: IWrapIndexFilter['limitAffectsType']);
    abstract get random(): IWrapIndexFilter['random'];
    abstract set random(value: IWrapIndexFilter['random']);
    abstract get seed(): IWrapIndexFilter['seed'];
    abstract set seed(value: IWrapIndexFilter['seed']);

    setType(value: IWrapIndexFilter['type']) {
        this.type = value;
        return this;
    }
    setP0(value: IWrapIndexFilter['p0']) {
        this.p0 = value;
        return this;
    }
    setP1(value: IWrapIndexFilter['p1']) {
        this.p1 = value;
        return this;
    }
    setReverse(value: IWrapIndexFilter['reverse']) {
        this.reverse = value;
        return this;
    }
    setChunks(value: IWrapIndexFilter['chunks']) {
        this.chunks = value;
        return this;
    }
    setRandom(value: IWrapIndexFilter['random']) {
        this.random = value;
        return this;
    }
    setSeed(value: IWrapIndexFilter['seed']) {
        this.seed = value;
        return this;
    }
    setLimit(value: IWrapIndexFilter['limit']) {
        this.limit = value;
        return this;
    }
    setLimitAffectsType(value: IWrapIndexFilter['limitAffectsType']) {
        this.limitAffectsType = value;
        return this;
    }

    isValid(): boolean {
        return (
            (this.type === 1 || this.type === 2) &&
            this.p0 >= 0 &&
            this.p1 >= 0 &&
            (this.reverse === 0 || this.reverse === 1) &&
            this.chunks >= 0 &&
            this.random >= 0 &&
            this.random <= RandomType.ALL &&
            this.limit >= 0 &&
            this.limit <= 0 &&
            this.limitAffectsType >= 0 &&
            this.limitAffectsType <= LimitAlsoAffectsType.ALL
        );
    }
}
