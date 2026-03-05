// Площадь кругов

function calculateCircleArea() {
  if (this.radius > 0) {
    return Math.PI * (this.radius ** 2);
  } else {
    return false;
  }
}

const myCircles = [
  { radius: 18, calculateCircleArea, },
  { radius: 34.5, calculateCircleArea, },
  { radius: 123, calculateCircleArea, },
  { radius: 0, calculateCircleArea, },
  { radius: 1, calculateCircleArea, },
  { radius: -87, calculateCircleArea, },
  { radius: 25, calculateCircleArea, },
];

myCircles.forEach((item, index) => {
  const circleArea = item.calculateCircleArea();
  if (circleArea === false) {
    console.log(`Радиус круга #${index + 1} не может быть отрицательным или равным нулю.`);
  } else {
    console.log(`Площадь круга #${index + 1}: ${circleArea.toFixed(2)} кв. см.`);
  }
});

// Площадь треугольников

function calculateTriangleArea() {
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
}

const myTriangles = [
  {
    a: 34,
    b: 48,
    angle: 20,
    calculateTriangleArea,
  },
  {
    a: 23,
    b: 46,
    angle: 235,
    calculateTriangleArea,
  },
  {
    a: 234,
    b: 12,
    angle: 15,
    calculateTriangleArea,
  },
  {
    a: 94,
    b: 654,
    angle: 56,
    calculateTriangleArea,
  },
  {
    a: 1,
    b: 2,
    angle: 1,
    calculateTriangleArea,
  },
  {
    a: 126,
    b: 432,
    angle: 170,
    calculateTriangleArea,
  },
  {
    a: 3.4,
    b: 4.8,
    angle: 20.87,
    calculateTriangleArea,
  },
];

myTriangles.forEach((item, index) => {
  const { success, message } = item.calculateTriangleArea();
  if (success) {
    console.log(`Площадь треугольника #${index + 1}: ${message.toFixed(2)} кв. см.`);
  } else {
    console.log(`Внимание на треугольник #${index + 1}! ${message}`);
  }
});