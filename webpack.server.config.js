const { output } = require("./webpack.config");

module.exports ={
    entry: {
    server: './src/backend.index.js',
},
mode: 'production',
output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
},
target: 'node',
node: {
    __dirname: false,
    __filename: false,
},
externals: [nodeExternals()],
}