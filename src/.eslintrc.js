module.exports = {
  root: true,
  extends: [
    'dwing',
    'plugin:vue/recommended'
  ],
  rules: {
    'no-new': 0,
    'no-bitwise': 0,
    'import/extensions': ['error', 'always', { 'js': 'never', 'vue': 'never' }],
    'import/no-extraneous-dependencies': 0
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './config/base.js'
      }
    }
  }
};
