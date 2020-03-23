function draw () {
  var canvas = document.getElementById ('tutorial');
  if (canvas.getContext) {
    var ctx = canvas.getContext ('2d');

    ctx.fillRect (25, 25, 100, 100);
    ctx.clearRect (45, 45, 60, 60);
    ctx.strokeRect (50, 50, 50, 50);
    ctx.fillRect (60, 60, 30, 30);

    ctx.beginPath ();
    ctx.moveTo (175, 50); //右
    ctx.lineTo (130, 75); //左下
    ctx.lineTo (130, 25); //左上
    ctx.fill ();

    ctx.beginPath ();
    ctx.strokeStyle = '#fff'; // Green path
    ctx.arc (75, 75, 50, 0, Math.PI * 2, true); // 绘制
    ctx.moveTo (110, 75);
    ctx.arc (75, 75, 35, 0, Math.PI, false); // 口(顺时针)
    ctx.moveTo (65, 65);
    ctx.arc (60, 65, 5, 0, Math.PI * 2, true); // 左眼
    ctx.moveTo (95, 65);
    ctx.arc (90, 65, 5, 0, Math.PI * 2, true); // 右眼
    ctx.stroke ();

    // 描边三角形
    ctx.beginPath ();
    ctx.moveTo (225, 125);
    ctx.lineTo (225, 45);
    ctx.lineTo (145, 125);
    ctx.closePath ();
    ctx.stroke ();
    ctx.fill();
    // 画个圆
    ctx.beginPath ();
    ctx.arc(300, 80, 40, 0, 90, true)
    ctx.fill();
  }
}
