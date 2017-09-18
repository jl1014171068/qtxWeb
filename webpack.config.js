const path = require('path'),
	webpack = require('webpack');

/*
 * verify config
 * （验证config文件是否正确）
 * */

//插件列表
// npm install clean-webpack-plugin extract-text-webpack-plugin webpack-merge autoprefixer style-loader css-loader node-sass sass-loader babel-loader babel-core babel-preset-env --save-dev

//插件声明
const CleanWebpackPlugin = require('clean-webpack-plugin'), //清空发布目录
	ExtractTextPlugin = require("extract-text-webpack-plugin"), //css 提取
	Merge = require('webpack-merge'), //代码合并
	precss = require('precss'),
	autoprefixer = require('autoprefixer'); //添加浏览器前缀

const PATHS = {
	publicPath: '/yinuovip/dist/',
	libsPath: path.resolve(process.cwd(), './libs'),
	srcPath: path.resolve(process.cwd(), 'src'),
	node_modulesPath: path.resolve('./node_modules')
};

const entry = {
	main: './src/script/main.js'
};

const output = {
	path: path.resolve(__dirname, 'dist'),
	publicPath: PATHS.publicPath,
	filename: 'script/[name].js',
	chunkFilename: 'script/[name].js'
};

const loaders = [{
		test: /\.css$/,
		use: ExtractTextPlugin.extract({
			fallback: 'style-loader',
			use: [

				{
					loader: 'css-loader',
					options: {
						importLoaders: 1,
					}
				},
				{
					loader: 'postcss-loader'
				}
			]
		})
	},
	{
		test: /\.scss$/,
		use: ExtractTextPlugin.extract({
			fallback: [{
				loader: 'style-loader',
			}],
			use: [{
					loader: 'css-loader',
				},
				{
					loader: 'sass-loader'
				},
				{
					loader: 'postcss-loader'
				}
			]
		})
	},
	{
		test: /\.js$/,
		exclude: /(node_modules|bower_components)/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['env']
			}
		}
	},
	{
		test: /\.(eot|woff|woff2|ttf|svg)/,

		exclude: /(node_modules|bower_components)/,
		use: {
			loader: 'url-loader',
			options: {
				limit: 5000,
				name: '/font/[name].[ext]'
			}
		}
	},
	{
		test: /\.(png|jpg|gif)$/,
		use: [{
			loader: 'url-loader',
			options: {
				limit: 8192
			}
		}]
	}
];

const plugins = [
	/*
	 * extract css
	 * （提取css文件到单独的文件中）
	 */
	new ExtractTextPlugin("css/[name].css", {
		allChunks: true
	}),

	/*
	 * Using this config the vendor chunk should not be changing its hash unless you change its code or dependencies
	 * （避免在文件不改变的情况下hash值不变化）
	 * */
	new webpack.optimize.OccurrenceOrderPlugin(),
	/*
	 *  Module (value) is loaded when the identifier (key) is used as free variable in a module
	 *  （如：使用jquery 可以直接使用符号 "$"）
	 * */
	new webpack.ProvidePlugin({
		$: "jquery",
		jQuery: "jquery",
		"window.jQuery": "jquery"
	}),
	/*
	 * clean publishing directory
	 * （发布前清空发布目录）
	 * */
	new CleanWebpackPlugin(['dist'], {
		root: '',
		verbose: true,
		dry: false
	}),
	new webpack.LoaderOptionsPlugin({ //浏览器加前缀
		options: {
			postcss: [require('autoprefixer')({ browsers: ['last 5 versions'] })]
		}
	})
];

const config = {
	entry: entry,
	output: output,
	module: {
		rules: loaders,
	},
	plugins: plugins,
	resolveLoader: {
		moduleExtensions: ["-loader"]
	}
};

module.exports = config;