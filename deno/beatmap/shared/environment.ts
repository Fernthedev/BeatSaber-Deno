import { EnvironmentAllName } from '../../types/beatmap/shared/environment.ts';

/** Environment rename to human readable. */
export const EnvironmentRename: Readonly<Record<EnvironmentAllName, string>> = {
    DefaultEnvironment: 'The First',
    OriginsEnvironment: 'Origins',
    TriangleEnvironment: 'Triangle',
    NiceEnvironment: 'Nice',
    BigMirrorEnvironment: 'Big Mirror',
    DragonsEnvironment: 'Dragons',
    KDAEnvironment: 'K/DA',
    MonstercatEnvironment: 'Monstercat',
    CrabRaveEnvironment: 'Crab Rave',
    PanicEnvironment: 'Panic',
    RocketEnvironment: 'Rocket',
    GreenDayEnvironment: 'Green Day',
    GreenDayGrenadeEnvironment: 'Green Day Grenade',
    TimbalandEnvironment: 'Timbaland',
    FitBeatEnvironment: 'FitBeat',
    LinkinParkEnvironment: 'Linkin Park',
    BTSEnvironment: 'BTS',
    KaleidoscopeEnvironment: 'Kaleidoscope',
    InterscopeEnvironment: 'Interscope',
    SkrillexEnvironment: 'Skrillex',
    BillieEnvironment: 'Billie',
    HalloweenEnvironment: 'Spooky',
    GagaEnvironment: 'Gaga',
    WeaveEnvironment: 'Weave',
    PyroEnvironment: 'Pyro',
    EDMEnvironment: 'EDM',
    GlassDesertEnvironment: 'Glass Desert',
};

export const eventTypeRename = (
    type: number,
    environment?: EnvironmentAllName
): string => {
    switch (type) {
        case 0:
            switch (environment) {
                default:
                    return 'Back Lasers';
            }
        case 1:
            switch (environment) {
                default:
                    return 'Ring Lights';
            }
        case 2:
            switch (environment) {
                default:
                    return 'Left Lasers';
            }
        case 3:
            switch (environment) {
                default:
                    return 'Right Lasers';
            }
        case 4:
            switch (environment) {
                default:
                    return 'Center Lights';
            }
        case 5:
            return 'Light Color Boost';
        case 6:
            switch (environment) {
                default:
                    return 'Extra Left Lights';
            }
        case 7:
            switch (environment) {
                default:
                    return 'Extra Right Lights';
            }
        case 8:
            switch (environment) {
                default:
                    return 'Ring Rotation';
            }
        case 9:
            switch (environment) {
                default:
                    return 'Ring Zoom';
            }
        case 10:
            switch (environment) {
                default:
                    return 'Extra Left Lasers';
            }
        case 11:
            switch (environment) {
                default:
                    return 'Extra Right Lasers';
            }
        case 12:
            switch (environment) {
                default:
                    return 'Left Laser Rotation';
            }
        case 13:
            switch (environment) {
                default:
                    return 'Right Laser Rotation';
            }
        case 14:
            return 'Early Lane Rotation';
        case 15:
            return 'Late Lane Rotation';
        case 16:
            switch (environment) {
                default:
                    return 'Utility Event 1';
            }
        case 17:
            switch (environment) {
                default:
                    return 'Utility Event 2';
            }
        case 18:
            switch (environment) {
                default:
                    return 'Utility Event 3';
            }
        case 19:
            switch (environment) {
                default:
                    return 'Utility Event 4';
            }
        case 40:
            switch (environment) {
                default:
                    return 'BTS Event 1';
            }
        case 41:
            switch (environment) {
                default:
                    return 'BTS Event 2';
            }
        case 42:
            switch (environment) {
                default:
                    return 'BTS Event 3';
            }
        case 43:
            switch (environment) {
                default:
                    return 'BTS Event 4';
            }
        default:
            return 'Unknown';
    }
};

