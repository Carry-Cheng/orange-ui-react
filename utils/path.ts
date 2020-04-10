const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

export default {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PUBLIC_URL: resolveApp('.')
}