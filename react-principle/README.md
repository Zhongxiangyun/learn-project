# react 原理解析
- [github地址](https://github.com/facebook/react/)
- [源码地址](https://github.com/facebook/react/blob/master/packages/react/src/React.js)
- [视频地址](https://wx.kaikeba.com/liveclass/49?channel=undefined&PC_unionid=oBB9ps6W15ZI5pzqcKXyD4Sans-8)
- [react 学习网址](http://react.shengxinjing.cn/)
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


