const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = {
	plugins: [
		new CompressionPlugin({
			algorithm: 'gzip',
		}),
		// new BrotliPlugin({
		// 	asset: '[path].br[query]',
		// 	test: /\.(js|css|html|svg)$/,
		// 	threshold: 10240,
		// 	minRatio: 0.8
		// }),
	],
	// globalObject: `typeof self !== 'undefined' ? self : this`
};
