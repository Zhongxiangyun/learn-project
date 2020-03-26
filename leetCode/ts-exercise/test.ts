/**
 * 检测变量类型
 * @param type
 */
function isType(type: string) {
    return function (value: any): boolean {
        return Object.prototype.toString.call(value) === `[object ${type}]`;
    };
}

const variableTypeDetection = {
    isNumber: isType('Number'),
    isString: isType('String'),
    isBoolean: isType('Boolean'),
    isNull: isType('Null'),
    isUndefined: isType('Undefined'),
    isSymbol: isType('Symbol'),
    isFunction: isType('Function'),
    isObject: isType('Object'),
    isArray: isType('Array'),
};
const arr = [1, 192, 2, 88]
console.log(variableTypeDetection.isArray(arr));
