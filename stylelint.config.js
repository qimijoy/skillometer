module.exports = {
	ignoreFiles: ['**/node_modules/**', '**/dist/**'],

	extends: ['stylelint-config-standard'],
	plugins: ['stylelint-order'],

	defaultSeverity: 'error',

	reportDescriptionlessDisables: true,
	reportInvalidScopeDisables: true,
	reportNeedlessDisables: true,
	configurationComment: 'stylelint', // --> /* stylelint-disable */
	ignoreDisables: true,

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
