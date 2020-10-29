module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-label-var': 1, //	不允许标签与变量同名
		'no-redeclare': 1, //	禁止多次声明同一变量
		'no-self-assign': 2, // 禁止自身赋值
		'no-delete-var': 2, // 禁止删除变量
		'no-irregular-whitespace': 1, // 禁止不规则的空白
		'no-unused-vars': [
			2,
			{
				vars: 'all',
				args: 'none',
			},
		], //禁止出现未使用的变量
		'no-mixed-spaces-and-tabs': 2, //禁止使用 空格 和 tab 混合缩进
		'array-bracket-spacing': [2, 'never'], // 禁止在数组括号内出现空格
		'brace-style': [
			2,
			'1tbs',
			{
				allowSingleLine: true,
			},
		], //大括号风格
		'comma-dangle': [2, 'never'], //禁止使用拖尾逗号
		'comma-spacing': [
			2,
			{
				before: false,
				after: true,
			},
		], //禁止在逗号前使用空格,要求在逗号后使用一个或多个空格
		'consistent-this': [2, 'that'], //该变量 必须 是指定的别名
		'key-spacing': [
			2,
			{
				beforeColon: false,
				afterColon: true,
			},
		], //强制在对象字面量的键和值之间使用一致的空格
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)',
			],
			env: {
				mocha: true,
			},
		},
	],
}
