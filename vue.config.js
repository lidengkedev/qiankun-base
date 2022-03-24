const host = process.env.VUE_APP_HOST
const port = process.env.VUE_APP_PORT

module.exports = {
    devServer: {
        host,
        port
    }
}