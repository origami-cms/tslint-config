module.exports = {
    "extends": "tslint-config-airbnb",
    "rules": {
        "ter-indent": [true, 4, {
            "SwitchCase": 1
        }],
        "object-curly-spacing": [false, "never"],
        "import-name": false,
        "trailing-comma": [true, "never"],
        "ter-arrow-parens": [true, "as-needed"],
        "variable-name": [true, "allow-leading-underscore"],
        "object-shorthand-properties-first": false,
        "no-magic-numbers": [
            true, -1, 0, 1, 2, 10, 60, 100, 1000
        ],
        "typedef-whitespace": [
            true,
            {
                "call-signature": "nospace",
                "index-signature": "nospace",
                "parameter": "nospace",
                "property-declaration": "nospace",
                "variable-declaration": "nospace"
            },
            {
                "call-signature": "onespace",
                "index-signature": "onespace",
                "parameter": "onespace",
                "property-declaration": "onespace",
                "variable-declaration": "onespace"
            }
        ],
        "prefer-template": [true, "never"],
        "max-line-length": {
            "severity": "warning",
            "options": [100]
        },
        "align": false,
        "function-name": [
            true,
            {
                'protected-method-regex': /^_?[a-z$][\w\d]+$/,
                "private-method-regex": /^_[a-z$][\w\d]+$/
            }
        ],
        "no-else-after-return": false,
        "no-consecutive-blank-lines": [true, 2]
    },
}
