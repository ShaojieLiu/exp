// 引入一个模块, 会在下面用到
// 模块就是别人已经写好的程序, 我们可以直接拿来使用
const net = require('net')
const fs = require('fs')
const url = require('url')

// 配置服务器的参数
// 服务器的 host 为空字符串, 表示接受任意 ip 地址的连接
// port 是端口, 这里设置的是 2000
// 随便选一个 1024 - 65535 之间的数字就可以, 1024 以下的端口需要管理员权限才能使用
const host = ''
const port = 2000


// 创建一个服务器, 这个是套路写法
// 相当于 new 一个对象
const server = new net.Server()

// 开启一个服务器监听连接

server.listen(port, host, () => {
    // server.address() 返回的是绑定的服务器的 ip 地址、ip 协议、端口号
    // 这里打印出来的 ipv6 的格式, 端口是 2000
    console.log('listening', server.address())
})

// 当有新连接建立时, 就会触发 connection 事件

server.on('connection', (socket) => {
    // socket.io 是对 websocket 的封装

    // socket 是回调函数的参数, 在这里是一个套路
    // js 中这样的情形比较多, 比如点击事件的回调参数中, 第一个参数就是 event 对象
    // element.on('click', (event) => {
    //
    // })

    // socket 有一些属性表示连接的客户端的信息
    // 下面的属性分别表示远程 ip 地址, 端口, 协议族
    const address = socket.remoteAddress

    // remotePort 是操作系统分配给客户端的
    const port = socket.remotePort
    const family = socket.remoteFamily
    console.log('connected client info', address, port, family)

    // 当 socket 接收到数据的时候, 会触发 data 事件
    socket.on('data', (foo) => {
        // 第一个 data 是事件名称,
        // 第二个 data 是参数(为了避免混淆, 我把第二个 data 改成了 foo)
        // data(这里说的是 foo) 是一个 Buffer 类型
        // Buffer 是 node 中的特殊类型, 用来处理二进制数据
        // 就把 buffer 理解成一个装二进制数据的容器就可以了
        // buffer 类型调用 toString() 可以将二进制数据转成字符串
        const r = foo.toString()
        console.log('接受到的原始数据', r, typeof(r))
        const str = fs.readFileSync('./res/logo.png')

        const response = 'HTTP/1.1 200 OK\r\nContent-Type: text/html;charset=utf8\r\n\r\n' + 'Hello World!123'
        // write 方法用来发送数据
        // 参数可以是 string 类型, 也可以是 buffer 类型
        socket.write(response)

        // 这里是一个套路, 如果不这么做, 浏览器不知道当前请求是否已经结束
        // 会出现一直等待的情况, 也就是会一直 loading
        // socket.destroy()
    })
})

// 最后两个是套路写法

// 服务器出错的时候会触发这个事件, 但是具体什么出错是未知的, 套路写法
server.on('error', (error) => {
    console.log('server error', error)
})

// 当服务器关闭时被触发
server.on('close', () => {
    console.log('server closed')
})
