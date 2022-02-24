module.exports = {
  extends: '@learn-bit-react/configs.typescript/tsconfig.json',
  compilerOptions: {
    baseUrl: 'src' // Lets you set a base directory to resolve non-absolute module names.
  },
  include: [
    'src/**/*' // *** The files TypeScript should type check ***
  ],
  exclude: ['node_modules', 'dist'] // *** The files to not type check ***
};
