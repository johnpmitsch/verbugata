module.exports = {
  "extends": ["airbnb-base", "plugin:react/recommended", "plugin:prettier/recommended"],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "prettier/prettier": ["error"],
    "no-console": "off",
    "no-restricted-syntax": "off",
    "no-bitwise": "off",
    "consistent-return": "off",
    "array-callback-return": "off",
    "prefer-destructuring": "off",
    "react/react-in-jsx-scope": "off",
  },
};
