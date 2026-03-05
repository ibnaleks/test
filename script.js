const circle = [{
  radius: 18,
  calculateArea: function calculateCircleArea() {
    if (this.radius >= 0) {
      return Math.PI * (this.radius ** 2);
    } else {
      return false;
    }
  },
}];

const myCircleArea = circle.calculateArea()
if (myCircleArea === false) {
  console.log("Радиус должен быть положительным числом.");
} else {
  console.log(`Площадь круга: ${myCircleArea.toFixed(2)} кв. см.`)
}

const myTriangle = {
  a: 34,
  b: 48,
  angle: 20,
  calculateTriangle: function calculateTriangleArea() {
    if (this.a <= 0 || this.b <= 0 || this.angle <= 0 || this.angle > 180) {
      const triangleParametr = {
        success: false,
        message: "Введены ошибочные данные, проверьте.",
      }
      return triangleParametr;
    } else {
      let radians = this.angle * Math.PI / 180;
      let area = 0.5 * this.a * this.b * Math.sin(radians);
      const triangleParametr = {
        success: true,
        message: area,
      }
      return triangleParametr;
    }
  },
};

const myTriangleArea = myTriangle.calculateTriangle();
const { success, message } = myTriangleArea;
if (success) {
  console.log(`Площадь треугольника: ${message.toFixed(2)} кв. см.`);
} else {
  console.log(`Внимание! ${message}`);
}