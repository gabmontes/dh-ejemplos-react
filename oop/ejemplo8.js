function Mago(nombre) {
  this.nombre = nombre
}
var superMago = {
  hacerSuperMagia: function () {
    console.log('WOOW ' + this.nombre)
  }
}
var superAmigo = {
  saludar: function () {
    console.log('hola, soy ' + this.nombre)
  }
}
Mago.prototype = superAmigo
var mago = new Mago('harry')
mago.saludar()

Mago.prototype = superMago
var merlin = new Mago('merlin')
merlin.hacerSuperMagia()
