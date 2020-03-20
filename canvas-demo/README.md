# canvas
- [Canvas教程](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial)

## 绘制矩形
- fillRect(x, y, width, height)
绘制一个填充的矩形
- strokeRect(x, y, width, height)
绘制一个矩形的边框
- clearRect(x, y, width, height)
清除指定矩形区域，让清除部分完全透明。

上面提供的方法之中每一个都包含了相同的参数。x与y指定了在canvas画布上所绘制的矩形的左上角（相对于原点）的坐标。width和height设置矩形的尺寸。

## 绘制路径
- beginPath()
新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
- closePath()
闭合路径之后图形绘制命令又重新指向到上下文中。
- stroke()
通过线条来绘制图形轮廓。
- fill()
通过填充路径的内容区域生成实心的图形。
生成路径的第一步叫做beginPath()。本质上，路径是由很多子路径构成，这些子路径都是在一个列表中，所有的子路径（线、弧形、等等）构成图形。而每次这个方法调用之后，列表清空重置，然后我们就可以重新绘制新的图形。

## 线
lineTo(x, y)
绘制一条从当前位置到指定x以及y位置的直线。
该方法有两个参数：x以及y ，代表坐标系中直线结束的点。开始点和之前的绘制路径有关，之前路径的结束点就是接下来的开始点，等等。。。开始点也可以通过moveTo()函数改变。
- [https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)