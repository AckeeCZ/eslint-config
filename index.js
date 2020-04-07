module.exports = {
  extends: ["react-app"],
  rules: {
    "react-hooks/exhaustive-deps": "off",
    "react/prop-types": [1, { ignore: ["styles", "rules"] }],
    "react/no-unused-prop-types": [
      1,
      {
        customValidators: [],
        skipShapeProps: true,
      },
    ],
  },
};
