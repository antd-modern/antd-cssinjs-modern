import { defineConfig } from 'father';

export default defineConfig({
  plugins: ['@rc-component/father-plugin'],
  targets: {
    chrome: 86
  },
  umd: {
    name: 'antdCssinjs',
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
});
