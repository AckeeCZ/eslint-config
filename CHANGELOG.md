# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2.3.0 - 2020-08-31

- Upgrade `eslint-plugin-react-hooks` to `4.x`
- Remove rule for `react-hooks/exhaustive-deps`

## 2.2.0 - 2020-07-22

- Merge in rules from v1.x.

## 2.1.0 - 2020-04-21

- Added new rules to the config
  - `no-console`
  - `react/no-unused-prop-types`
  - `react/prop-types`
- Added `eslint-plugin-import` and related rules

## 2.0.0 - 2020-03-31

Complete structure redesign. The one and only source is `eslint-config-react-app`. `@ackee/eslint-config` is extended from that, then only follow a few custom rules.

## 1.0.0 - 2019-08-12

### Updated

- Ugprade `eslint-config-airbnb` to `18.x`.
- Rename package name: `eslint-config-ackee` -> `@ackee/eslint-config`.
