function hacerMagia() {
  console.log(this.nombre + ' hace magia')
  return "no se quien soy"
}
var harry = {
  nombre: "Harry",
  hacerMagia: hacerMagia
}
var merlin = {
  nombre: "Merlin",
  hacerMagia: hacerMagia()
}
harry.hacerMagia()
console.log(merlin)
hacerMagia()
