module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": ["error", "tab"],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "no-console": ["warn", { allow: ["warn", "error"] }],
        "curly": "error",
        "brace-style": ["error", "1tbs", {"allowSingleLine": true}],
        "keyword-spacing": "error",
        "no-trailing-spaces": "error",
        "comma-dangle": ["error", "always-multiline"],
        "no-trailing-spaces": "error",
        "eol-last": "error",
    },
};
