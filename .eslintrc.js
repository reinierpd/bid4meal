const path = require("path");

module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "max-len": [2, { code: 80, ignorePattern: "^import\\W.*" }],
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: true, packageDir: "./" }
    ]
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  settings: {
    "import/resolver": {
      node: {
        paths: [path.resolve(__dirname, "src")]
      }
    }
  }
};
