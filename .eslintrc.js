// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jquery: true,
    mocha: true,
    node: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    // airbnb overrides
    'arrow-body-style': ['off'],
    'arrow-parens': ['off'],
    'comma-dangle': ['error', {
      'arrays': 'only-multiline',
      'objects': 'only-multiline',
      'imports': 'only-multiline',
      'exports': 'only-multiline',
      'functions': 'ignore',
    }],
    'func-names': ['off'],
    'indent': ['error', 2],
    'linebreak-style': ['off', 'unix'],
    'max-len': ['error', {
      code: 100,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    'new-cap': ['error', { 'capIsNewExceptions': ['Router'] }],
    'no-else-return': ['off'],
    'no-trailing-spaces': ['error', { 'skipBlankLines': true }],
    'no-use-before-define': ['off'],
    'object-shorthand': ['error', 'consistent'],
    'prefer-rest-params': ['off'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'strict': ['off'],
  }
};
