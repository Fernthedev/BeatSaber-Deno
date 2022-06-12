import * as bsmap from '../mod.ts';

export const printChromaEnvironment = (d: bsmap.v3.DifficultyData) => {
    const envEnh = d.customData.environment ?? [];
    const uniqueID: string[] = [];
    let hasTrack = 0;
    for (const ce of envEnh) {
        if (!uniqueID.includes(ce.id)) {
            uniqueID.push(ce.id);
        }
        if (ce.track) {
            hasTrack++;
        }
    }
    console.log('Environment Enhancement\nTotal:', envEnh.length);
    console.log('Unique ID:', uniqueID.length);
    if (hasTrack) {
        console.log('Track Count:', hasTrack);
    }
};

export const printV3Event = (d: bsmap.v3.DifficultyData) => {
    console.log(
        'Light Color Event Box Group',
        d.lightColorEventBoxGroups.length,
        '\nLight Color Event Box',
        d.lightColorEventBoxGroups.reduce((t, e) => t + e.events.length, 0),
        '\nLight Color',
        d.lightColorEventBoxGroups.reduce((t, e) => t + e.events.reduce((r, y) => r + y.events.length, 0), 0)
    );
    console.log();
    console.log(
        'Light Rotation Event Box Group',
        d.lightRotationEventBoxGroups.length,
        '\nLight Rotation Event Box',
        d.lightRotationEventBoxGroups.reduce((t, e) => t + e.events.length, 0),
        '\nLight Rotation',
        d.lightRotationEventBoxGroups.reduce((t, e) => t + e.events.reduce((r, y) => r + y.events.length, 0), 0)
    );
    console.log(
        '\nTotal V3 Event',
        d.lightColorEventBoxGroups.reduce((t, e) => t + e.events.reduce((r, y) => r + y.events.length, 0), 0) +
            d.lightRotationEventBoxGroups.reduce((t, e) => t + e.events.reduce((r, y) => r + y.events.length, 0), 0)
    );
};
