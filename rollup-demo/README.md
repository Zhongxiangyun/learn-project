# Rollup
Rollup 已被许多主流的 JavaScript 库使用，也可用于构建绝大多数应用程序。但是 Rollup 还不支持一些特定的高级功能，尤其是用在构建一些应用程序的时候，特别是代码拆分和运行时态的动态导入 dynamic imports at runtime. 如果你的项目中更需要这些功能，那使用 Webpack可能更符合你的需求。
- [rollupjs](https://www.rollupjs.com/)
## 安装
- [教程](https://www.rollupjs.com/guide/tutorial/#%E5%88%9B%E5%BB%BA%E7%AC%AC%E4%B8%80%E4%B8%AAbundlecreating-your-first-bundle)
```bash
npm init -y
npm install rollup

.\node_modules\.bin\rollup -v

```
- 在`package.json`内，添加运行指令
```js
 "scripts": {
   + "dev": "rollup --config rollup.config.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
然后运行 `npm run dev`;生成`bundle.js`。

## 使用插件(Using plugins)
- [使用插件(Using plugins)](https://www.rollupjs.com/guide/tutorial/#使用插件using-plugins)
```bash
npm install --save-dev rollup-plugin-json
```
（我们用的是 `--save-dev` 而不是 `--save`，因为代码实际执行时不依赖这个插件——只是在打包时使用。）
编辑 `rollup.config.js` 文件，加入 JSON 插件：
```js
// rollup.config.js
import json from 'rollup-plugin-json';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
+  plugins: [ json() ]
};
```
