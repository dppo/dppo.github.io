# C++ 约定

本文件规定 C++ 的平台判断、命名、文件组织、资源管理、排版和注释要求，适用于 C++ 源码、头文件及接口，并补充 [通用行为约定](AGENTS.md)。

## 实现原则

- 平台判断优先放在方法调用处；非必要不得在整个方法的声明或定义外添加平台条件编译判断。

## 编码与排版

- C++ 命名参考 [Google C++ Style Guide](https://google.github.io/styleguide/cppguide.html) 的 Naming 章节，具体要求以下文为准。
- 类型、方法及文件名使用简短大驼峰，不加重复项目前缀；语言和工具要求的命名除外。
- 变量和字段使用小驼峰，类的私有成员加尾部下划线。
- C++ 头文件使用 `.h` 和 `#pragma once`，实现使用 `.cpp`，测试使用 `<功能>Tests.cpp`；工具约定文件名不变。资源管理使用 RAII。
- PImpl 与内部资源状态统一采用合并声明，如 `std::unique_ptr<struct XxxImpl> impl_;`、`std::shared_ptr<struct XxxState> state_;`；各类型独立命名，定义放在 `.cpp`，相关引用同步更新，禁止拆出类内前置声明。
- 可由 `.clang-format` 配置的规则集中在该文件维护，不在约定中重复定义。
- 对修改的 C++ 源码执行 `clang-format -i <文件>`，不格式化构建产物或第三方代码。

## 注释要求

- C++ 注释遵循 [Doxygen](https://www.doxygen.nl/manual/docblocks.html)，接口用 `/** ... */`，字段用 `///`，按需说明功能、参数、返回值和异常。
- C++ 文件顶部使用 `@file`、`@brief` 说明模块功能与职责。
- 不在 lambda 表达式前添加功能注释；需要说明时，使用 `//` 注释放在其内部对应的方法调用或主要处理步骤上方，避免重复已有说明。
