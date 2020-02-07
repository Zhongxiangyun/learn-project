# react 原理解析
- [github地址](https://github.com/facebook/react/)
- [源码地址 Reactjs](https://github.com/facebook/react/blob/master/packages/react/src/React.js)
- [源码地址 ReactDOM](https://github.com/facebook/react/blob/master/packages/react-dom/src/client/ReactDOM.js)
- [ReactBaseClasses.js](https://github.com/facebook/react/blob/master/packages/react/src/ReactBaseClasses.js)
- [视频地址](https://wx.kaikeba.com/liveclass/49?channel=undefined&PC_unionid=oBB9ps6W15ZI5pzqcKXyD4Sans-8)
- [react 学习网址](http://react.shengxinjing.cn/)

# Create React App
- [Create React App](https://create-react-app.dev/)
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
*注意* 
1. 现在使用 `npx create-react-app my-app `会报错，现在改为`npx create-react-app my-app --template [template-name]`;
模板列表 [cra-template-*](https://www.npmjs.com/search?q=cra-template-*);进行查找安装。
2. 如果 还继续 想使用`create-react-app my-app`;则需要在之前`npm install -g create-react-app`,这样就可以使用了。

# API
1. Component
2. render
3. createElement

### jsx
```js
class AA extends React.Component {
    render (){
        return (
            <div>
                Hello {this.props.name}, I am {2 + 2} years old
            </div>
                )
    }
}
```
转换为
```js
class AA extends React.Component {
render() {
    return React.createElement(
      "div",
      null,
      "Hello ",
      this.props.name,
      ", I am ",
      2 + 2,
      " years old"
    )
  }
}

```


