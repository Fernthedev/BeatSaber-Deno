// deno-lint-ignore-file no-explicit-any
import { Vector2 } from '../../vector.ts';
import { ModType } from '../shared/modCheck.ts';
import { IWrapBaseObject, IWrapBaseObjectAttribute } from './baseObject.ts';

export interface IWrapGridObjectAttribute<T extends { [P in keyof T]: T[P] } = Record<string, any>>
   extends IWrapBaseObjectAttribute<T> {
   /** Position x `<int>` of base obj.
    * ```ts
    * 0 -> Outer Left
    * 1 -> Middle Left
    * 2 -> Middle Right
    * 3 -> Outer Right
    * ```
    * ---
    * Range: `0-3`
    */
   posX: number;
   /** Position y `<int>` of base obj.
    * ```ts
    * 0 -> Bottom row
    * 1 -> Middle row
    * 2 -> Top row
    * ```
    * ---
    * Range: `0-2`
    */
   posY: number;
}

export interface IWrapGridObject<T extends { [P in keyof T]: T[P] } = Record<string, any>>
   extends IWrapBaseObject<T>, IWrapGridObjectAttribute<T> {
   setPosX(value: number): this;
   setPosY(value: number): this;

   /** Mirror a grid object, apply alternative flip and Noodle Extensions if available.
    * ```ts
    * obj.mirror();
    * ```
    * Alternative flip is true by default. This implementation is typically used to flip color of note.
    */
   mirror(flipAlt?: boolean, flipNoodle?: boolean): this;

   /** Get object position and return the Beatwalls' position x and y value in tuple.
    * ```ts
    * const objPos = obj.getPosition();
    * ```
    */
   getPosition(type?: ModType): Vector2;

   /** Get two objects and return the distance between two objects.
    * ```ts
    * if (obj.getDistance(objCompare)) {}
    * ```
    */
   getDistance(compareTo: IWrapGridObject): number;

   /** Compare two objects and return if the objects is in vertical alignment.
    * ```ts
    * if (obj.isVertical(objCompare)) {}
    * ```
    */
   isVertical(compareTo: IWrapGridObject): boolean;

   /** Compare two objects and return if the objects is in horizontal alignment.
    * ```ts
    * if (obj.isHorizontal(objCompare)) {}
    * ```
    */
   isHorizontal(compareTo: IWrapGridObject): boolean;

   /** Compare two objects and return if the objects is in diagonal alignment.
    * ```ts
    * if (obj.isDiagonal(objCompare)) {}
    * ```
    */
   isDiagonal(compareTo: IWrapGridObject): boolean;

   /** Compare two  objects and return if the  objects is an inline.
    * ```ts
    * if (obj.isInline(objCompare)) {}
    * ```
    */
   isInline(compareTo: IWrapGridObject, lapping?: number): boolean;

   /** Compare two objects and return if the objects is adjacent.
    * ```ts
    * if (obj.isAdjacent(objCompare)) {}
    * ```
    */
   isAdjacent(compareTo: IWrapGridObject): boolean;

   /** Compare two objects and return if the objects is a window.
    * ```ts
    * if (obj.isWindow(objCompare)) {}
    * ```
    */
   isWindow(compareTo: IWrapGridObject, distance?: number): boolean;

   /** Compare two objects and return if the objects is a slanted window.
    * ```ts
    * if (obj.isSlantedWindow(objCompare)) {}
    * ```
    */
   isSlantedWindow(compareTo: IWrapGridObject): boolean;
}
