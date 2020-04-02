const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin} = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')  // 运行vue插件

const mode = process.env.NODE_ENV ==='development' ? 'development': 'production';

module.exports = {
	entry: "./src/main.js",  // 入口文件
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle[hash:6].js', //  出口文件
	},
	mode,
	devtool: 'cheap-module-eval-source-map', //开发环境下使用
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: ['babel-loader'],
				exclude: /node_modules/ //排除 node_modules 目录
			},
			{
				test: /\.(le|c)ss$/,
				use: ['style-loader', 'css-loader', {
					loader: 'postcss-loader',
					options: {
						plugins: function () {
							return [
								require('autoprefixer')({
									"overrideBrowserslist": [
										">0.25%",
										"not dead"
									]
								})
							]
						}
					}
				}, 'less-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10240, // 小于 10240 字节，打包成base64
							esModule: false,
							outputPath:'assets', // 打包好放这个文件夹里面
						}
					}
				],
				exclude: /node_modules/
			},
			{
				test:/.html$/,
				use:'html-withimg-loader',
				exclude: /node_modules/
			},
			{ test: /\.vue$/, loader: 'vue-loader' } 
		]
	},
	resolve:{
		extensions: ['.js', '.vue', '.json'], 	//引入路径是不用写对应的后缀名
	},
	devServer: {
		port: '9999', //默认是8080
		quiet: false, //默认不启用
		inline: true, //默认开启 inline 模式，如果设置为false,开启 iframe 模式
		stats: "errors-only", //终端仅打印 error
		overlay: false, //默认不启用
		clientLogLevel: "silent", //日志等级
		compress: true //是否启用 gzip 压缩
	},
	plugins: [
		new CleanWebpackPlugin(),
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			title: "我是一个webpack demo",
			template:'./plugin/index.html',
			filename: 'index.html', //打包后的文件名
			minify: {
				removeAttributeQuotes: false, //是否删除属性的双引号
				collapseWhitespace: false, //是否折叠空白
			},
		})
	]
}