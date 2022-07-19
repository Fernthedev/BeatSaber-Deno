import { IDifficultyData } from '../../types/beatmap/v3/difficulty.ts';
import { Serializable } from '../shared/serializable.ts';
import { BasicEvent } from './basicEvent.ts';
import { BasicEventTypesWithKeywords } from './basicEventTypesWithKeywords.ts';
import { BombNote } from './bombNote.ts';
import { BPMEvent } from './bpmEvent.ts';
import { BurstSlider } from './burstSlider.ts';
import { ColorBoostEvent } from './colorBoostEvent.ts';
import { ColorNote } from './colorNote.ts';
import { LightColorEventBoxGroup } from './lightColorEventBoxGroup.ts';
import { LightRotationEventBoxGroup } from './lightRotationEventBoxGroup.ts';
import { Obstacle } from './obstacle.ts';
import { RotationEvent } from './rotationEvent.ts';
import { Slider } from './slider.ts';
import { Waypoint } from './waypoint.ts';
import { BeatPerMinute } from '../shared/bpm.ts';
import { EventContainer, NoteContainer } from '../../types/beatmap/v3/container.ts';
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

/** Difficulty beatmap v3 class object. */
export class DifficultyData extends Serializable<IDifficultyData> {
    private _fileName = 'UnnamedDifficulty.dat';

    version;
    bpmEvents: BPMEvent[];
    rotationEvents: RotationEvent[];
    colorNotes: ColorNote[];
    bombNotes: BombNote[];
    obstacles: Obstacle[];
    sliders: Slider[];
    burstSliders: BurstSlider[];
    waypoints: Waypoint[];
    basicBeatmapEvents: BasicEvent[];
    colorBoostBeatmapEvents: ColorBoostEvent[];
    lightColorEventBoxGroups: LightColorEventBoxGroup[];
    lightRotationEventBoxGroups: LightRotationEventBoxGroup[];
    basicEventTypesWithKeywords: BasicEventTypesWithKeywords;
    useNormalEventsAsCompatibleEvents;
    customData;
    protected constructor(data: Required<IDifficultyData>) {
        super(data);
        this.version = data.version ?? '3.0.0';
        this.bpmEvents = data.bpmEvents?.map((obj) => BPMEvent.create(obj)) ?? [];
        this.rotationEvents = data.rotationEvents?.map((obj) => RotationEvent.create(obj)) ?? [];
        this.colorNotes = data.colorNotes?.map((obj) => ColorNote.create(obj)) ?? [];
        this.bombNotes = data.bombNotes?.map((obj) => BombNote.create(obj)) ?? [];
        this.obstacles = data.obstacles?.map((obj) => Obstacle.create(obj)) ?? [];
        this.sliders = data.sliders?.map((obj) => Slider.create(obj)) ?? [];
        this.burstSliders = data.burstSliders?.map((obj) => BurstSlider.create(obj)) ?? [];
        this.waypoints = data.waypoints?.map((obj) => Waypoint.create(obj)) ?? [];
        this.basicBeatmapEvents = data.basicBeatmapEvents?.map((obj) => BasicEvent.create(obj)) ?? [];
        this.colorBoostBeatmapEvents = data.colorBoostBeatmapEvents?.map((obj) => ColorBoostEvent.create(obj)) ??
            [];
        this.lightColorEventBoxGroups =
            data.lightColorEventBoxGroups?.map((obj) => LightColorEventBoxGroup.create(obj)) ?? [];
        this.lightRotationEventBoxGroups =
            data.lightRotationEventBoxGroups?.map((obj) => LightRotationEventBoxGroup.create(obj)) ?? [];
        this.basicEventTypesWithKeywords = BasicEventTypesWithKeywords.create(
            data.basicEventTypesWithKeywords,
        ) ?? { d: [] };
        this.useNormalEventsAsCompatibleEvents = data.useNormalEventsAsCompatibleEvents ?? false;
        this.customData = data.customData ?? {};
    }

    static create(data: Partial<IDifficultyData> = {}): DifficultyData {
        return new this({
            version: data.version || '3.0.0',
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
            basicEventTypesWithKeywords: data.basicEventTypesWithKeywords ?? {
                d: [],
            },
            useNormalEventsAsCompatibleEvents: data.useNormalEventsAsCompatibleEvents ?? false,
            customData: data.customData ?? {},
        });
    }

