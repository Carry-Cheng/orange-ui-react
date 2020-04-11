const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PUBLIC_URL: resolveApp('.'),
    NODE_MODULES: resolveApp('node_modules'),
    REACT: resolveApp('node_modules') + '/react/umd/react.development.js',
    REACT_DOM: resolveApp('node_modules') + '/react-dom/umd/react-dom.development.js'
}
