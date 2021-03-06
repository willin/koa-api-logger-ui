module.exports = {
  root: true,
  extends: [
    'dwing'
  ],
  rules: {
    'no-new': 0,
    'no-bitwise': 0,
    'import/extensions': ['error', 'always', { 'js': 'never', 'vue': 'never' }],
    'import/no-extraneous-dependencies': 0
  }
};
