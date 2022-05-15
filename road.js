class Road {
  constructor(x, width, laneCount = 3) {
    this.x = x;
    this.width = width;
    this.laneCount = 3;

    this.left = x - width / 2;
    this.right = x + width / 2;

    //using javscript infinity object with drawing has weird effects
    //so a large number is used instead
    const infinity = 1000000;
    this.top = -infinity;
    this.bottom = infinity;
  }
  draw(ctx) {
    ctx.lineWidth = 5;
    ctx.strokeStyle = "white";

    ctx.beginPath();
    ctx.moveTo(this.left, this.top);
    ctx.lineTo(this.left, this.bottom);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.right, this.top);
    ctx.lineTo(this.right, this.bottom);
    ctx.stroke();
  }
}
