module.exports = {
  extends: [
    "eslint:recommended",
    "react-app",
    "plugin:jsx-a11y/recommended",
    "plugin:ramda/recommended",
  ],
  plugins: ["ramda"],
  rules: {
    "react/react-in-jsx-scope": "off",
  },
  globals: {
    React: "writable",
  },
  settings: {
    react: {
      linkComponents: [{ name: "Link", linkAttribute: "href" }],
    },
  },
};
