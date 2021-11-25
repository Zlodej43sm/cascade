module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleNameMapper: {
    '\\.(jpg|gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.ts',
    '\\.(css|styl|less|sass|scss)$': '<rootDir>/__mocks__/cssModuleMock.ts',
    '^lib/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleFileExtensions: ['json', 'js', 'ts', 'tsx'],
  testPathIgnorePatterns: [
    '<rootDir>/.undodir/'
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    // Excluding coverage from:
    '!**/custom.d.ts',
    '!**/utils/mobx-config.ts',
    '!**/index.tsx',
    '!**/node_modules/**',
    '!**/stories/**'
  ],
  coverageDirectory: '<rootDir>/.coverage/'
};
