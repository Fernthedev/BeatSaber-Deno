import { IDifficulty } from '../../types/beatmap/v3/difficulty.ts';
import { BasicEvent } from './basicEvent.ts';
import { BasicEventTypesWithKeywords } from './basicEventTypesWithKeywords.ts';
import { BombNote } from './bombNote.ts';
import { BPMEvent } from './bpmEvent.ts';
import { BurstSlider } from './burstSlider.ts';
import { ColorBoostEvent } from './colorBoostEvent.ts';
import { ColorNote } from './colorNote.ts';
import { LightColorEventBoxGroup } from './lightColorEventBoxGroup.ts';
import { LightRotationEventBoxGroup } from './lightRotationEventBoxGroup.ts';
import { LightTranslationEventBoxGroup } from './lightTranslationEventBoxGroup.ts';
import { Obstacle } from './obstacle.ts';
import { RotationEvent } from './rotationEvent.ts';
import { Slider } from './slider.ts';
import { Waypoint } from './waypoint.ts';
import { DeepPartial } from '../../types/utils.ts';
import { IBPMEvent } from '../../types/beatmap/v3/bpmEvent.ts';
import { IRotationEvent } from '../../types/beatmap/v3/rotationEvent.ts';
import { IColorNote } from '../../types/beatmap/v3/colorNote.ts';
import { IBombNote } from '../../types/beatmap/v3/bombNote.ts';
import { IObstacle } from '../../types/beatmap/v3/obstacle.ts';
import { ISlider } from '../../types/beatmap/v3/slider.ts';
import { IBurstSlider } from '../../types/beatmap/v3/burstSlider.ts';
import { IWaypoint } from '../../types/beatmap/v3/waypoint.ts';
import { IBasicEvent } from '../../types/beatmap/v3/basicEvent.ts';
import { IColorBoostEvent } from '../../types/beatmap/v3/colorBoostEvent.ts';
import { ILightRotationEventBoxGroup } from '../../types/beatmap/v3/lightRotationEventBoxGroup.ts';
import { ILightColorEventBoxGroup } from '../../types/beatmap/v3/lightColorEventBoxGroup.ts';
import { ILightTranslationEventBoxGroup } from '../../types/beatmap/v3/lightTranslationEventBoxGroup.ts';
import { deepCopy } from '../../utils/misc.ts';
import { WrapDifficulty } from '../wrapper/difficulty.ts';
import { IWrapBPMEventAttribute } from '../../types/beatmap/wrapper/bpmEvent.ts';
import { IWrapLightTranslationEventBoxGroupAttribute } from '../../types/beatmap/wrapper/lightTranslationEventBoxGroup.ts';
import { IWrapBombNoteAttribute } from '../../types/beatmap/wrapper/bombNote.ts';
import { IWrapBurstSliderAttribute } from '../../types/beatmap/wrapper/burstSlider.ts';
import { IWrapColorBoostEventAttribute } from '../../types/beatmap/wrapper/colorBoostEvent.ts';
import { IWrapColorNoteAttribute } from '../../types/beatmap/wrapper/colorNote.ts';
import { IWrapEventAttribute } from '../../types/beatmap/wrapper/event.ts';
import { IWrapLightColorEventBoxGroupAttribute } from '../../types/beatmap/wrapper/lightColorEventBoxGroup.ts';
import { IWrapLightRotationEventBoxGroupAttribute } from '../../types/beatmap/wrapper/lightRotationEventBoxGroup.ts';
import { IWrapObstacleAttribute } from '../../types/beatmap/wrapper/obstacle.ts';
import { IWrapRotationEventAttribute } from '../../types/beatmap/wrapper/rotationEvent.ts';
import { IWrapSliderAttribute } from '../../types/beatmap/wrapper/slider.ts';
import { IWrapWaypointAttribute } from '../../types/beatmap/wrapper/waypoint.ts';
import { IIndexFilter } from '../../types/beatmap/v3/indexFilter.ts';
import { ILightColorEventBox } from '../../types/beatmap/v3/lightColorEventBox.ts';
import { ILightRotationEventBox } from '../../types/beatmap/v3/lightRotationEventBox.ts';
import { ILightTranslationEventBox } from '../../types/beatmap/v3/lightTranslationEventBox.ts';
import { ILightColorBase } from '../../types/beatmap/v3/lightColorBase.ts';
import { ILightRotationBase } from '../../types/beatmap/v3/lightRotationBase.ts';
import { ILightTranslationBase } from '../../types/beatmap/v3/lightTranslationBase.ts';

