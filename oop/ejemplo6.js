function Mago(nombre) {
  this.nombre = nombre
}
var merlin = {}
Mago.call(merlin, 'merlin')
console.log(merlin)
