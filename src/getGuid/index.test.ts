/*
 * @Author: 风行
 * @Date: 2023-07-15
 * @LastEditors: 风行
 * @LastEditTime: 2023-07-16
 * @Description: file content
 * @FilePath: /rollup-utils-demo/src/getGuid/index.test.ts
 */
import { expect, test } from 'vitest';
import { getGuid } from './index';

test('生成36位GUID', () => {
  expect(getGuid().length).toBe(36);
});

test('生成36位GUID', () => {
  const total = getGuid()
    .split('-')
    .reduce((total, value) => total + value.length, 0);

  expect(total).toBe(32);
});

const testTotal = 100000;
test(`生成${testTotal}个看有没重复的`, () => {
  const map = new Map();
  let i = 0;
  while (i < testTotal) {
    i += 1;
    map.set(getGuid(), i);
  }
  expect(map.size).toBe(testTotal);
});
