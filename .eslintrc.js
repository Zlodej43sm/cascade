module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // http://eslint.org/docs/rules/
    "max-len": "off",
    "object-curly-newline": "off",

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],

    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    "react/jsx-props-no-spreading": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": ["error", { "ignoreFunctionalComponents": true }],
    "react/button-has-type": "off",
  }
};
