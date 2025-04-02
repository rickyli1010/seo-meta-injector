module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js'], // This file should now exist
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
};
