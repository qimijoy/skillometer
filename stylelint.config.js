module.exports = {
	ignoreFiles: ['**/node_modules/**', '**/dist/**'],

	extends: ['stylelint-config-standard'],
	plugins: ['stylelint-prettier', 'stylelint-declaration-block-no-ignored-properties', 'stylelint-order'],

	defaultSeverity: 'error',

	reportDescriptionlessDisables: true,
	reportInvalidScopeDisables: true,
	reportNeedlessDisables: true,
	configurationComment: 'stylelint', // --> /* stylelint-disable */
	ignoreDisables: true,

	overrides: [
		{
			files: ['**/*.less'],
			extends: ['stylelint-config-standard-less'],
		},

		{
			files: ['*.vue', '**/*.vue'],
			extends: 'stylelint-config-recommended-vue',
			rules: {
				'import-notation': 'string',
				'media-query-no-invalid': null, // the rule is only for CSS
			},
		},
	],

	rules: {
		// Stylelint Original Rules
		'declaration-empty-line-before': null, // disabled because of 'order/properties-order'

		// PLUGIN Prettier
		'prettier/prettier': true,

		// PLUGIN declaration-block-no-ignored-properties
		'plugin/declaration-block-no-ignored-properties': true,

		// Plugin Order
		'order/order': [
			'custom-properties',
			'dollar-variables',
			{ type: 'at-rule', name: 'include', hasBlock: false },
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
				groupName: 'dimensions',
				emptyLineBefore: 'always',
				properties: ['width', 'min-width', 'max-width', 'height', 'min-height', 'max-height'],
			},
			{
				groupName: 'box-model',
				emptyLineBefore: 'always',
				properties: [
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
				groupName: 'font',
				emptyLineBefore: 'always',
				properties: ['font-family', 'font-size', 'font-weight', 'font-style', 'src'],
			},
		],
		'order/properties-alphabetical-order': null,
	},
};