/** Difficulty beatmap v3 class object. */
export class Difficulty extends WrapDifficulty<Required<IDifficulty>> {
    version: `3.${0 | 1 | 2}.0`;
    bpmEvents: BPMEvent[];
    rotationEvents: RotationEvent[];
    colorNotes: ColorNote[];
    bombNotes: BombNote[];
    obstacles: Obstacle[];
    sliders: Slider[];
    burstSliders: BurstSlider[];
    waypoints: Waypoint[];
    basicEvents: BasicEvent[];
    colorBoostEvents: ColorBoostEvent[];
    lightColorEventBoxGroups: LightColorEventBoxGroup[];
    lightRotationEventBoxGroups: LightRotationEventBoxGroup[];
    lightTranslationEventBoxGroups: LightTranslationEventBoxGroup[];
    eventTypesWithKeywords: BasicEventTypesWithKeywords;
    useNormalEventsAsCompatibleEvents;
    protected constructor(data: Required<IDifficulty>) {
        super(data);
        this.version = '3.2.0';
        this.bpmEvents = data.bpmEvents?.map((obj) => BPMEvent.create(obj)[0]) ?? [];
        this.rotationEvents = data.rotationEvents?.map((obj) => RotationEvent.create(obj)[0]) ?? [];
        this.colorNotes = data.colorNotes?.map((obj) => ColorNote.create(obj)[0]) ?? [];
        this.bombNotes = data.bombNotes?.map((obj) => BombNote.create(obj)[0]) ?? [];
        this.obstacles = data.obstacles?.map((obj) => Obstacle.create(obj)[0]) ?? [];
        this.sliders = data.sliders?.map((obj) => Slider.create(obj)[0]) ?? [];
        this.burstSliders = data.burstSliders?.map((obj) => BurstSlider.create(obj)[0]) ?? [];
        this.waypoints = data.waypoints?.map((obj) => Waypoint.create(obj)[0]) ?? [];
        this.basicEvents = data.basicBeatmapEvents?.map((obj) => BasicEvent.create(obj)[0]) ?? [];
        this.colorBoostEvents =
            data.colorBoostBeatmapEvents?.map((obj) => ColorBoostEvent.create(obj)[0]) ?? [];
        this.lightColorEventBoxGroups =
            data.lightColorEventBoxGroups?.map((obj) => LightColorEventBoxGroup.create(obj)[0]) ??
                [];
        this.lightRotationEventBoxGroups = data.lightRotationEventBoxGroups?.map(
            (obj) => LightRotationEventBoxGroup.create(obj)[0],
        ) ?? [];
        this.lightTranslationEventBoxGroups = data.lightTranslationEventBoxGroups?.map(
            (obj) => LightTranslationEventBoxGroup.create(obj)[0],
        ) ?? [];
        this.eventTypesWithKeywords = BasicEventTypesWithKeywords.create(
            data.basicEventTypesWithKeywords,
        ) ?? {
            d: [],
        };
        this.useNormalEventsAsCompatibleEvents = data.useNormalEventsAsCompatibleEvents ?? false;
        this.customData = data.customData ?? {};
    }

