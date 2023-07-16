/**
 * feat: 新功能
 * update: 更新某功能
 * fix: 修补某功能的bug
 * refactor: 重构某个功能
 * perf: 增加代码进行性能测试
 * optimize: 优化构建工具或运行时性能
 * style: 仅样式改动
 * docs: 仅文档新增/改动
 * chore: 构建过程或辅助工具的变动
 * test: 增加测试用例
 * revert: 回滚
 * merge: 合并
 * rebase: 变基
 */
module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'update',
        'fix',
        'refactor',
        'perf',
        'docs',
        'style',
        'test',
        'build',
        'chore',
        'revert',
        'merge',
        'rebase',
      ],
    ],
  },
};
