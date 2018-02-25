# node实现: 监控文件 自动重启

> 本章有点跑题, 主要是改写服务器代码要不停地重启服务, 较繁琐. 因此本章会实现一个 **监控文件改动, 自动重启服务器** 的服务, 主要是方便开发.

----

### 参考资料

1. [阮一峰命令行教程 ](http://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html)
2. [shelljs npm](https://www.npmjs.com/package/shelljs)

----

### shelljs 和 fs 的使用

1. exec执行
2. shell.global

----

### node脚本

1. process.argv 参数读取
2. yargs 参数读取
3. fs模块
4. shelljs 模块, 对child_process 的封装 (可以执行unix系统命令)
    - shell.exec 执行
    - shell/global 会注册多个全局函数
