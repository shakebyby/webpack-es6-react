/**
	2017-02-16 sfzy
**/
var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry : {
		index : [
			'webpack-dev-server/client?http://localhost:5000',
            'webpack/hot/only-dev-server',
            './js/entry.js'
		]
	},
	//入口文件输出配置
	output : {
		path: __dirname + '/assets/',
        filename: 'bundle.js'
	},
	module: {
        //加载器配置
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                loader: 'jsx-loader?harmony'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.js|jsx$/,
                loaders: ['react-hot-loader', 'babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0'],
                include: path.join(__dirname, 'js')
            }
        ]
    },
    //其它解决方案配置
    resolve: {
        extensions: ['.js', '.json', '.scss']
    },
    //插件项
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    
    devServer: {
    	quite: false,
    	noInfo: false,
    	stats: {
      		assets: false,
      		colors: true,
      		version: false,
      		timings: false,
      		chunks: false,
      		chunkModules: false
    	}
    }
}