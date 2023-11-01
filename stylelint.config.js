module.exports = {
	ignoreFiles: ['**/node_modules/**', '**/dist/**'],

	extends: ['stylelint-config-standard'],
	plugins: ['stylelint-order', 'stylelint-prettier'],

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
				'media-query-no-invalid': null, // только для CSS
			},
		},
	],

	rules: {
		'declaration-empty-line-before': null, // для совместимости с 'order/properties-order'

		// Nesting order
		// 1. Media
		// 2. Pseudo-elements
		// 3. Pseudo-classes
		// 4. BEM-element & BEM-modifier
		// 6. Nesting
		'order/order': [
			'declarations',
			{
				type: 'at-rule',
				name: 'media',
			},
			{
				type: 'rule',
				selector: '^&::(before|after)',
			},
			{
				type: 'rule',
				selector: '^&:\\w',
			},
			{
				type: 'rule',
				selector: '^&_',
			},
			{
				type: 'rule',
				selector: '^.',
			},
		],
		'order/properties-order': [
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

		'prettier/prettier': true,
	},
};
