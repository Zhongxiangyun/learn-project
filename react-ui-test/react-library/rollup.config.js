// rollup.config.js
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: './lib/bundle.js', //输出文件名
    // file: 'dist.js',//输出文件名
    format: 'cjs',
    name: 'MyBundle',
  },
  plugins: [babel ()],
  external: ['react'],
};
