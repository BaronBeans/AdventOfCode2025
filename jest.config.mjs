export default {
  // Test environment
  testEnvironment: 'node',
  
  // Look for test files in solutions directory
  testMatch: [
    '**/solutions/**/*.test.ts',
    '**/solutions/**/*.test.tsx',
    '**/solutions/**/*.spec.ts',
    '**/solutions/**/*.spec.tsx',
  ],
  
  // Also include files that match the pattern anywhere in solutions
  roots: ['<rootDir>/solutions'],
  
  // TypeScript support
  preset: 'ts-jest/presets/default-esm',
  
  // Module handling for ESM
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  
  // Transform TypeScript files
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      useESM: true,
      tsconfig: {
        module: 'ESNext',
        moduleResolution: 'node16',
        verbatimModuleSyntax: false,
        esModuleInterop: true,
        allowSyntheticDefaultImports: true,
      },
    }],
  },
  
  // Coverage (optional)
  collectCoverageFrom: [
    'solutions/**/*.{ts,tsx}',
    '!solutions/**/*.test.{ts,tsx}',
    '!solutions/**/*.spec.{ts,tsx}',
  ],
};
