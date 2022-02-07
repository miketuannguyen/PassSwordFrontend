/**
 * Make all properties of an object immutable including deep properties
 * @param obj - this can contain deep properties
 * @returns a readonly version of the parameter object
 */
export const deepFreeze = (obj: {
    [key: string]: any;
}): Readonly<{
    [key: string]: any;
}> => {
    Object.keys(obj).forEach((prop) => {
        if (typeof obj[prop] === 'object' && !Object.isFrozen(obj[prop])) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            deepFreeze(obj[prop]);
        }
    });
    return Object.freeze(obj);
};
