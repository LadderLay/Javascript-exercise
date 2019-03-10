//webpack.config.js
const path = require('path');

module.exports = {
    entry:['./js/module3.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
        //path: __dirname,据说可以不生成dist文件
    }
};