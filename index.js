module.exports = {
  extends: ["react-app", "plugin:import/errors"],
  rules: {
    "react-hooks/exhaustive-deps": "off",
    "react/prop-types": ["warn", { ignore: ["styles", "rules"] }],
    "react/no-unused-prop-types": [
      "warn",
      {
        customValidators: [],
        skipShapeProps: true,
      },
    ],
    "no-console": "warn",
  },
};
