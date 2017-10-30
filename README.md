ESLint config Ackee
====================

ESLint rules and settings common for Ackee javascript developers.

How to use
----------

Install it `yarn add -D git+ssh://git@gitlab.ack.ee/Web/eslint-config-ackee#master`

> Note: It hasn't been published to NPM registry yet, so we need to install with `git+ssh` protocol, after publish
>  the installation command change become simpler.

Create `.eslintrc` in your project:

```json
{
    "env": {
        "browser": true
    },
    "extends": [
        "ackee"
    ]
}
```

> Note: `env` section is optional, it depends on type of your project.

### Backend

Using few rules differ for frontend and backend. Since backend developers have some specific needs for
setting up the linter, there is backend config that extends base ackee config.

```json
{
    "extends": [
        "ackee/backend"
    ]
}
```

Overriding rules in backend specific config shouldn't be abused and should be kept at minimum.  
**We want to unify code style for backend and frontend as much as possible!**


Dependencies
------------

**Extends**
    
* [eslint-config-airbnb@15](https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v15.1.0/packages/eslint-config-airbnb)

**Uses plugins**

* [eslint-plugin-import@2](https://github.com/benmosher/eslint-plugin-import/tree/v2.7.0)
* [eslint-plugin-jsx-a11y@5](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/v5.1.1)
* [eslint-plugin-react@7](https://github.com/yannickcr/eslint-plugin-react/tree/v7.4.0)

Rules
------

**To discuss**

* [no-shadow](https://eslint.org/docs/rules/no-shadow)
* [object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing)
* [no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions)
* [no-param-reassign](https://eslint.org/docs/rules/no-warning-comments)
* [no-use-before-define](https://eslint.org/docs/rules/no-use-before-define) - JSm:  It's more clear (for us) when you first see what function does and then how it's implemented 
        