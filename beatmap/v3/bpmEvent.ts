import { IBPMEvent } from '../../types/beatmap/v3/bpmEvent.ts';
import { ObjectToReturn } from '../../types/utils.ts';
import { BaseObject } from './baseObject.ts';

/** BPM change event beatmap v3 class object. */
export class BPMEvent extends BaseObject<IBPMEvent> {
    static default: ObjectToReturn<Required<IBPMEvent>> = {
        b: 0,
        m: 0,
        customData: () => {
            return {};
        },
    };

    protected constructor(bpmEvent: Required<IBPMEvent>) {
        super(bpmEvent);
    }

    static create(): BPMEvent;
    static create(bpmEvents: Partial<IBPMEvent>): BPMEvent;
    static create(...bpmEvents: Partial<IBPMEvent>[]): BPMEvent[];
    static create(...bpmEvents: Partial<IBPMEvent>[]): BPMEvent | BPMEvent[] {
        const result: BPMEvent[] = [];
        bpmEvents?.forEach((be) =>
            result.push(
                new this({
                    b: be.b ?? BPMEvent.default.b,
                    m: be.m ?? BPMEvent.default.m,
                    customData: be.customData ?? BPMEvent.default.customData(),
                }),
            )
        );
        if (result.length === 1) {
            return result[0];
        }
        if (result.length) {
            return result;
        }
        return new this({
            b: BPMEvent.default.b,
            m: BPMEvent.default.m,
            customData: BPMEvent.default.customData(),
        });
    }

    toObject(): Required<IBPMEvent> {
        return {
            b: this.time,
            m: this.bpm,
            customData: structuredClone(this.customData),
        };
    }

    /** Value `<float>` of BPM change event. */
    get bpm() {
        return this.data.m;
    }
    set bpm(value: IBPMEvent['m']) {
        this.data.m = value;
    }

    setBPM(value: IBPMEvent['m']) {
        this.bpm = value;
        return this;
    }
}
