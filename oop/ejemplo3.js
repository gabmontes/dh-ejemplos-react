function calcArea() {
  return this.base * this.altura
}
var rectangulo1 = {
  base: 3,
  altura: 2
}
var rectangulo2 = {
  base: 4,
  altura: 5
}
console.log(calcArea.bind(rectangulo1)())
console.log(calcArea.bind(rectangulo2)())
