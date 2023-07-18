# rollup打包工具库

```bash
# 初始化
pnpm i

# 安装全局commitizen
pnpm install commitizen -g

# 提交代码
git cz

# 打包
pnpm run build
```

## 基础依赖

```bash
pnpm i typescript rollup rollup-plugin-dts @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-json @rollup/plugin-alias rollup-plugin-esbuild rollup-plugin-typescript2 @rollup/plugin-babel @babel/core esbuild tslib typescript  -D
```

| 依赖                        | 作用                                                             |
| --------------------------- | ---------------------------------------------------------------- |
| typescript                  | typescript                                                       |
| rollup                      | 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码 |
| rollup-plugin-dts           | 生成 d.ts 文件                                                   |
| @rollup/plugin-node-resolve | 在 node_modules 中找到并捆绑第三方依赖项                         |
| @rollup/plugin-commonjs     | 将 CommonJS 模块转换为 ES6                                       |
| @rollup/plugin-json         | 将 .json 文件转换为 ES6 模块                                     |
| @rollup/plugin-alias        | 定义和解析捆绑包依赖项的别名                                     |
| rollup-plugin-esbuild       | Rollup 和 Esbuild 之间的集成                                     |
| rollup-plugin-typescript2   | Rollup 和 Typescript 之间的集成                                  |
| @rollup/plugin-babel        | 使用 Babel 编译文件                                              |
| @babel/core                 | Babel 核心库                                                     |
| esbuild                     | Esbuild 核心库                                                   |

## typedoc生成文档

[typedoc官网](https://typedoc.org/)

```shell
pnpm i typedoc -D
```

```json
//添加typedoc.json

{
  "entryPoints": ["./src"],
  "out": "docs"
}
```

## 发布到npm

需要在 package.json 中添加以下字段

```json
  "main": "dist/index.cjs",
  "module": "dist/index.mjs",
  "types": "index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs",
      "types": "./index.d.ts"
    }
  },
  "files": [
    "dist",
    "*.d.ts"
  ],

```

## 上传私包

```bash
#上传
npm publish --registry http://127.0.0.1:4873

#删除
npm unpublish --force yourPackage --registry http://127.0.0.1:4873
```
