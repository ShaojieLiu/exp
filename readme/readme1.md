# node net 模块的使用

----

### 参考资料

1. [nodejs-net-module 中文资料 ](http://www.runoob.com/nodejs/nodejs-net-module.html)
2. [nodejs-net-module API ](https://nodejs.org/api/net.html#net_event_connection)

----

### 基础

new, on的写法

----

### net模块的基本使用

net.Socket实例的事件, 属性, 方法

net.Server实例的4个事件:
1	listening
当服务器调用 server.listen 绑定后会触发。
2	connection
当新连接创建后会被触发。socket 是 net.Socket实例。
3	close
服务器关闭时会触发。注意，如果存在连接，这个事件不会被触发直到所有的连接关闭。
4	error

----

### http头字段

Content-Length
Content-Type

socket.destroy
