module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "jest-styled-components",
    "./jest.setup.js",
  ],
};
