/*
 * @Author: 风行
 * @Date: 2023-07-16
 * @LastEditors: 风行
 * @LastEditTime: 2023-07-16
 * @Description: gulp自动化构建
 * @FilePath: /rollup-utils-demo/gulpfile.js
 */
const gulp = require('gulp');
const fs = require('fs-extra');
const spawn = require('cross-spawn');
const chalk = require('chalk');
const conventionalChangelog = require('gulp-conventional-changelog');

const log = {
  progress: (text) => {
    console.log(chalk.green(text));
  },
  error: (text) => {
    console.log(chalk.red(text));
  },
  log: (text) => {
    console.log(chalk.blue(text));
  },
};

const pathDist = './';

// 删除文件夹
const clearLibFile = async (done) => {
  fs.removeSync(`${pathDist}/dist`);
  fs.removeSync(`${pathDist}/docs`);
  log.progress('删除目录');
  done();
};

// 跑测试用例
const goTest = async (done) => {
  log.log('----------------开始测试用例----------------');

  const code = await new Promise((resolve) => {
    const ls = spawn('pnpm', ['run', 'test']);

    ls.stdout.on('data', (data) => {
      log.progress(data);
    });

    ls.stderr.on('data', (data) => {
      log.error(data);
    });

    ls.on('close', (code) => {
      resolve(code);
    });
  });

  if (!code) {
    log.log('----------------结束测试用例----------------');
    done();
  } else {
    done(new Error(code));
  }
};

// 生产api文档
const createDoc = async (done) => {
  log.log('----------------开始生成文档----------------');
  const code = await new Promise((resolve) => {
    const ls = spawn('pnpm', ['run', 'doc']);

    ls.stdout.on('data', (data) => {
      log.progress(data);
    });

    ls.stderr.on('data', (data) => {
      log.error(data);
    });

    ls.on('close', (code) => {
      resolve(code);
    });
  });

  if (!code) {
    log.log('----------------结束生成文档----------------');
    done();
  } else {
    done(new Error(code));
  }
};

// rollup打包
const handleRollup = async (done) => {
  log.log('----------------开始rollup打包----------------');

  const code = await new Promise((resolve) => {
    const ls = spawn('pnpm', ['run', 'rollup:build']);

    ls.stdout.on('data', (data) => {
      log.progress(data);
    });

    ls.stderr.on('data', (data) => {
      log.error(data);
    });

    ls.on('close', (code) => {
      resolve(code);
    });
  });

  if (!code) {
    log.log('----------------结束rollup打包----------------');
    done();
  } else {
    done(new Error(code));
  }
};

const changeLog = () => {
  return gulp
    .src('CHANGELOG.md')
    .pipe(
      conventionalChangelog({
        preset: 'angular',
      }),
    )
    .pipe(gulp.dest('./'));
};

exports.default = gulp.series(
  // [goTest, clearLibFile, createDoc, handleRollup, changeLog],
  [changeLog],
  (done) => {
    log.progress('编译成功');
    done();
  },
);
