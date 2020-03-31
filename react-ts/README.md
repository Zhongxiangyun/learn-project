This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## 安装

```bash
npx create-react-app my-app --template typescript
# or
yarn create react-app my-app --template typescript

yarn
# or
npm i
# 添加路由
npm install --save react-router-dom
# 暴露路由
yarn run eject

# 支持less
npm install less-loader less --save
```
## 支持less
`yarn run eject`之后，安装less模块`npm install less-loader less --save`
在根目录下`config\webpack.config.js`内找到加入如下代码
![image.png](https://i.loli.net/2020/03/05/CayIKAHfeWrXLtN.png)
```js
// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

+ const lessRegex = /\.less$/;
+ const lessModuleRegex = /\.module\.less$/;
```
在 大约350行左右，找到`oneOf`的数组，在sass模块下，加入如下 less规则。并将`importLoaders: 3`中的3改为2

```js
 {
              test: lessRegex,
              exclude: lessModuleRegex,
              use: getStyleLoaders(
                {
                  // importLoaders: 3,
                  importLoaders: 2,
                  sourceMap: isEnvProduction && shouldUseSourceMap,
                },
                'less-loader'
              ),
              sideEffects: true,
            },
            {
              test: lessModuleRegex,
              use: getStyleLoaders(
                {
                  // importLoaders: 3,
                  importLoaders: 2,
                  sourceMap: isEnvProduction && shouldUseSourceMap,
                  modules: {
                    getLocalIdent: getCSSModuleLocalIdent,
                  },
                },
                'less-loader'
              ),
            },
```
![less](https://i.loli.net/2020/03/05/RSLznh92xbQGsqk.png)

## 安装 antd
- [antd design](https://ant.design/docs/react/introduce-cn)
```bash
# 安装antd
npm install antd --save
# 安装 按需加载 
npm install babel-plugin-import --save-dev
```
在`package.json`添加配置
```json
  "babel": {
    "presets": [
      "react-app"
    ],
+    "plugins": [
+      ["import", {
+        "libraryName": "antd",
+        "libraryDirectory": "es",
+        "style": "css" 
+      }]
+    ]
  }
}
```

#### 按需加载
```bash
npm install babel-plugin-import --save-dev
```
- [分包加载](https://segmentfault.com/a/1190000010067597)

## router 页面布局

#### 安装路由
```bash
npm i react-router-dom
npm install --save-dev  @types/react @types/react-dom @types/react-router-dom
```
- [react-router-dom](https://reacttraining.com/react-router/core/guides/quick-start)
做成后台公共组件的形式，需要把 登录页面 和 错误页面暴露出去；这时候遇到问题，两种解决方案。
1. 将404、500等报错页面放到公共组件下面。
2. 每个路由包一层layout，单独放 login 和 404、500等报错页面。

#### 使用withRouter 报错
一个资深大神给的建议：说 mobx 和 react-router-dom 这两个包不兼容的时候，使用any；就可以了。如下：
```
@(withRouter as any)
```

#### antd 4.x 版本icon 变成按需引入
antd 4.x 版本icon 变成按需引入，icon不能一次全部加载进去，下面 是解决方案。
- [icon](https://www.npmjs.com/package/@ant-design/icons-react)

## 安装 mobx
-----------
使用Mobx作为app状态管理方案
#### 记得安装 `MobX Developer Tools`
mobx 开发 谷歌插件
- [https://cn.mobx.js.org/](https://cn.mobx.js.org/)
```bash
npm install --save mobx mobx-react
# 安装 装饰器 将 class或者object 转成 ES5
npm install --save-dev @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators

npm install babel-plugin-transform-class-properties -D

npm install --save-dev babel-plugin-transform-decorators-legacy

```
并在tsconfig.json中加入一行配置来使ts支持装饰器语法：
```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```
#### Mobx 用法示例
1. 在`src`下建立`stores`文件夹。并依次建立`detail.ts`，`index.ts`。
``` 
reatc-example
├── src
│   ├── stores
│   │   │── detail.ts
│   │   └── index.ts
│   └── index.tsx
├── config
│   └── webpack.config.js
└── package.json
```
2. `detail.ts`文件
```js
//detail.ts
import { action, observable } from 'mobx'

interface Cat {
    name: string;
    age?: number | string;
    color?: string;
}
export default class DetailStore {

    @observable name: string = 'Clint'
    @observable arr: Cat[] = []

    constructor(initialState: any = { name: 'detail-store', arr: [{ name: 'Tom', color: 'red' },{ name: 'Jerry',age:'3', color: 'blue' }] }) {
        this.name = initialState.name;
        this.arr = initialState.arr;
    }

    @action
    public setName = (name: string) => {
        this.name = name
    }
    public changeArray = (item: Cat) => {
        this.arr.push(item)
    }
}
```
3. `index.ts`文件,store的初始化
```js
//index.ts
import HomeStore from './home'
import DetailStore from './detail'

export default {
    homeStore: new HomeStore(),
    detailStore: new DetailStore(),
}
```
4. 配置Provider 在`src/index.tsx` 下
```js
// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'

import Router from './router/router';
// import './index.css';
import stores from './stores/index';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider {...stores}>
        <Router />
    </Provider>,
    document.getElementById('root'));
```
5. 使用store
**注意**这里 在react 中，会用到装饰器，而装饰器写法只能在 class 类组件中使用。而 函数式组件 只能 使用嵌套的方式。
一、 第一种 class 组件中。
```js
// home.tsx
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';
import { observer, inject } from 'mobx-react'
import homeStore from '../../stores/home'
import './home.less';
type IProps = {
    homeStore: homeStore
    errors?: string
}
@inject('homeStore')
@observer
class Home extends Component<IProps> {
    private clickHandler = (): void => {
        // const { homeStore } = this.props;
        // homeStore.setName("Bob");
        const {setName}=this.props.homeStore
        setName("Bob666")
    }

    render() {
        return (
            <div className="home">
                <h1 className='home-item'>Home</h1>
                <h2>{this.props.homeStore.name}</h2>
                <Link to='/detail'>详情</Link>
                <Link to='/login'>登录</Link>
                <Button onClick={this.clickHandler} type="primary">改名字</Button>
            </div>
        )
    }
};
export default Home;
```
【注意】如果 在store 里面,声明的 action 函数，不是用的 => 函数，可能出现`this`指向问题。如下面的例子：
```js
/**
 * 第一种
*/
// store 中
  @action
  public setName(name: string) {
    // 没有使用 箭头函数
    this.name = name
  }
  // 使用
  private clickHandler = (): void => {
        const {setName}=this.props.homeStore
        setName("Bob666")
        // 这时候 this 指向 undefined
        // 所以 报错，可以改写成下面方式，即可解决
        // const { homeStore } = this.props;
        // homeStore.setName("Bob");
  }
/**
 * 第二种
*/
  @action
  public setName = (name: string) => {
    // 箭头函数
    this.name = name
  }
  //使用
    private clickHandler = (): void => {
        const {setName}=this.props.homeStore
        setName("Bob666")
        // 这时候 this 指向 store
        // 成功
  }
```
二、 第二种 函数 组件中
```js
import React from 'react';
import { Link } from "react-router-dom";
import { observer, inject } from 'mobx-react'
type IProps = {
    [key: string]: any
}
const Detail: React.FC<{}> = inject('detailStore')(observer((props: IProps) => (
    <div className="App">
        <h3>Detail</h3>
        <h6>{props.detailStore.name}</h6>
        <ul>
            {props.detailStore.arr.map((v: any) => <li key={v.name}>{v.name}</li>)}
        </ul>
        <Link to='/home'>首页</Link>
        <Link to='/lll'>空页面</Link>
    </div>
)));

export default Detail;
```

## fetch && axios
1. 安装 `js-cookie`
```bash
npm i js-cookie @types/js-cookie --save
```
2. 使用 fetch
- [Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)
在`utils/request-fetch.ts`文件夹下

## 打包
```bash
npm run build
```
但是 会生成`.map文件`；上线的时候我们需要去掉这个文件。
在`config/webpack.config.js`内 第33行
```js
// Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
```
直接将改为
```js
const shouldUseSourceMap = 'false';
```
即可。
第二种办法，由上面的信息可知，`.map`文件是由回家变量` process.env.GENERATE_SOURCEMAP`控制的。所以由于打包的时候执行的脚本文件是`scripts/build.js`，所在在`scripts/build.js`内添加如下代码即可。
```js
// 打包禁止生成 .map 文件
process.env.GENERATE_SOURCEMAP = 'false';
```

## Hooks
- [精读《React Hooks 最佳实践》](https://juejin.im/post/5d75ae7a6fb9a06b0f2407e8)
<!-- eslint-plugin-react-hooks 插件会自动填写依赖项。-->
#### useMemo
`shouldCompoentUpdate`类似作用，在渲染过程中，避免重复渲染的问题。
当状态或者父组件的属性发生变化时，更新组件
1. `useMemo`就是用的`memoization`来提高性能。
2. `Memoization`是`JavaScript`的一种缓存技术。
如果我们有CPU密集型操作，我们可以通过将初始操作的结果存储在缓存中来优化使用。如果操作必然会再次执行，我们将不再麻烦再次使用我们的CPU，因为相同的结果的结果存储在某个地方，我们只是单纯的返回结果。
---------
**记住这个是以空间换速度，所以最好确定你是否值得那么做，有些场景很有必要使用**
`useMemo()`是一个函数，有两个参数，第一个参数是个函数，第二个参数是个数组。
`useMemo(()=>{},[默认可以不写，监控所有的状态])`
`useMemo`和`useEffect`执行的时间不同，`useEffect`是在`componentDidMount`以后执行的，而`useMemo`是在组件渲染过程中执行的。
#### useCallback
作用：避免组件重复渲染，提高性能（`useMemo`）
可以 控制组件什么时候需要更新

同样用到缓存技术，和`useMemo`不同的是，
`useCallback`缓存的是个函数，是个函数就可以执行

`useCallback()`有两个参数，第一个参数是个函数，第二个参数是个数组。
`useCallback(()=>{},[可以不写])`;

`const callback = useCallback(()=>{},[可以不写])`;
`callback`是个函数，可以直接`callback()`执行。
#### useImperativeHandle
`useImperativeHandle`可以让你在使用 `ref` 时自定义暴露给父组件的实例值。在大多数情况下，应当避免使用 `ref` 这样的命令式代码。`useImperativeHandle`应当与`forwardRef`一起使用
```js
useImperativeHandle(
    ref,
    () => {
        handler
    },
    [input],
)
```
#### useLayoutEffect
和`useEffect`作用一样，在组件生成过程中，可以做一些操作
不同点：
1. 执行的时间不同，`useEffect`是在`componentDidMount` 以后执行的，`useLayoutEffect`在浏览器执行绘制之前执行（会阻塞组件的挂载，慎用）

#### 自定义hook
自定义hook，和普通的函数本质上没有区别，都是做一些函数的封装，方便使用。
**注意**
1. 自定义hook，必须以use开头
2. 自定义hook，可以使用我们这些hook（useState,useEffect...）来封装

#### useReducer
1. `useReducer`和`redux`中的`Reducer`是一样的，说白了`useReducer`就是一个函数
2. `useReducer()`是个函数，有三个参数，第一个参数reducer，第二个参数是初始值，第三个参数是init。
3. `useReducer()`返回值是个数组，第一个是`state`，第二个是`dispatch`
4. `const [state, dispatch] = useReducer(reducer,初始值)`
`const [state, dispatch] = useReducer(reducer, initialState, init)`
#### useReducer useContext createContext 实现redux

## 加上`eslint`
可能已经安装成功。
```bash
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev
```
> 注意：如果create-react-app用于引导项目，eslint则已经通过将其作为依赖项包含在内react-scripts，因此无需使用进行显式安装yarn。
-----------
## 混合代码格式化
```bash
yarn add prettier eslint-config-prettier eslint-plugin-prettier --dev
```


## 报错
1. yarn or npm
```
Attempted import error: 'Route' is not exported from 'react-router-dom'.
```
- [Attempted import error: 'Route' is not exported from 'react-router-dom'](https://stackoverflow.com/questions/55331898/how-to-fix-error-attempted-import-error-route-is-not-exported-from-react-ro)
 `npm` 或者`yarn`只能使用一种方式。
 
2. 在`pages/login/components/LoginForm.tsx`中引入store会报错。
- [inject error](https://github.com/mobxjs/mobx-react#strongly-typing-inject)