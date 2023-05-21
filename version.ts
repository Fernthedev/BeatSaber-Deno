import logger from './logger.ts';

export const major = 1;
export const minor = 3;
export const patch = 4;

export const string = `${major}.${minor}.${patch}`;

export function print() {
    logger.tInfo(['version', print.name], 'BSMap version:', string);
}