export const eventGroupRename = (
    id: number,
    environment?: EnvironmentAllName
): string => {
    switch (environment) {
        case 'WeaveEnvironment': {
            switch (id) {
                case 0:
                    return 'Bottom Left Vertical Laser';
                case 1:
                    return 'Bottom Right Vertical Laser';
                case 2:
                    return 'Top Left Vertical Laser';
                case 3:
                    return 'Top Right Vertical Laser';
                case 4:
                    return 'Bottom Left Center Vertical Laser';
                case 5:
                    return 'Bottom Right Center Vertical Laser';
                case 6:
                    return 'Top Left Center Vertical Laser';
                case 7:
                    return 'Top Right Center Vertical Laser';
                case 8:
                    return 'Bottom Left Horizontal Laser';
                case 9:
                    return 'Bottom Right Horizontal Laser';
                case 10:
                    return 'Top Left Horizontal Laser';
                case 11:
                    return 'Top Right Horizontal Laser';
                case 12:
                    return 'Top Center Laser';
                case 13:
                    return 'Bottom Center Laser';
                case 14:
                    return 'Left Center Laser';
                case 15:
                    return 'Right Center Laser';
                default:
                    return 'Unknown';
            }
        }
        case 'PyroEnvironment': {
            switch (id) {
                case 0:
                    return 'Left Stage Light';
                case 1:
                    return 'Right Stage Light';
                case 2:
                    return 'Top Left Laser';
                case 3:
                    return 'Top Right Laser';
                case 4:
                    return 'Top Middle Laser';
                case 5:
                    return 'Top Light';
                case 6:
                    return 'Left Light Tower';
                case 7:
                    return 'Right Light Tower';
                case 8:
                    return 'Stage Left Laser';
                case 9:
                    return 'Stage Right Laser';
                case 10:
                    return 'Stage far Left Laser';
                case 11:
                    return 'Stage far Right Laser';
                case 12:
                    return 'Left Flame';
                case 13:
                    return 'Right Flame';
                default:
                    return 'Unknown';
            }
        }
        case 'EDMEnvironment': {
            switch (id) {
                case 0:
                    return 'Large Circle Light';
                case 1:
                    return 'Large Circle Light 2';
                case 2:
                    return 'Laser Circle Light';
                case 3:
                    return 'Laser Circle Light 2';
                case 4:
                    return 'Left Vertical Laser';
                case 5:
                    return 'Right Vertical Laser 2';
                case 6:
                    return 'Left Horizontal Laser';
                case 7:
                    return 'Left Horizontal Laser 2';
                case 8:
                    return 'Right Horizontal Laser';
                case 9:
                    return 'Right Horizontal Laser 2';
                case 10:
                    return 'Left Horizontal Laser 3';
                case 11:
                    return 'Right Horizontal Laser 3';
                case 12:
                    return 'Unidentifed';
                case 13:
                    return 'Unidentifed';
                case 14:
                    return 'Unidentifed';
                case 15:
                    return 'Unidentifed';
                case 16:
                    return 'Unidentifed';
                case 17:
                    return 'Unidentifed';
                default:
                    return 'Unknown';
            }
        }
        default:
            return 'Unknown';
    }
};

