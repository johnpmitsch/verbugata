module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb-base",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:cypress/recommended"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "prettier/prettier": ["error"],
    "no-console": "off",
    "no-restricted-syntax": "off",
    "no-bitwise": "off",
    "consistent-return": "off",
    "array-callback-return": "off",
    "prefer-destructuring": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-no-undef": "off",
    "lines-between-class-members": "off",
    "no-prototype-builtins": "off",
    "func-names": "off"
  }
};
