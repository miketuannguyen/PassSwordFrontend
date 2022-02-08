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

/**
 * Get first value of an object
 * @param obj - the object to retrieve value
 * @returns first value of object, `null` if `obj` is empty
 */
export function getFirstValueOfObj<V>(obj: { [key: string]: V }): V | null {
    if (!obj) return null;

    const controlKeys = Object.keys(obj);
    if (controlKeys.length <= 0) return null;

    return obj[controlKeys[0]];
}

/**
 * Check if a variable is blank or not
 * @param str - a string or a number
 * @returns `str` is blank or not
 */
export const isBlank = (str: string | number | null | undefined) => typeof str === 'undefined' || str == null || str.toString().trim() === '';
