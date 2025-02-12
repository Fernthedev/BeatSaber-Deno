/**
 * Beatmap JSON schema for base game, modded and external.
 *
 * Current model version:
 * ```ts
 * Beatmap V2: 2.6.0
 * Beatmap V3: 3.2.0
 * ```
 *
 * Wrapper is used within the library for cross-version compatibility reason.
 *
 * @module
 */

export * from './shared/mod.ts';
export * as external from './external/mod.ts';
export * as v2 from './v2/mod.ts';
export * as v3 from './v3/mod.ts';
export * as wrapper from './wrapper/mod.ts';