    static create(data: Partial<IDifficulty> = {}): Difficulty {
        return new this({
            version: '3.2.0',
            bpmEvents: data.bpmEvents ?? [],
            rotationEvents: data.rotationEvents ?? [],
            colorNotes: data.colorNotes ?? [],
            bombNotes: data.bombNotes ?? [],
            obstacles: data.obstacles ?? [],
            sliders: data.sliders ?? [],
            burstSliders: data.burstSliders ?? [],
            waypoints: data.waypoints ?? [],
            basicBeatmapEvents: data.basicBeatmapEvents ?? [],
            colorBoostBeatmapEvents: data.colorBoostBeatmapEvents ?? [],
            lightColorEventBoxGroups: data.lightColorEventBoxGroups ?? [],
            lightRotationEventBoxGroups: data.lightRotationEventBoxGroups ?? [],
            lightTranslationEventBoxGroups: data.lightTranslationEventBoxGroups ?? [],
            basicEventTypesWithKeywords: data.basicEventTypesWithKeywords ?? {
                d: [],
            },
            useNormalEventsAsCompatibleEvents: data.useNormalEventsAsCompatibleEvents ?? false,
            customData: data.customData ?? {},
        });
    }

    toJSON(): Required<IDifficulty> {
        return {
            version: '3.2.0',
            bpmEvents: this.bpmEvents.map((obj) => obj.toJSON()),
            rotationEvents: this.rotationEvents.map((obj) => obj.toJSON()),
            colorNotes: this.colorNotes.map((obj) => obj.toJSON()),
            bombNotes: this.bombNotes.map((obj) => obj.toJSON()),
            obstacles: this.obstacles.map((obj) => obj.toJSON()),
            sliders: this.sliders.map((obj) => obj.toJSON()),
            burstSliders: this.burstSliders.map((obj) => obj.toJSON()),
            waypoints: this.waypoints.map((obj) => obj.toJSON()),
            basicBeatmapEvents: this.basicEvents.map((obj) => obj.toJSON()),
            colorBoostBeatmapEvents: this.colorBoostEvents.map((obj) => obj.toJSON()),
            lightColorEventBoxGroups: this.lightColorEventBoxGroups.map((obj) => obj.toJSON()),
            lightRotationEventBoxGroups: this.lightRotationEventBoxGroups.map((obj) =>
                obj.toJSON()
            ),
            lightTranslationEventBoxGroups: this.lightTranslationEventBoxGroups.map((obj) =>
                obj.toJSON()
            ),
            basicEventTypesWithKeywords: this.eventTypesWithKeywords.toJSON(),
            useNormalEventsAsCompatibleEvents: this.useNormalEventsAsCompatibleEvents,
            customData: deepCopy(this.customData),
        };
    }

    get customData(): NonNullable<IDifficulty['customData']> {
        return this.data.customData;
    }
    set customData(value: NonNullable<IDifficulty['customData']>) {
        this.data.customData = value;
    }

    addBPMEvents(...bpmEvents: Partial<IWrapBPMEventAttribute<Required<IBPMEvent>>>[]): void;
    addBPMEvents(...bpmEvents: Partial<IBPMEvent>[]): void;
    addBPMEvents(
        ...bpmEvents: (Partial<IBPMEvent> & Partial<IWrapBPMEventAttribute<Required<IBPMEvent>>>)[]
    ): void;
    addBPMEvents(
        ...bpmEvents: (Partial<IBPMEvent> & Partial<IWrapBPMEventAttribute<Required<IBPMEvent>>>)[]
    ): void {
        this.bpmEvents.push(
            ...bpmEvents.map((bpme) => {
                return bpme instanceof BPMEvent ? bpme : BPMEvent.create(bpme)[0];
            }),
        );
    }