/** List of available event type in environment. */
export const EventList: Readonly<Record<EnvironmentAllName, [number[], number[]]>> = {
    DefaultEnvironment: [[0, 1, 2, 3, 4, 5, 8, 9, 12, 13], []],
    OriginsEnvironment: [[0, 1, 2, 3, 4, 5, 8, 9, 12, 13], []],
    TriangleEnvironment: [[0, 1, 2, 3, 4, 5, 8, 9, 12, 13], []],
    NiceEnvironment: [[0, 1, 2, 3, 4, 5, 8, 9, 12, 13], []],
    BigMirrorEnvironment: [[0, 1, 2, 3, 4, 5, 8, 9, 12, 13], []],
    DragonsEnvironment: [[0, 1, 2, 3, 4, 5, 8, 9, 12, 13], []],
    KDAEnvironment: [[0, 1, 2, 3, 4, 5, 8, 9, 12, 13], []],
    MonstercatEnvironment: [[0, 1, 2, 3, 4, 5, 8, 9, 12, 13], []],
    CrabRaveEnvironment: [[0, 1, 2, 3, 4, 5, 8, 9, 12, 13], []],
    PanicEnvironment: [[0, 1, 2, 3, 4, 5, 8, 9, 12, 13], []],
    RocketEnvironment: [[0, 1, 2, 3, 4, 5, 8, 9, 12, 13], []],
    GreenDayEnvironment: [[0, 1, 2, 3, 4, 5, 8, 9, 12, 13], []],
    GreenDayGrenadeEnvironment: [[0, 1, 2, 3, 4, 5, 8, 9, 12, 13], []],
    TimbalandEnvironment: [[0, 1, 2, 3, 4, 5, 8, 9, 12, 13], []],
    FitBeatEnvironment: [[0, 1, 2, 3, 4, 5, 8, 9, 12, 13], []],
    LinkinParkEnvironment: [[0, 1, 2, 3, 4, 5, 8, 9, 12, 13], []],
    BTSEnvironment: [[0, 1, 2, 3, 4, 5, 8, 9, 12, 13], []],
    KaleidoscopeEnvironment: [[0, 1, 2, 3, 4, 5, 8, 9, 12, 13], []],
    InterscopeEnvironment: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 16, 17], []],
    SkrillexEnvironment: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13], []],
    BillieEnvironment: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 17], []],
    HalloweenEnvironment: [[0, 1, 2, 3, 4, 5, 8, 9, 12, 13], []],
    GagaEnvironment: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 17], []],
    GlassDesertEnvironment: [[0, 1, 2, 3, 4, 5, 8, 9, 12, 13], []],
    WeaveEnvironment: [[], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]],
    PyroEnvironment: [
        [0, 1, 2, 3, 4, 6],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    ],
    EDMEnvironment: [
        [0, 1, 4],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    ],
};

// very readable code :+1:
// should predefine it for performance but it might be longer and hard to trace
export const LightIDList: Readonly<
    Record<EnvironmentAllName, Partial<{ [key: number]: number[] }>>
