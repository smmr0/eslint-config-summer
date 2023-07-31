/* eslint quote-props: ['error', 'consistent-as-needed'] */
/* eslint-disable max-lines */

import js from '@eslint/js'

export default {
	languageOptions: {
		ecmaVersion: 'latest',
	},
	linterOptions: {
		reportUnusedDisableDirectives: true,
	},
	ignores: [
		'.pnp.*',
		'.yarn/**',
	],
	rules: {
		...js.configs.all.rules,

		// Possible problems
		'array-callback-return': [
			'error',
			{
				checkForEach: true,
			},
		],
		'no-cond-assign': [
			'error',
			'always',
		],
		'no-inner-declarations': [
			'error',
			'both',
		],
		'no-irregular-whitespace': [
			'error',
			{
				skipStrings: false,
			},
		],
		'no-undef': [
			'error',
			{
				typeof: true,
			},
		],
		'no-unsafe-negation': [
			'error',
			{
				enforceForOrderingRelations: true,
			},
		],
		'no-unsafe-optional-chaining': [
			'error',
			{
				disallowArithmeticOperators: true,
			},
		],
		'no-unused-vars': [
			'error',
			{
				args: 'all',
				caughtErrors: 'all',
				varsIgnorePattern: '^_',
				argsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_',
				destructuredArrayIgnorePattern: '^_',
			},
		],
		'use-isnan': [
			'error',
			{
				enforceForIndexOf: true,
			},
		],
		'valid-typeof': [
			'error',
			{
				requireStringLiterals: true,
			},
		],

		// Suggestions
		'capitalized-comments': 'off',
		'consistent-return': [
			'error',
			{
				treatUndefinedAsUnspecified: true,
			},
		],
		'curly': [
			'error',
			'multi-line',
			'consistent',
		],
		'default-case': 'off',
		'eqeqeq': [
			'error',
			'always',
			{
				null: 'ignore',
			},
		],
		'func-name-matching': [
			'error',
			{
				considerPropertyDescriptor: true,
			},
		],
		'func-names': [
			'error',
			'as-needed',
		],
		'func-style': [
			'error',
			'declaration',
			{
				allowArrowFunctions: true,
			},
		],
		'grouped-accessor-pairs': [
			'error',
			'getBeforeSet',
		],
		'init-declarations': 'off',
		'logical-assignment-operators': [
			'error',
			'always',
			{
				enforceForIfStatements: true,
			},
		],
		'max-classes-per-file': [
			'error',
			{
				ignoreExpressions: true,
			},
		],
		'multiline-comment-style': [
			'error',
			'separate-lines',
		],
		'no-confusing-arrow': [
			'error',
			{
				onlyOneSimpleParam: true,
			},
		],
		'no-continue': 'off',
		'no-eq-null': 'off',
		'no-extra-boolean-cast': [
			'error',
			{
				enforceForLogicalOperands: true,
			},
		],
		'no-implicit-coercion': [
			'error',
			{
				disallowTemplateShorthand: true,
			},
		],
		'no-inline-comments': 'off',
		'no-labels': 'off',
		'no-magic-numbers': 'off',
		'no-param-reassign': [
			'error',
			{
				props: true,
			},
		],
		'no-return-assign': [
			'error',
			'always',
		],
		'no-shadow': [
			'error',
			{
				builtinGlobals: true,
				hoist: 'all',
			},
		],
		'no-ternary': 'off',
		'no-undefined': 'off',
		'no-unneeded-ternary': [
			'error',
			{
				defaultAssignment: false,
			},
		],
		'object-shorthand': [
			'error',
			'always',
			{
				avoidExplicitReturnArrows: true,
			},
		],
		'one-var': [
			'error',
			'never',
		],
		'one-var-declaration-per-line': 'off',
		'prefer-const': [
			'error',
			{
				destructuring: 'all',
				ignoreReadBeforeAssign: true,
			},
		],
		'prefer-named-capture-group': 'off',
		'prefer-regex-literals': [
			'error',
			{
				disallowRedundantWrapping: true,
			},
		],
		'quote-props': [
			'error',
			'as-needed',
		],
		'radix': [
			'error',
			'as-needed',
		],
		'sort-imports': [
			'error',
			{
				ignoreDeclarationSort: true,
				allowSeparatedGroups: true,
			},
		],
		'sort-keys': 'off',
		'sort-vars': 'off',
		'spaced-comment': [
			'error',
			'always',
			{
				block: {
					balanced: true,
				},
			},
		],

		// Layout & Formatting
		'array-bracket-newline': [
			'error',
			'consistent',
		],
		'array-element-newline': [
			'error',
			'consistent',
		],
		'arrow-parens': [
			'error',
			'as-needed',
			{
				requireForBlockBody: true,
			},
		],
		'comma-dangle': [
			'error',
			'always-multiline',
		],
		'dot-location': [
			'error',
			'property',
		],
		'function-call-argument-newline': [
			'error',
			'consistent',
		],
		'function-paren-newline': [
			'error',
			'multiline-arguments',
		],
		'generator-star-spacing': [
			'error',
			{
				before: false,
				after: true,
				anonymous: 'neither',
				method: 'both',
			},
		],
		'indent': [
			'error',
			'tab',
			{
				SwitchCase: 1,
			},
		],
		'line-comment-position': 'off',
		'linebreak-style': [
			'error',
			'unix',
		],
		'lines-around-comment': [
			'error',
			{
				afterHashbangComment: true,
			},
		],
		'lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true,
			},
		],
		'max-len': 'off',
		'multiline-ternary': [
			'error',
			'never',
		],
		'new-parens': [
			'error',
			'never',
		],
		'newline-per-chained-call': 'off',
		'no-extra-parens': [
			'error',
			'all',
			{
				nestedBinaryExpressions: false,
				ternaryOperandBinaryExpressions: false,
				enforceForArrowConditionals: false,
				enforceForNewInMemberExpressions: false,
				enforceForFunctionPrototypeMethods: false,
			},
		],
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1,
			},
		],
		'no-tabs': [
			'error',
			{
				allowIndentationTabs: true,
			},
		],
		'object-curly-spacing': [
			'error',
			'always',
		],
		'object-property-newline': [
			'error',
			{
				allowAllPropertiesOnSameLine: true,
			},
		],
		'operator-linebreak': [
			'error',
			'before',
			{
				overrides: {
					'=': 'after',
				},
			},
		],
		'padded-blocks': [
			'error',
			'never',
		],
		'padding-line-between-statements': [
			'error',

			{ blankLine: 'always', prev: 'directive', next: '*' },
			{ blankLine: 'any', prev: 'directive', next: 'directive' },
		],
		'quotes': [
			'error',
			'single',
			{
				avoidEscape: true,
			},
		],
		'semi': [
			'error',
			'never',
		],
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				named: 'never',
			},
		],
		'wrap-iife': [
			'error',
			'inside',
			{
				functionPrototypeMethods: true,
			},
		],
		'wrap-regex': 'off',
	},
}
