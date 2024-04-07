/* eslint @stylistic/js/quote-props: ['error', 'consistent-as-needed'] */
/* eslint-disable max-lines */

import eslintJs from '@eslint/js'
import stylisticJs from '@stylistic/eslint-plugin-js'
import stylisticMigrate from '@stylistic/eslint-plugin-migrate'
import stylisticPlus from '@stylistic/eslint-plugin-plus'

export default {
	languageOptions: {
		ecmaVersion: 'latest',
	},
	ignores: [
		'.pnp.*',
		'.yarn/**',
	],
	plugins: {
		'@stylistic/js': stylisticJs,
		'@stylistic/migrate': stylisticMigrate,
		'@stylistic/plus': stylisticPlus,
	},
	rules: {
		...eslintJs.configs.all.rules,

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
				varsIgnorePattern: '^_',
				argsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_',
				destructuredArrayIgnorePattern: '^_',
				reportUsedIgnorePattern: true,
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

		// @stylistic/js
		...stylisticJs.configs['all-flat'].rules,
		'@stylistic/js/array-bracket-newline': [
			'error',
			'consistent',
		],
		'@stylistic/js/array-element-newline': [
			'error',
			'consistent',
		],
		'@stylistic/js/arrow-parens': [
			'error',
			'as-needed',
			{
				requireForBlockBody: true,
			},
		],
		'@stylistic/js/comma-dangle': [
			'error',
			'always-multiline',
		],
		'@stylistic/js/dot-location': [
			'error',
			'property',
		],
		'@stylistic/js/function-call-argument-newline': [
			'error',
			'consistent',
		],
		'@stylistic/js/function-paren-newline': [
			'error',
			'multiline-arguments',
		],
		'@stylistic/js/generator-star-spacing': [
			'error',
			{
				before: false,
				after: true,
				anonymous: 'neither',
				method: 'both',
			},
		],
		'@stylistic/js/indent': [
			'error',
			'tab',
			{
				SwitchCase: 1,
			},
		],
		'line-comment-position': 'off',
		'@stylistic/js/linebreak-style': [
			'error',
			'unix',
		],
		'@stylistic/js/lines-around-comment': [
			'error',
			{
				afterHashbangComment: true,
			},
		],
		'@stylistic/js/lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true,
			},
		],
		'@stylistic/js/max-len': 'off',
		'@stylistic/js/multiline-ternary': [
			'error',
			'never',
		],
		'@stylistic/js/new-parens': [
			'error',
			'never',
		],
		'@stylistic/js/newline-per-chained-call': 'off',
		'@stylistic/js/no-confusing-arrow': [
			'error',
			{
				onlyOneSimpleParam: true,
			},
		],
		'@stylistic/js/no-extra-parens': [
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
		'@stylistic/js/no-multiple-empty-lines': [
			'error',
			{
				max: 1,
			},
		],
		'@stylistic/js/no-tabs': [
			'error',
			{
				allowIndentationTabs: true,
			},
		],
		'@stylistic/js/object-curly-spacing': [
			'error',
			'always',
		],
		'@stylistic/js/object-property-newline': [
			'error',
			{
				allowAllPropertiesOnSameLine: true,
			},
		],
		'@stylistic/js/one-var-declaration-per-line': 'off',
		'@stylistic/js/operator-linebreak': [
			'error',
			'before',
			{
				overrides: {
					'=': 'after',
				},
			},
		],
		'@stylistic/js/padded-blocks': [
			'error',
			'never',
		],
		'@stylistic/js/padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: 'directive', next: '*' },
			{ blankLine: 'any', prev: 'directive', next: 'directive' },
		],
		'@stylistic/js/quote-props': [
			'error',
			'as-needed',
		],
		'@stylistic/js/quotes': [
			'error',
			'single',
			{
				avoidEscape: true,
			},
		],
		'@stylistic/js/semi': [
			'error',
			'never',
		],
		'@stylistic/js/space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				named: 'never',
			},
		],
		'@stylistic/js/spaced-comment': [
			'error',
			'always',
			{
				block: {
					balanced: true,
				},
			},
		],
		'@stylistic/js/wrap-iife': [
			'error',
			'inside',
			{
				functionPrototypeMethods: true,
			},
		],
		'@stylistic/js/wrap-regex': 'off',

		// @stylistic/migrate
		'@stylistic/migrate/migrate': 'error',

		// @stylistic/plus
		'@stylistic/plus/indent-binary-ops': [
			'error',
			'tab',
		],
	},
}
