// const enum is used regardless as this will never be compiled and reused by JS.
/** Also known as lane count. */
export const LINE_COUNT = 4;

/** Size of grid in unity unit */
export const LANE_SIZE = 0.6;

/** Size of regular note in unity unit */
export const NOTE_SIZE = [0.5, 0.5] as const;

export const enum NoteColor {
    RED,
    BLUE,
}

export const enum NoteDirection {
    UP,
    DOWN,
    LEFT,
    RIGHT,
    UP_LEFT,
    UP_RIGHT,
    DOWN_LEFT,
    DOWN_RIGHT,
    ANY,
}

export const enum PositionX {
    LEFT,
    MIDDLE_LEFT,
    MIDDLE_RIGHT,
    RIGHT,
}

export const enum PositionY {
    BOTTOM,
    MIDDLE,
    TOP,
}

/** Cut angle corresponding to the `direction`.
 * ```ts
 * 0 (UP) -> 180
 * 1 (DOWN) -> 0
 * 2 (LEFT) -> 270
 * 3 (RIGHT) -> 90
 * 4 (UP_LEFT) -> 225
 * 5 (UP_RIGHT) -> 135
 * 6 (DOWN_LEFT) -> 315
 * 7 (DOWN_RIGHT) -> 45
 * 8 (ANY) -> 0
 * ```
 * **NOTE:** Rotation in counter-clockwise.
 */
export const NoteDirectionAngle: { [d in NoteDirection]: number } = {
    [NoteDirection.UP]: 180,
    [NoteDirection.DOWN]: 0,
    [NoteDirection.LEFT]: 270,
    [NoteDirection.RIGHT]: 90,
    [NoteDirection.UP_LEFT]: 225,
    [NoteDirection.UP_RIGHT]: 135,
    [NoteDirection.DOWN_LEFT]: 315,
    [NoteDirection.DOWN_RIGHT]: 45,
    [NoteDirection.ANY]: 0,
} as const;

/** Opposite direction corresponding to the `direction`.
 * ```ts
 * 0 (UP) -> 1 (DOWN)
 * 1 (DOWN) -> 0 (UP)
 * 2 (LEFT) -> 3 (RIGHT)
 * 3 (RIGHT) -> 2 (LEFT)
 * 4 (UP_LEFT) -> 7 (DOWN_RIGHT)
 * 5 (UP_RIGHT) -> 6 (DOWN_LEFT)
 * 6 (DOWN_LEFT) -> 5 (UP_RIGHT)
 * 7 (DOWN_RIGHT) -> 4 (UP_LEFT)
 * 8 (ANY) -> 8 (ANY)
 * ```
 */
export const NoteDirectionFlip: { [d in NoteDirection]: NoteDirection } = {
    [NoteDirection.UP]: NoteDirection.DOWN,
    [NoteDirection.DOWN]: NoteDirection.UP,
    [NoteDirection.LEFT]: NoteDirection.RIGHT,
    [NoteDirection.RIGHT]: NoteDirection.LEFT,
    [NoteDirection.UP_LEFT]: NoteDirection.DOWN_RIGHT,
    [NoteDirection.UP_RIGHT]: NoteDirection.DOWN_LEFT,
    [NoteDirection.DOWN_LEFT]: NoteDirection.UP_RIGHT,
    [NoteDirection.DOWN_RIGHT]: NoteDirection.UP_LEFT,
    [NoteDirection.ANY]: NoteDirection.ANY,
} as const;

/** Array index mapped to tuple of `posX` and `posY` corresponding to the `direction`.
 * ```ts
 * 0 -> [0, 1]
 * 1 -> [0, -1]
 * 2 -> [-1, 0]
 * 3 -> [1, 0]
 * 4 -> [-1, 1]
 * 5 -> [1, 1]
 * 6 -> [-1, -1]
 * 7 -> [1, -1]
 * 8 -> [0, 0]
 * ```
 */
export const NoteDirectionSpace: {
    [d in NoteDirection]: Readonly<[number, number]>;
} = {
    [NoteDirection.UP]: [0, 1],
    [NoteDirection.DOWN]: [0, -1],
    [NoteDirection.LEFT]: [-1, 0],
    [NoteDirection.RIGHT]: [1, 0],
    [NoteDirection.UP_LEFT]: [-1, 1],
    [NoteDirection.UP_RIGHT]: [1, 1],
    [NoteDirection.DOWN_LEFT]: [-1, -1],
    [NoteDirection.DOWN_RIGHT]: [1, -1],
    [NoteDirection.ANY]: [0, 0],
} as const;

export const enum EventLightValue {
    OFF,
    BLUE_ON,
    BLUE_FLASH,
    BLUE_FADE,
    BLUE_TRANSITION,
    RED_ON,
    RED_FLASH,
    RED_FADE,
    RED_TRANSITION,
    WHITE_ON,
    WHITE_FLASH,
    WHITE_FADE,
    WHITE_TRANSITION,
}

export const enum EventType {
    BACK_LASERS,
    RING_LIGHTS,
    LEFT_LASERS,
    RIGHT_LASERS,
    CENTER_LIGHTS,
    LIGHT_BOOST,
    EXTRA_LEFT_LIGHTS,
    EXTRA_RIGHT_LIGHTS,
    RING_ROTATION,
    RING_ZOOM,
    EXTRA_LEFT_LASERS,
    EXTRA_RIGHT_LASERS,
    LEFT_LASER_ROTATION,
    RIGHT_LASER_ROTATION,
    EARLY_LANE_ROTATION,
    LATE_LANE_ROTATION,
    UTILITY_EVENT_0,
    UTILITY_EVENT_1,
    UTILITY_EVENT_2,
    UTILITY_EVENT_3,
    SPECIAL_EVENT_0 = 40,
    SPECIAL_EVENT_1 = 41,
    SPECIAL_EVENT_2 = 42,
    SPECIAL_EVENT_3 = 43,
    BPM_CHANGE = 100,
}

/** Unused as of beatmap v3, useful for conversion reason. */
export const EventLaneRotationValue: { [key: number]: number } = {
    0: -60,
    1: -45,
    2: -30,
    3: -15,
    4: 15,
    5: 30,
    6: 45,
    7: 60,
} as const;

export const enum IndexFilterType {
    DIVISION = 1,
    STEP_AND_OFFSET,
}

export const enum LimitAlsoAffectsType {
    NONE,
    DURATION = 1 << 0,
    DISTRIBUTION = 1 << 1,
    ALL = ~(~0 << 2),
}

export const enum RandomType {
    NO_RANDOM,
    KEEP_ORDER = 1 << 0,
    RANDOM_ELEMENTS = 1 << 1,
    ALL = ~(~0 << 2),
}

export const enum EventBoxColor {
    NONE = -1,
    RED,
    BLUE,
    WHITE,
}

export const enum DistributionType {
    WAVE = 1,
    STEP,
}

export const enum EaseType {
    NONE = -1,
    LINEAR,
    IN_QUAD,
    OUT_QUAD,
    INOUT_QUAD,
}

/** Used for lane rotation event. */
export const enum ExecutionTime {
    EARLY,
    LATE,
}

export const enum TransitionType {
    INSTANT,
    INTERPOLATE,
    EXTEND,
}

/** Used for light rotation event. */
export const enum Axis {
    X,
    Y,
    Z,
}

export const enum LightRotationDirection {
    AUTOMATIC,
    CLOCKWISE,
    COUNTER_CLOCKWISE,
}

export const enum SliderMidAnchorMode {
    STRAIGHT,
    CLOCKWISE,
    COUNTER_CLOCKWISE,
}
