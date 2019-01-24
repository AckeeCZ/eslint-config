![ackee|eslint-config-ackee](assets/ackee_git_fronted_eslint.png)

# [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/AckeeCZ/eslint-config-ackee/blob/master/LICENSE) [![CI Status](https://img.shields.io/travis/com/AckeeCZ/eslint-config-ackee.svg?style=flat)](https://travis-ci.com/AckeeCZ/eslint-config-ackee) [![Dependency Status](https://img.shields.io/david/AckeeCZ/eslint-config-ackee.svg?style=flat-square)](https://david-dm.org/AckeeCZ/eslint-config-ackee)

# ESLint config Ackee

ESLint rules and settings common for Ackee javascript developers.

## Table of contents

-   [How to use](#how-to-use)
    -   [Backend](#backend)
-   [Dependencies](#dependencies)
-   [Rules](#rules)

---

## <a name="how-to-use"></a>How to use

Install it `yarn add -D eslint-config-ackee`

Create `.eslintrc` in your project:

```json
{
    "env": {
        "browser": true
    },
    "extends": ["ackee"]
}
```

> Note: `env` section is optional, it depends on type of your project.

### <a name="backend"></a>Backend

Using few rules differ for frontend and backend. Since backend developers have some specific needs for
setting up the linter, there is backend config that extends base ackee config.

```json
{
    "extends": ["ackee/backend"]
}
```

Overriding rules in backend specific config shouldn't be abused and should be kept at minimum.  
**We want to unify code style for backend and frontend as much as possible!**

## <a name="dependencies"></a>Dependencies

**Extends**

-   [eslint-config-airbnb@15](https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v15.1.0/packages/eslint-config-airbnb)

**Uses plugins**

-   [eslint-plugin-import@2](https://github.com/benmosher/eslint-plugin-import/tree/v2.7.0)
-   [eslint-plugin-jsx-a11y@5](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/v5.1.1)
-   [eslint-plugin-react@7](https://github.com/yannickcr/eslint-plugin-react/tree/v7.4.0)

## <a name="rules"></a>Rules

**To discuss**

You can find current rules to discuss at [github issues](https://github.com/AckeeCZ/eslint-config-ackee/issues) page.
