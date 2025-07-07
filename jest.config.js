module.exports = {
  preset: 'ts-jest',
  collectCoverageFrom: ['packages/*/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  coveragePathIgnorePatterns: [
    'packages/spider-utils/src/formatters/reserve/index.ts',
    'packages/spider-utils/src/formatters/emode/index.ts',
    'packages/spider-utils/src/formatters/incentive/',
  ],
  modulePathIgnorePatterns: ['node_modules'],
  testEnvironment: 'node',
  verbose: true,
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