    addRotationEvents(
        ...rotationEvents: Partial<IWrapRotationEventAttribute<Required<IRotationEvent>>>[]
    ): void;
    addRotationEvents(...rotationEvents: Partial<IRotationEvent>[]): void;
    addRotationEvents(
        ...rotationEvents: (
            & Partial<IRotationEvent>
            & Partial<IWrapRotationEventAttribute<Required<IRotationEvent>>>
        )[]
    ): void;
    addRotationEvents(
        ...rotationEvents: (
            & Partial<IRotationEvent>
            & Partial<IWrapRotationEventAttribute<Required<IRotationEvent>>>
        )[]
    ): void {
        this.rotationEvents.push(
            ...rotationEvents.map((re) =>
                re instanceof RotationEvent ? re : RotationEvent.create(re)[0]
            ),
        );
    }

    addColorNotes(...colorNotes: Partial<IWrapColorNoteAttribute<Required<IColorNote>>>[]): void;
    addColorNotes(...colorNotes: Partial<IColorNote>[]): void;
    addColorNotes(
        ...colorNotes: (
            & Partial<IColorNote>
            & Partial<IWrapColorNoteAttribute<Required<IColorNote>>>
        )[]
    ): void;
    addColorNotes(
        ...colorNotes: (
            & Partial<IColorNote>
            & Partial<IWrapColorNoteAttribute<Required<IColorNote>>>
        )[]
    ): void {
        this.colorNotes.push(
            ...colorNotes.map((cn) => (cn instanceof ColorNote ? cn : ColorNote.create(cn)[0])),
        );
    }

    addBombNotes(...bombNotes: Partial<IWrapBombNoteAttribute<Required<IBombNote>>>[]): void;
    addBombNotes(...bombNotes: Partial<IBombNote>[]): void;
    addBombNotes(
        ...bombNotes: (
            & Partial<IBombNote>[]
            & Partial<IWrapBombNoteAttribute<Required<IBombNote>>>
        )[]
    ): void;
    addBombNotes(
        ...bombNotes: (
            & Partial<IBombNote>[]
            & Partial<IWrapBombNoteAttribute<Required<IBombNote>>>
        )[]
    ): void {
        this.bombNotes.push(
            ...bombNotes.map((bn) => (bn instanceof BombNote ? bn : BombNote.create(bn)[0])),
        );
    }

    addObstacles(...obstacles: Partial<IWrapObstacleAttribute<Required<IObstacle>>>[]): void;
    addObstacles(...obstacles: Partial<IObstacle>[]): void;
    addObstacles(
        ...obstacles: (Partial<IObstacle> & Partial<IWrapObstacleAttribute<Required<IObstacle>>>)[]
    ): void;
    addObstacles(
        ...obstacles: (Partial<IObstacle> & Partial<IWrapObstacleAttribute<Required<IObstacle>>>)[]
    ): void {
        this.obstacles.push(
            ...obstacles.map((o) => (o instanceof Obstacle ? o : Obstacle.create(o)[0])),
        );
    }

    addSliders(...sliders: Partial<IWrapSliderAttribute<Required<ISlider>>>[]): void;
    addSliders(...sliders: Partial<ISlider>[]): void;
    addSliders(
        ...sliders: (Partial<ISlider> & Partial<IWrapSliderAttribute<Required<ISlider>>>)[]
    ): void;
    addSliders(
        ...sliders: (Partial<ISlider> & Partial<IWrapSliderAttribute<Required<ISlider>>>)[]
    ): void {
        this.sliders.push(...sliders.map((s) => (s instanceof Slider ? s : Slider.create(s)[0])));
    }

    addBurstSliders(
        ...burstSliders: Partial<IWrapBurstSliderAttribute<Required<IBurstSlider>>>[]
    ): void;
    addBurstSliders(...burstSliders: Partial<IBurstSlider>[]): void;
    addBurstSliders(
        ...burstSliders: (
            & Partial<IBurstSlider>
            & Partial<IWrapBurstSliderAttribute<Required<IBurstSlider>>>
        )[]
    ): void;
    addBurstSliders(
        ...burstSliders: (
            & Partial<IBurstSlider>
            & Partial<IWrapBurstSliderAttribute<Required<IBurstSlider>>>
        )[]
    ): void {
        this.burstSliders.push(
            ...burstSliders.map((bs) => bs instanceof BurstSlider ? bs : BurstSlider.create(bs)[0]),
        );
    }

