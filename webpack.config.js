const path = require('path');
module.exports = {
  mode:'production',
  // mode:'development',
  entry:'./src/index.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    // filename:'utils_zss.js',//生成打包后的文件名
    filename:'utils_zss.min.js',
    library:'utils',//指定库的名字（在使用时用）
    libraryTarget:'umd',//使得该库可以通过多种方式访问

  },//必须使用绝对路径
  externals: {//外部化：不打包引入其他库的文件
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  }

}