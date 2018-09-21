/**
 * 判断是否是相等函数
 * 
 * @export
 * @interface EqualsFunction
 * @template T 
 */
export interface EqualsFunction<T> {
    (a: T, b: T): boolean;
}
/**
 * 默认判断相等函数
 * 
 * @export
 * @template T 
 * @param {T} a 
 * @param {T} b 
 * @returns {boolean} 
 */
export function defaultEquals<T>(a: T, b: T): boolean {
    return a === b;
}

export interface LoopFunction<T> {
    (a: T): boolean | void;
}