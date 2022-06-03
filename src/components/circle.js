// import using require
const Shape = require('./shape.js')
// declare class
class Circle extends Shape {
  constructor(color) {
    super(color)
  }
  calculateArea() {
    return 2 * Math.PI * (this.radius * this.radius)
  }
}

module.exports = Circle
// export class using module.exports