> = {
    DefaultEnvironment: {
        0: Array.from(Array(10), (_, i) => i + 1),
        1: Array.from(Array(60), (_, i) => i + 1),
        2: Array.from(Array(7), (_, i) => i + 1),
        3: Array.from(Array(7), (_, i) => i + 1),
        4: Array.from(Array(12), (_, i) => i + 1),
    },
    OriginsEnvironment: {
        0: Array.from(Array(10), (_, i) => i + 1),
        1: Array.from(Array(60), (_, i) => i + 1),
        2: Array.from(Array(7), (_, i) => i + 1),
        3: Array.from(Array(7), (_, i) => i + 1),
        4: Array.from(Array(12), (_, i) => i + 1),
    },
    TriangleEnvironment: {
        0: Array.from(Array(8), (_, i) => i + 1),
        1: Array.from(Array(60), (_, i) => i + 1),
        2: Array.from(Array(7), (_, i) => i + 1),
        3: Array.from(Array(7), (_, i) => i + 1),
        4: Array.from(Array(12), (_, i) => i + 1),
    },
    NiceEnvironment: {
        0: Array.from(Array(10), (_, i) => i + 1),
        1: Array.from(Array(60), (_, i) => i + 1),
        2: Array.from(Array(7), (_, i) => i + 1),
        3: Array.from(Array(7), (_, i) => i + 1),
        4: Array.from(Array(12), (_, i) => i + 1),
    },
    BigMirrorEnvironment: {
        0: Array.from(Array(10), (_, i) => i + 1),
        1: Array.from(Array(60), (_, i) => i + 1),
        2: Array.from(Array(6), (_, i) => i + 1),
        3: Array.from(Array(6), (_, i) => i + 1),
        4: Array.from(Array(16), (_, i) => i + 1),
    },
    DragonsEnvironment: {
        0: Array.from(Array(2), (_, i) => i + 1),
        1: Array.from(Array(62), (_, i) => i + 1),
        2: Array.from(Array(5), (_, i) => i + 1),
        3: Array.from(Array(5), (_, i) => i + 1),
        4: Array.from(Array(4), (_, i) => i + 1),
    },
    KDAEnvironment: {
        0: Array.from(Array(6), (_, i) => i + 1),
        1: Array.from(Array(5), (_, i) => i + 1),
        2: Array.from(Array(7), (_, i) => i + 1),
        3: Array.from(Array(9), (_, i) => i + 1),
        4: Array.from(Array(80), (_, i) => i + 1),
    },
    MonstercatEnvironment: {
        0: Array.from(Array(8), (_, i) => i + 1),
        1: Array.from(Array(7), (_, i) => i + 1),
        2: Array.from(Array(5), (_, i) => i + 1),
        3: Array.from(Array(5), (_, i) => i + 1),
        4: Array.from(Array(14), (_, i) => i + 1),
    },
    CrabRaveEnvironment: {
        0: Array.from(Array(8), (_, i) => i + 1),
        1: Array.from(Array(7), (_, i) => i + 1),
        2: Array.from(Array(5), (_, i) => i + 1),
        3: Array.from(Array(5), (_, i) => i + 1),
        4: Array.from(Array(14), (_, i) => i + 1),
    },
    PanicEnvironment: {
        0: Array.from(Array(2), (_, i) => i + 1),
        1: Array.from(Array(62), (_, i) => i + 1),
        2: Array.from(Array(7), (_, i) => i + 1),
        3: Array.from(Array(7), (_, i) => i + 1),
        4: Array.from(Array(6), (_, i) => i + 1),
    },
    RocketEnvironment: {
        0: Array.from(Array(11), (_, i) => i + 1),
        1: Array.from(Array(4), (_, i) => i + 1),
        2: Array.from(Array(7), (_, i) => i + 1),
        3: Array.from(Array(7), (_, i) => i + 1),
        4: Array.from(Array(5), (_, i) => i + 1),
    },
    GreenDayEnvironment: {
        0: Array.from(Array(16), (_, i) => i + 1),
        1: Array.from(Array(60), (_, i) => i + 1),
        2: Array.from(Array(6), (_, i) => i + 1),
        3: Array.from(Array(6), (_, i) => i + 1),
        4: Array.from(Array(3), (_, i) => i + 1),
    },
    GreenDayGrenadeEnvironment: {
        0: Array.from(Array(16), (_, i) => i + 1),
        2: Array.from(Array(6), (_, i) => i + 1),
        3: Array.from(Array(6), (_, i) => i + 1),
        4: Array.from(Array(3), (_, i) => i + 1),
    },
    TimbalandEnvironment: {
        0: Array.from(Array(20), (_, i) => i + 1),
        1: Array.from(Array(20), (_, i) => i + 1),
        2: Array.from(Array(10), (_, i) => i + 1),
        3: Array.from(Array(14), (_, i) => i + 1),
        4: Array.from(Array(6), (_, i) => i + 1),
    },
    FitBeatEnvironment: {
        0: Array.from(Array(30), (_, i) => i + 1),
        1: Array.from(Array(30), (_, i) => i + 1),
        2: Array.from(Array(8), (_, i) => i + 1),
        3: Array.from(Array(8), (_, i) => i + 1),
        4: Array.from(Array(2), (_, i) => i + 1),
    },
    LinkinParkEnvironment: {
        0: Array.from(Array(2), (_, i) => i + 1),
        1: Array.from(Array(16), (_, i) => i + 1),
        2: Array.from(Array(20), (_, i) => i + 1),
        3: Array.from(Array(20), (_, i) => i + 1),
        4: Array.from(Array(1), (_, i) => i + 1),
    },
    BTSEnvironment: {
        0: Array.from(Array(1), (_, i) => i + 1),
        1: Array.from(Array(20), (_, i) => i + 1),
        2: Array.from(Array(25), (_, i) => i + 1),
        3: Array.from(Array(25), (_, i) => i + 1),
        4: Array.from(Array(3), (_, i) => i + 1),
    },
    KaleidoscopeEnvironment: {
        0: Array.from(Array(40), (_, i) => i + 1),
        1: Array.from(Array(40), (_, i) => i + 1),
        2: Array.from(Array(20), (_, i) => i + 1),
        3: Array.from(Array(20), (_, i) => i + 1),
        4: Array.from(Array(80), (_, i) => i + 1),
    },
    InterscopeEnvironment: {
        0: Array.from(Array(3), (_, i) => i + 1),
        1: Array.from(Array(3), (_, i) => i + 1),
        2: Array.from(Array(3), (_, i) => i + 1),
        3: Array.from(Array(3), (_, i) => i + 1),
        4: Array.from(Array(3), (_, i) => i + 1),
        6: Array.from(Array(7), (_, i) => i + 1),
        7: Array.from(Array(7), (_, i) => i + 1),
    },
    SkrillexEnvironment: {
        0: Array.from(Array(2), (_, i) => i + 1),
        1: Array.from(Array(66), (_, i) => i + 1),
        2: Array.from(Array(23), (_, i) => i + 1),
        3: Array.from(Array(23), (_, i) => i + 1),
        4: Array.from(Array(66), (_, i) => i + 1),
        6: Array.from(Array(24), (_, i) => i + 1),
        7: Array.from(Array(24), (_, i) => i + 1),
    },
    //FIXME: Billie, Halloween and Gaga is incorrect
    BillieEnvironment: {
        0: Array.from(Array(2), (_, i) => i + 1),
        1: Array.from(Array(66), (_, i) => i + 1),
        2: Array.from(Array(23), (_, i) => i + 1),
        3: Array.from(Array(23), (_, i) => i + 1),
        4: Array.from(Array(66), (_, i) => i + 1),
        6: Array.from(Array(24), (_, i) => i + 1),
        7: Array.from(Array(24), (_, i) => i + 1),
        10: Array.from(Array(24), (_, i) => i + 1),
        11: Array.from(Array(24), (_, i) => i + 1),
    },
    HalloweenEnvironment: {
        0: Array.from(Array(2), (_, i) => i + 1),
        1: Array.from(Array(66), (_, i) => i + 1),
        2: Array.from(Array(23), (_, i) => i + 1),
        3: Array.from(Array(23), (_, i) => i + 1),
        4: Array.from(Array(66), (_, i) => i + 1),
    },
    // FIXME: unknown
    GagaEnvironment: {
        0: Array.from(Array(2), (_, i) => i + 1),
        1: Array.from(Array(66), (_, i) => i + 1),
        2: Array.from(Array(23), (_, i) => i + 1),
        3: Array.from(Array(23), (_, i) => i + 1),
        4: Array.from(Array(66), (_, i) => i + 1),
        6: Array.from(Array(24), (_, i) => i + 1),
        7: Array.from(Array(24), (_, i) => i + 1),
        10: Array.from(Array(24), (_, i) => i + 1),
        11: Array.from(Array(24), (_, i) => i + 1),
    },
    WeaveEnvironment: {},
    // FIXME: unknown
    PyroEnvironment: {
        0: Array.from(Array(2), (_, i) => i + 1),
        1: Array.from(Array(66), (_, i) => i + 1),
        2: Array.from(Array(23), (_, i) => i + 1),
        3: Array.from(Array(23), (_, i) => i + 1),
        4: Array.from(Array(66), (_, i) => i + 1),
        6: Array.from(Array(24), (_, i) => i + 1),
    },
    // FIXME: unknown
    EDMEnvironment: {
        0: Array.from(Array(2), (_, i) => i + 1),
        1: Array.from(Array(66), (_, i) => i + 1),
        4: Array.from(Array(66), (_, i) => i + 1),
    },
    GlassDesertEnvironment: {
        0: Array.from(Array(6), (_, i) => i + 1),
        1: Array.from(Array(8), (_, i) => i + 1),
        2: Array.from(Array(10), (_, i) => i + 1),
        3: Array.from(Array(10), (_, i) => i + 1),
    },
};
