var harry = {
  nombre: "Harry",
  hacerMagia: function () {
    console.log(this.nombre + ' hace magia')
  }
}
var merlin = {
  nombre: "Merlin"
}
var magiaDeMerlin = harry.hacerMagia.bind(merlin)
magiaDeMerlin()
var otraMagia = harry.hacerMagia
otraMagia()
console.log(merlin)
