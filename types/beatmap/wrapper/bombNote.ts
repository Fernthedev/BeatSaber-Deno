import { IWrapGridObject } from './gridObject.ts';

// deno-lint-ignore no-empty-interface
export interface IWrapBombNote<
    T extends Record<keyof T, unknown> = Record<string, unknown>,
> extends IWrapGridObject<T> {}
