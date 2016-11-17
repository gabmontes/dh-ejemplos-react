function sumatoria() {
  var args = Array.prototype.slice.call(arguments)
  var suma = 0
  args.forEach(function (num) {
    suma += num
  })
  console.log(suma)
}
sumatoria(2)