    addWaypoints(...waypoints: Partial<IWrapWaypointAttribute<Required<IWaypoint>>>[]): void;
    addWaypoints(...waypoints: Partial<IWaypoint>[]): void;
    addWaypoints(
        ...waypoints: (Partial<IWaypoint> & Partial<IWrapWaypointAttribute<Required<IWaypoint>>>)[]
    ): void;
    addWaypoints(
        ...waypoints: (Partial<IWaypoint> & Partial<IWrapWaypointAttribute<Required<IWaypoint>>>)[]
    ): void {
        this.waypoints.push(
            ...waypoints.map((w) => (w instanceof Waypoint ? w : Waypoint.create(w)[0])),
        );
    }

    addBasicEvents(...basicEvents: Partial<IWrapEventAttribute<Required<IBasicEvent>>>[]): void;
    addBasicEvents(...basicEvents: Partial<IBasicEvent>[]): void;
    addBasicEvents(
        ...basicEvents: (
            & Partial<IBasicEvent>[]
            & Partial<IWrapEventAttribute<Required<IBasicEvent>>>
        )[]
    ): void;
    addBasicEvents(
        ...basicEvents: (
            & Partial<IBasicEvent>[]
            & Partial<IWrapEventAttribute<Required<IBasicEvent>>>
        )[]
    ): void {
        this.basicEvents.push(
            ...basicEvents.map((be) => (be instanceof BasicEvent ? be : BasicEvent.create(be)[0])),
        );
    }

    addColorBoostEvents(
        ...colorBoostEvents: Partial<IWrapColorBoostEventAttribute<Required<IColorBoostEvent>>>[]
    ): void;
    addColorBoostEvents(...colorBoostEvents: Partial<IColorBoostEvent>[]): void;
    addColorBoostEvents(
        ...colorBoostEvents: (
            & Partial<IColorBoostEvent>
            & Partial<IWrapColorBoostEventAttribute<Required<IColorBoostEvent>>>
        )[]
    ): void;
    addColorBoostEvents(
        ...colorBoostEvents: (
            & Partial<IColorBoostEvent>
            & Partial<IWrapColorBoostEventAttribute<Required<IColorBoostEvent>>>
        )[]
    ): void {
        this.colorBoostEvents.push(
            ...colorBoostEvents.map((cbe) =>
                cbe instanceof ColorBoostEvent ? cbe : ColorBoostEvent.create(cbe)[0]
            ),
        );
    }

    addLightColorEventBoxGroups(
        ...lightColorEBGs: DeepPartial<
            IWrapLightColorEventBoxGroupAttribute<
                Required<ILightColorEventBoxGroup>,
                Required<ILightColorEventBox>,
                Required<ILightColorBase>,
                Required<IIndexFilter>
            >
        >[]
    ): void;
    addLightColorEventBoxGroups(...lightColorEBGs: DeepPartial<ILightColorEventBoxGroup>[]): void;
    addLightColorEventBoxGroups(
        ...lightColorEBGs: (
            & DeepPartial<ILightColorEventBoxGroup>
            & DeepPartial<
                IWrapLightColorEventBoxGroupAttribute<
                    Required<ILightColorEventBoxGroup>,
                    Required<ILightColorEventBox>,
                    Required<ILightColorBase>,
                    Required<IIndexFilter>
                >
            >
        )[]
    ): void;
    addLightColorEventBoxGroups(
        ...lightColorEBGs: (
            & DeepPartial<ILightColorEventBoxGroup>
            & DeepPartial<
                IWrapLightColorEventBoxGroupAttribute<
                    Required<ILightColorEventBoxGroup>,
                    Required<ILightColorEventBox>,
                    Required<ILightColorBase>,
                    Required<IIndexFilter>
                >
            >
        )[]
    ): void {
        this.lightColorEventBoxGroups.push(
            ...lightColorEBGs.map((lcebg) =>
                lcebg instanceof LightColorEventBoxGroup
                    ? lcebg
                    : LightColorEventBoxGroup.create(lcebg)[0]
            ),
        );
    }