    toObject(): Required<IDifficultyData> {
        return {
            version: this.version || '3.0.0',
            bpmEvents: this.bpmEvents.map((obj) => obj.toObject()),
            rotationEvents: this.rotationEvents.map((obj) => obj.toObject()),
            colorNotes: this.colorNotes.map((obj) => obj.toObject()),
            bombNotes: this.bombNotes.map((obj) => obj.toObject()),
            obstacles: this.obstacles.map((obj) => obj.toObject()),
            sliders: this.sliders.map((obj) => obj.toObject()),
            burstSliders: this.burstSliders.map((obj) => obj.toObject()),
            waypoints: this.waypoints.map((obj) => obj.toObject()),
            basicBeatmapEvents: this.basicBeatmapEvents.map((obj) => obj.toObject()),
            colorBoostBeatmapEvents: this.colorBoostBeatmapEvents.map((obj) => obj.toObject()),
            lightColorEventBoxGroups: this.lightColorEventBoxGroups.map((obj) => obj.toObject()),
            lightRotationEventBoxGroups: this.lightRotationEventBoxGroups.map((obj) => obj.toObject()),
            basicEventTypesWithKeywords: this.basicEventTypesWithKeywords.toObject(),
            useNormalEventsAsCompatibleEvents: this.useNormalEventsAsCompatibleEvents,
            customData: structuredClone(this.customData),
        };
    }

    clone<U extends this>(): U {
        const fileName = this.fileName;
        return super.clone().setFileName(fileName) as U;
    }

    set fileName(name: string) {
        this._fileName = name.trim();
    }
    get fileName() {
        return this._fileName;
    }
    setFileName(fileName: string) {
        this.fileName = fileName;
        return this;
    }

    /** Calculate note per second.
     * ```ts
     * const nps = difficulty.nps(difficultyData, 10);
     * ```
     * ---
     * **Note:** Duration can be either in any time type.
     */
    nps = (duration: number): number => {
        const notes = this.getNoteContainer().filter((n) => n.type !== 'bomb');
        return duration ? notes.length / duration : 0;
    };

    /** Calculate the peak by rolling average.
     * ```ts
     * const peakNPS = difficulty.peak(difficultyData, 10, BPM ?? 128);
     * ```
     */
    peak = (beat: number, bpm: BeatPerMinute | number): number => {
        let peakNPS = 0;
        let currentSectionStart = 0;
        const bpmV = typeof bpm === 'number' ? bpm : bpm.value;
        const notes = this.getNoteContainer().filter((n) => n.type !== 'bomb');

        for (let i = 0; i < notes.length; i++) {
            while (notes[i].data.time - notes[currentSectionStart].data.time > beat) {
                currentSectionStart++;
            }
            peakNPS = Math.max(
                peakNPS,
                (i - currentSectionStart + 1) / ((beat / bpmV) * 60),
            );
        }

        return peakNPS;
    };

    /** Get first interactible object beat time in beatmap.
     * ```ts
     * const firstInteractiveTime = difficulty.getFirstInteractiveTime(difficultyData);
     * ```
     */
    getFirstInteractiveTime = (): number => {
        const notes = this.getNoteContainer().filter((n) => n.type !== 'bomb');
        let firstNoteTime = Number.MAX_VALUE;
        if (notes.length > 0) {
            firstNoteTime = notes[0].data.time;
        }
        const firstInteractiveObstacleTime = this.findFirstInteractiveObstacleTime();
        return Math.min(firstNoteTime, firstInteractiveObstacleTime);
    };

    /** Get last interactible object beat time in beatmap.
     * ```ts
     * const lastInteractiveTime = difficulty.getLastInteractiveTime(difficultyData);
     * ```
     */
    getLastInteractiveTime = (): number => {
        const notes = this.getNoteContainer().filter((n) => n.type !== 'bomb');
        let lastNoteTime = 0;
        if (notes.length > 0) {
            lastNoteTime = notes[notes.length - 1].data.time;
        }
        const lastInteractiveObstacleTime = this.findLastInteractiveObstacleTime();
        return Math.max(lastNoteTime, lastInteractiveObstacleTime);
    };

    /** Get first interactible obstacle beat time in beatmap.
     * ```ts
     * const firstInteractiveObstacleTime = difficulty.findFirstInteractiveObstacleTime(obstacles);
     * ```
     */
    findFirstInteractiveObstacleTime = (): number => {
        for (let i = 0, len = this.obstacles.length; i < len; i++) {
            if (this.obstacles[i].isInteractive()) {
                return this.obstacles[i].time;
            }
        }
        return Number.MAX_VALUE;
    };

