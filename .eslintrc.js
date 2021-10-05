module.exports = {
  root: true,
  extends: ["eslint:recommended", "prettier"],
  globals: {
    __DEV__: false,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  rules: {
    // avoid loose comparisons
    eqeqeq: ["error", "smart"],
    "no-alert": 2,
    "no-case-declarations": "off",
    "no-console": 2,
    // don't warn about unused function parameters
    "no-unused-vars": ["error", { args: "none" }],
    "valid-jsdoc": [
      "warn",
      {
        requireParamDescription: false,
        requireReturn: false,
        requireReturnDescription: false,
      },
    ],
  },
};
