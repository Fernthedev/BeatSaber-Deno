import { Difficulty } from '../../beatmap/v2/difficulty.ts';
import { Note } from '../../beatmap/v2/note.ts';
import { Obstacle } from '../../beatmap/v2/obstacle.ts';
import { Event } from '../../beatmap/v2/event.ts';
import { Waypoint } from '../../beatmap/v2/waypoint.ts';
import { Slider } from '../../beatmap/v2/slider.ts';
import { fixFloat, fixInt } from './helpers.ts';
import logger from '../../logger.ts';
import { fixCustomDataObject } from './customDataObject.ts';
import { fixCustomDataEvent } from './customDataEvent.ts';

function fixNote(obj: Note) {
    obj.time = fixFloat(obj.time, Note.default._time);
    obj.type = fixInt(obj.type, [0, 3], [0, 1, 3]);
    obj.posX = fixInt(obj.posX, Note.default._lineIndex);
    obj.posY = fixInt(obj.posY, Note.default._lineLayer);
    obj.direction = fixInt(obj.direction, Note.default._cutDirection);
    fixCustomDataObject(obj.customData);
}

function fixObstacle(obj: Obstacle) {
    obj.time = fixFloat(obj.time, Obstacle.default._time);
    obj.type = fixInt(obj.type, Obstacle.default._type);
    obj.posX = fixInt(obj.posX, Obstacle.default._lineIndex);
    obj.duration = fixFloat(obj.duration, Obstacle.default._duration);
    obj.width = fixInt(obj.width, Obstacle.default._width);
    fixCustomDataObject(obj.customData);
}

function fixEvent(obj: Event) {
    obj.time = fixFloat(obj.time, Event.default._time);
    obj.type = fixInt(obj.type, Event.default._type);
    obj.value = fixInt(obj.value, Event.default._value);
    obj.floatValue = fixFloat(obj.floatValue, Event.default._floatValue);
    fixCustomDataEvent(obj.customData);
}

function fixWaypoint(obj: Waypoint) {
    obj.time = fixFloat(obj.time, Waypoint.default._time);
    obj.posX = fixInt(obj.posX, Waypoint.default._lineIndex);
    obj.posY = fixInt(obj.posY, Waypoint.default._lineLayer);
    obj.direction = fixInt(obj.direction, Waypoint.default._offsetDirection);
}

function fixSlider(obj: Slider) {
    obj.color = fixInt(obj.color, Slider.default._colorType, [0, 1]);
    obj.time = fixFloat(obj.time, Slider.default._headTime);
    obj.posX = fixInt(obj.posX, Slider.default._headLineIndex);
    obj.posY = fixInt(obj.posY, Slider.default._headLineLayer);
    obj.direction = fixInt(obj.direction, Slider.default._headCutDirection);
    obj.lengthMultiplier = fixFloat(
        obj.lengthMultiplier,
        Slider.default._headControlPointLengthMultiplier,
    );
    obj.tailTime = fixFloat(obj.tailTime, Slider.default._tailTime);
    obj.tailPosX = fixInt(obj.tailPosX, Slider.default._tailLineIndex);
    obj.tailPosY = fixInt(obj.tailPosY, Slider.default._tailLineLayer);
    obj.tailDirection = fixInt(obj.tailDirection, Slider.default._tailCutDirection);
    obj.tailLengthMultiplier = fixFloat(
        obj.tailLengthMultiplier,
        Slider.default._tailControlPointLengthMultiplier,
    );
    obj.midAnchor = fixInt(obj.midAnchor, Slider.default._sliderMidAnchorMode);
}

export function v2(data: Difficulty) {
    logger.info(
        '[patch::dataCorrection::difficulty::v2] Verifying and correcting data type for beatmap v2...',
    );

    data.colorNotes.forEach(fixNote);
    data.obstacles.forEach(fixObstacle);
    data.basicEvents.forEach(fixEvent);
    data.waypoints.forEach(fixWaypoint);
    data.sliders.forEach(fixSlider);
}
