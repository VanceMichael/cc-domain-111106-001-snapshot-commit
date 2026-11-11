# 园区湖表原件工具

用于查看园区湖表的合成原件，格式说明见 docs/数据约定.md。src/source.mjs 提供当前读取功能，src/files.mjs 限定本地样本读取范围。

需要 Node.js 22 或更新版本，当前仅使用内置模块，不需要第三方依赖。

测试命令：

```sh
npm test
```

编译与语法检查命令：

```sh
npm run build
```

原件读取命令：

```sh
npm run inspect
```

可用 `npm run inspect -- 文件名` 读取 fixtures 内其他同格式原件。运行结果输出到标准输出，原件保持不变。
