module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
  transform: {"\\.[jt]sx?$": "babel-jest"}
};