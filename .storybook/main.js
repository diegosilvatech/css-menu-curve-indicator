module.exports = {
  stories: ['../src/components/**/stories.tsx', '../src/assets/**/stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-jest',
    '@storybook/addon-a11y'
  ],
  babel: async options => ({
    ...options,
    plugins: [...options.plugins, '@babel/plugin-transform-react-jsx']
  }),
  webpackFinal: config => {
    config.resolve.modules.push(`${process.cwd()}/src`);
    return config;
  }
};
