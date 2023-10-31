module.exports = {
	ignoreFiles: ['**/dist/**'],
	extends: ['stylelint-config-standard'],
	plugins: ['stylelint-order'],
	defaultSeverity: 'error',
	rules: {
		'order/order': ['custom-properties', 'declarations'],
		'order/properties-order': ['width', 'height'],
	},
	overrides: [
		{
			files: ['**/*.less'],
			extends: ['stylelint-config-standard-less'],
		},
	],
};
