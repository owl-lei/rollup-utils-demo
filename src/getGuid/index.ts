/*
 * @Author: 风行
 * @Date: 2023-07-15
 * @LastEditors: 风行
 * @LastEditTime: 2023-07-16
 * @Description: file content
 * @FilePath: /rollup-demo/src/getGuid/index.ts
 */
/**
 * 获取GUID
 * @returns {*} 
 * @example 
```js
getGuid()
```
 * @remarks 
返回36位GUID
 */
const getGuid = (): string => {
  function S4() {
    // eslint-disable-next-line no-bitwise
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
};
export { getGuid };
