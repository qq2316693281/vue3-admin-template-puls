const path = require('path')
const resolve = (dir) => {
	return path.join(__dirname, dir)
}

module.exports = {
	publicPath: './',
	outputDir: 'dist',
	//打包后静态资源文件名称
	assetsDir: 'static',
	chainWebpack: (config) => {
		config.resolve.alias.set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
	},
	devServer: {
		host: '192.168.1.122',
		port: 8080,
		https: false, //默认是http服务，如果使用的是https设置为true
		hot: true, //启用热更新
		hotOnly: true, //启用热更新备选方案
		open: true //配置自动启动浏览器
	},
	css: {
		loaderOptions: {
			less: {
				javascriptEnabled: true
			}
		}
	}
}
