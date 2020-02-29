// rollup.config.js
import json from 'rollup-plugin-json';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',//输出文件名
    // file: 'dist.js',//输出文件名
    format: 'cjs',
    name: 'MyBundle'
  },
  plugins: [ json() ]
};