    /** Get last interactible obstacle beat time in beatmap.
     * ```ts
     * const lastInteractiveObstacleTime = difficulty.findLastInteractiveObstacleTime(obstacles);
     * ```
     */
    findLastInteractiveObstacleTime = (): number => {
        let obstacleEnd = 0;
        for (let i = this.obstacles.length - 1; i >= 0; i--) {
            if (this.obstacles[i].isInteractive()) {
                obstacleEnd = Math.max(
                    obstacleEnd,
                    this.obstacles[i].time + this.obstacles[i].duration,
                );
            }
        }
        return obstacleEnd;
    };

    /** Get container of color notes, sliders, burst sliders, and bombs (in order).
     * ```ts
     * const noteCountainer = getNoteContainer(difficultyData);
     * ```
     */
    getNoteContainer = (): NoteContainer[] => {
        const nc: NoteContainer[] = [];
        this.colorNotes.forEach((n) => nc.push({ type: 'note', data: n }));
        this.sliders.forEach((s) => nc.push({ type: 'slider', data: s }));
        this.burstSliders.forEach((bs) => nc.push({ type: 'burstSlider', data: bs }));
        this.bombNotes.forEach((b) => nc.push({ type: 'bomb', data: b }));
        return nc.sort((a, b) => a.data.time - b.data.time);
    };

    /** Get container of basic events and boost events.
     * ```ts
     * const noteCountainer = getNoteContainer(difficultyData);
     * ```
     */
    getEventContainer = (): EventContainer[] => {
        const ec: EventContainer[] = [];
        this.basicBeatmapEvents.forEach((be) => ec.push({ type: 'basicEvent', data: be }));
        this.colorBoostBeatmapEvents.forEach((b) => ec.push({ type: 'boost', data: b }));
        return ec.sort((a, b) => a.data.time - b.data.time);
    };

    addBPMEvents = (...bpmEvents: Partial<IBPMEvent>[]) => {
        bpmEvents.forEach((bpme) => {
            this.bpmEvents.push(BPMEvent.create(bpme));
        });
    };
    addRotationEvents = (...rotationEvents: Partial<IRotationEvent>[]) => {
        rotationEvents.forEach((re) => {
            this.rotationEvents.push(RotationEvent.create(re));
        });
    };
    addColorNotes = (...colorNotes: Partial<IColorNote>[]) => {
        colorNotes.forEach((cn) => {
            this.colorNotes.push(ColorNote.create(cn));
        });
    };
    addBombNotes = (...bombNotes: Partial<IBombNote>[]) => {
        bombNotes.forEach((bn) => {
            this.bombNotes.push(BombNote.create(bn));
        });
    };
    addObstacles = (...obstacles: Partial<IObstacle>[]) => {
        obstacles.forEach((o) => {
            this.obstacles.push(Obstacle.create(o));
        });
    };
    addSliders = (...sliders: Partial<ISlider>[]) => {
        sliders.forEach((s) => {
            this.sliders.push(Slider.create(s));
        });
    };
    addBurstSliders = (...burstSliders: Partial<IBurstSlider>[]) => {
        burstSliders.forEach((bs) => {
            this.burstSliders.push(BurstSlider.create(bs));
        });
    };
    addWaypoints = (...waypoints: Partial<IWaypoint>[]) => {
        waypoints.forEach((w) => {
            this.waypoints.push(Waypoint.create(w));
        });
    };
    addBasicEvents = (...basicEvents: Partial<IBasicEvent>[]) => {
        basicEvents.forEach((be) => {
            this.basicBeatmapEvents.push(BasicEvent.create(be));
        });
    };
    addColorBoostEvents = (...colorBoostEvents: Partial<IColorBoostEvent>[]) => {
        colorBoostEvents.forEach((cbe) => {
            this.colorBoostBeatmapEvents.push(ColorBoostEvent.create(cbe));
        });
    };
    addLightColorEventBoxGroups = (
        ...lightColorEBGs: DeepPartial<ILightColorEventBoxGroup>[]
    ) => {
        lightColorEBGs.forEach((lcebg) => {
            this.lightColorEventBoxGroups.push(LightColorEventBoxGroup.create(lcebg));
        });
    };
    addLightRotationEventBoxGroups = (
        ...lightRotationEBGs: DeepPartial<ILightRotationEventBoxGroup>[]
    ) => {
        lightRotationEBGs.forEach((lrebg) => {
            this.lightRotationEventBoxGroups.push(
                LightRotationEventBoxGroup.create(lrebg),
            );
        });
    };
}
