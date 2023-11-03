module.exports = {
	ignoreFiles: ['**/node_modules/**', '**/dist/**'],

	extends: ['stylelint-config-standard', 'stylelint-config-standard-less'],
	plugins: [
		'stylelint-prettier',
		'stylelint-declaration-block-no-ignored-properties',
		'stylelint-order',
		'stylelint-no-unsupported-browser-features',
	],

	defaultSeverity: 'error',

	reportDescriptionlessDisables: true,
	reportInvalidScopeDisables: true,
	reportNeedlessDisables: true,
	configurationComment: 'stylelint', // --> /* stylelint-disable */
	ignoreDisables: true,

	overrides: [
		{
			files: ['**/*.html'],
			extends: ['stylelint-config-html'],
			customSyntax: 'postcss-html',
		},
		{
			files: ['**/*.less'],
			extends: ['stylelint-config-recommended-less'],
			// customSyntax: 'postcss-less',
		},
		{
			files: ['**/*.vue'],
			extends: ['stylelint-config-recommended-vue'],
			rules: {
				'import-notation': 'string',
				'media-query-no-invalid': null, // the rule is only for CSS
			},
		},
	],

	rules: {
		// Stylelint Original Rules
		'declaration-empty-line-before': [
			'always',
			{
				ignore: ['after-comment', 'after-declaration', 'first-nested', 'inside-single-line-block'],
			},
		], // tweaked for 'order/properties-order'

		// PLUGIN Prettier
		'prettier/prettier': true,

		// PLUGIN declaration-block-no-ignored-properties
		'plugin/declaration-block-no-ignored-properties': true,

		// PLUGIN Order
		'order/order': [
			'custom-properties',
			'dollar-variables',
			'at-variables',
			{ type: 'at-rule', name: 'include', hasBlock: false },
			'less-mixins',
			'declarations',
			{ type: 'at-rule', name: 'media' },
			{ type: 'rule', selector: '&::before' },
			{ type: 'rule', selector: '&::after' },
			{ type: 'rule', selector: '&:visited' },
			{ type: 'rule', selector: '&:focus' },
			{ type: 'rule', selector: '&:hover' },
			{ type: 'rule', selector: '&:active' },
			{ type: 'rule', selector: '&:disabled' },
			{ type: 'rule', selector: '&:first-child' },
			{ type: 'rule', selector: '&:last-child' },
			{ type: 'rule', selector: '&:nth-child.+' },
			{ type: 'rule', selector: '^&_' },
			{ type: 'rule', selector: '^.' },
			{ type: 'at-rule', name: 'include', hasBlock: true },
			'at-rules',
		],
		'order/properties-order': [
			{
				groupName: 'display',
				emptyLineBefore: 'always',
				properties: ['display', 'flex-flow', 'flex-direction', 'flex-wrap'],
			},
			{
				groupName: 'position',
				emptyLineBefore: 'always',
				properties: ['position', 'z-index', 'top', 'right', 'bottom', 'left'],
			},

			{
				groupName: 'box-model',
				emptyLineBefore: 'always',
				properties: [
					'width',
					'min-width',
					'max-width',
					'height',
					'min-height',
					'max-height',
					'margin',
					'margin-top',
					'margin-right',
					'margin-bottom',
					'margin-left',
					'padding',
					'padding-top',
					'padding-right',
					'padding-bottom',
					'padding-left',
				],
			},
			{
				groupName: 'Typography',
				emptyLineBefore: 'always',
				properties: [
					'font',
					'font-family',
					'font-size',
					'line-height',
					'font-weight',
					'font-style',
					'src',
					'text-align',
					'color',
					'outline',
				],
			},
			{
				groupName: 'Visual',
				emptyLineBefore: 'always',
				properties: ['background', 'background-color', 'border', 'border-radius', 'opacity'],
			},
			{
				groupName: 'Animation',
				emptyLineBefore: 'always',
				properties: ['transition'],
			},
		],
		'order/properties-alphabetical-order': null,

		// PLUGIN no-unsupported-browser-features
		'plugin/no-unsupported-browser-features': [
			true,
			{
				ignorePartialSupport: true,
			},
		],
	},
};
