var result = ["1", "2", "3"].map(parseInt);
console.log(result);
// [1, NaN, NaN]

/**
 * 0 parseInt('1', 0)
 * 是 0x 开头当成 16 进制
 * 不是 0x 开头当成 10 进制
 */

/**
 * 1 parseInt('2', 1)
 * 小于 2 大于 36 返回 NaN
 */

/**
 * 2 parseInt('3', 2)
 * 二进制里面不可能出现 3 是无效数字 返回 NaN
 */
