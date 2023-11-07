module.exports = function babelConfig(api) {
	api.cache(true);

	const presets = [
		[
			'@babel/preset-env',
			{
				useBuiltIns: 'usage',
				corejs: '3.33',
			},
		],
	];

	return {
		presets,
		plugins: [],
	};
};
