import 'dart:html';
import 'dart:math' as Math;

CanvasElement canvas;
CanvasRenderingContext2D ctx;
int flag_w = 300;
int flag_h = 200;
num circle_x = flag_w / 2;
num circle_y = flag_h / 2;

void main() {
  canvas = querySelector('#canvas');
  ctx = canvas.getContext('2d');

  drawROC(ctx);
  querySelector("#roc").onClick.listen((e) => drawROC(ctx));
  querySelector("#button").onClick.listen((e) => clearCanvas());
}
void drawROC(ctx){
  ctx.clearRect(0, 0, flag_w, flag_h);
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, flag_w, flag_h);
  ctx.fillStyle = '#bc002d';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(circle_x, circle_y, flag_w / 5, 0, Math.pi * 2, true);
  ctx.closePath();
  ctx.fillStyle = '#bc002d';
  ctx.fill();
}
void clearCanvas(){
  ctx.clearRect(0, 0, flag_w, flag_h);
}
