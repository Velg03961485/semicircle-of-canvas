function toCanvas(id, progress, cax, cah) {
  var ctx = wx.createCanvasContext(id);
  var percent = progress >= 100 ? 100 : progress,
    radius = cax / 2 - 3,
    circleX = cax / 2,
    circleY = (cah + radius) / 2,
    lineWidth = 4,
    fontSize = 20;
  ctx.clearRect(0, 0, cax, cah);
  // 画圆弧刻度
  function circle(cx, cy, r) {
    let grd = ctx.createLinearGradient(
      circleX - radius - 6, circleY, circleX + radius + 6, circleY
    );
      grd.addColorStop(0, '#EEEEEE');
      grd.addColorStop(1, '#EEEEEE');
    

    ctx.strokeStyle = grd;
    //灰色圆弧
    ctx.beginPath();
    ctx.setLineWidth(3);
    ctx.strokeStyle = '#EEEEEE';
    ctx.setLineCap("butt");
    ctx.arc(cx, cy, (r - lineWidth - 2), Math.PI, Math.PI * 2);
    ctx.stroke();

    //以下是刻度
    ctx.beginPath();
    ctx.setLineWidth(6);
    ctx.strokeStyle = '#EEEEEE';
    ctx.setLineCap('butt');
    ctx.arc(cx, cy, (r - lineWidth - 5), Math.PI, Math.PI * 1.01);
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineWidth(6);
    ctx.strokeStyle = '#EEEEEE';
    ctx.setLineCap('butt');
    ctx.arc(cx, cy, (r - lineWidth - 5), Math.PI * 1.245, Math.PI * 1.255);
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineWidth(6);
    ctx.strokeStyle = '#EEEEEE';
    ctx.setLineCap('butt');
    ctx.arc(cx, cy, (r - lineWidth - 5), Math.PI * 1.495, Math.PI * 1.505);
    ctx.stroke();


    ctx.beginPath();
    ctx.setLineWidth(6);
    ctx.strokeStyle = '#EEEEEE';
    ctx.setLineCap('butt');
    ctx.arc(cx, cy, (r - lineWidth - 5), Math.PI * 1.745, Math.PI * 1.755);
    ctx.stroke();


    ctx.beginPath();
    ctx.setLineWidth(6);
    ctx.strokeStyle = '#EEEEEE';
    ctx.setLineCap('butt');
    ctx.arc(cx, cy, (r - lineWidth - 5), Math.PI * 1.99, Math.PI * 2);
    ctx.stroke();

    ctx.draw(true);
  };

  //画进度弧线
  function sector(cx, cy, r, startAngle, endAngle, anti) {
    ctx.beginPath();
    ctx.setLineWidth(lineWidth);
    // 渐变色 - 可自定义
    var linGrad = ctx.createLinearGradient(
      circleX - radius - lineWidth, circleY, circleX + radius + lineWidth, circleY
    );

    if (progress >= 100) {
      linGrad.addColorStop(0, '#FFC405');
      linGrad.addColorStop(1, '#FF5648');
    } else {
      linGrad.addColorStop(0, '#00f8bb');
      linGrad.addColorStop(1, '#06a8f3');
    }

    ctx.strokeStyle =linGrad;

    //  圆弧两端的样式
    ctx.setLineCap('round');

    // 圆弧
    ctx.arc(
      cx, cy, r,
      Math.PI,
      Math.PI + endAngle / 100 * Math.PI,
      false
    );
    ctx.stroke();

    ctx.draw(true)
  };

  //画文字
  function drawText() {
    ctx.font = '12px Univers LT 47 CondensedLt';
    ctx.setTextAlign('center');
    ctx.setTextBaseline('middle');
    ctx.setFillStyle('#999');
    ctx.fillText(parseFloat(percent).toFixed(2) + '%', circleX, circleY - 5);

    ctx.draw(true)
  }

  circle(circleX, circleY, radius);
  drawText();
  sector(circleX, circleY, radius, Math.PI, percent);

}

export default toCanvas