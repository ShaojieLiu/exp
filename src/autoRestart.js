// node autoRestart.js server.js

const fs = require('fs')
const shell = require("shelljs")
const chalk = require('chalk')
const log = console.log.bind(console)
const logVip = (...args) => log(chalk.green.bgBlack.bold(...args))

const getLoop = (filePath, temp='', thread) => () => {
    const f = fs.readFileSync(filePath, 'utf8')
    if (temp !== f) {
        thread && thread.kill()
        thread = shell.exec('node ' + filePath, {async: true, silent: false})
        const date = new Date().toLocaleString()
        logVip(date, '*** File changed, restart! ***')
        temp = f
    }
}

const main = () => {
    const filePath = process.argv[2]
    const loop = getLoop(filePath)
    setInterval(loop, 100)
}

main()
