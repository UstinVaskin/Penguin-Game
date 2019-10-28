
class Iceberg {

  constructor() {
    this.r = 75;
    this.x = width;
    this.y = height - this.r;
  }

  move() {
    this.x -= 12;
  }

  show() {
    image(tImg, this.x, this.y, this.r, this.r);

  }

}