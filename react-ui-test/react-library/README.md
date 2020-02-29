# 初始化 项目
```bash
npm init -y
npm i -D rollup-plugin-babel rollup @babel/core @babel/cli @babel/preset-env @babel/preset-react @emotion/babel-preset-css-prop

yarn link

yarn link "react-library"
yarn info "react-library"   #检查该npm包 是否 发布
```
`@emotion/core` css
 `framer-motion` 动画库

 发布npm包的时候，`npm publish`或者`yarn publish`的时候，如果报错 401 记得将镜像源，切回`https://registry.npmjs.org/`,即可。