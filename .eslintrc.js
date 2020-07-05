module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb'],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    }
  },
  plugins: ["react", "jsx-a11y", "import"],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "react/require-default-props": "off",
    "react/forbid-prop-types": "off",
    "react/prop-types": "off",
    "comma-dangle": "off",
    "arrow-parens": "off",
    "no-underscore-dangle": "off",
    "no-nested-ternary": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-props-no-spreading": "off",
    "implicit-arrow-linebreak": "off",
    "react-native/no-inline-styles": "off",
    "prettier/prettier": "off",
  }
};