    addLightRotationEventBoxGroups(
        ...lightRotationEBGs: DeepPartial<
            IWrapLightRotationEventBoxGroupAttribute<
                Required<ILightRotationEventBoxGroup>,
                Required<ILightRotationEventBox>,
                Required<ILightRotationBase>,
                Required<IIndexFilter>
            >
        >[]
    ): void;
    addLightRotationEventBoxGroups(
        ...lightRotationEBGs: DeepPartial<ILightRotationEventBoxGroup>[]
    ): void;
    addLightRotationEventBoxGroups(
        ...lightRotationEBGs: (
            & DeepPartial<ILightRotationEventBoxGroup>
            & DeepPartial<
                IWrapLightRotationEventBoxGroupAttribute<
                    Required<ILightRotationEventBoxGroup>,
                    Required<ILightRotationEventBox>,
                    Required<ILightRotationBase>,
                    Required<IIndexFilter>
                >
            >
        )[]
    ): void;
    addLightRotationEventBoxGroups(
        ...lightRotationEBGs: (
            & DeepPartial<ILightRotationEventBoxGroup>
            & DeepPartial<
                IWrapLightRotationEventBoxGroupAttribute<
                    Required<ILightRotationEventBoxGroup>,
                    Required<ILightRotationEventBox>,
                    Required<ILightRotationBase>,
                    Required<IIndexFilter>
                >
            >
        )[]
    ): void {
        this.lightRotationEventBoxGroups.push(
            ...lightRotationEBGs.map((lrebg) =>
                lrebg instanceof LightRotationEventBoxGroup
                    ? lrebg
                    : LightRotationEventBoxGroup.create(lrebg)[0]
            ),
        );
    }

    addLightTranslationEventBoxGroups(
        ...lightTranslationEBGs: DeepPartial<
            IWrapLightTranslationEventBoxGroupAttribute<
                Required<ILightTranslationEventBoxGroup>,
                Required<ILightTranslationEventBox>,
                Required<ILightTranslationBase>,
                Required<IIndexFilter>
            >
        >[]
    ): void;
    addLightTranslationEventBoxGroups(
        ...lightTranslationEBGs: DeepPartial<ILightTranslationEventBoxGroup>[]
    ): void;
    addLightTranslationEventBoxGroups(
        ...lightTranslationEBGs: (
            & DeepPartial<ILightTranslationEventBoxGroup>
            & DeepPartial<
                IWrapLightTranslationEventBoxGroupAttribute<
                    Required<ILightTranslationEventBoxGroup>,
                    Required<ILightTranslationEventBox>,
                    Required<ILightTranslationBase>,
                    Required<IIndexFilter>
                >
            >
        )[]
    ): void;
    addLightTranslationEventBoxGroups(
        ...lightTranslationEBGs: (
            & DeepPartial<ILightTranslationEventBoxGroup>
            & DeepPartial<
                IWrapLightTranslationEventBoxGroupAttribute<
                    Required<ILightTranslationEventBoxGroup>,
                    Required<ILightTranslationEventBox>,
                    Required<ILightTranslationBase>,
                    Required<IIndexFilter>
                >
            >
        )[]
    ): void {
        this.lightTranslationEventBoxGroups.push(
            ...lightTranslationEBGs.map((ltebg) =>
                ltebg instanceof LightTranslationEventBoxGroup
                    ? ltebg
                    : LightTranslationEventBoxGroup.create(ltebg)[0]
            ),
        );
    }

    isValid(): boolean {
        throw new Error('Method not implemented.');
    }
}
