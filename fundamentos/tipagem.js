/**
 * Tutorial Node.js
 * Tipagem dinâmica
 */

console.log ("________________________________ strings")
let nome = "José de Assis"
console.log(typeof(nome))
console.log(nome)
console.log(nome.replace("José","Zé"))
//dica .replace(",",".")
//concatenação
console.log("Professor: " + nome)
console.log(`Professor: ${nome}`)
console.log ("________________________________ números")
let peso = 61
let altura = 1.65
console.log(typeof(peso))
console.log(typeof(altura))
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))
let imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`)
//Atenção!
console.log(10 / 0)
console.log("3" + 2)
console.log("3" - 2)
console.log("3" * 2)
console.log("3" / 2)
console.log("3x" - 2)
console.log(NaN === NaN)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log(0.1 + 0.7)
console.log ("________________________________booleanos")
let sw = true
console.log(`Chave: ${sw}`)
let lamp = !1
console.log(typeof(lamp))
console.log(`Lâmpada: ${lamp}`)
console.log(sw && "Lâmpada acesa")
let nota1 = 10
let nota2 = 6
let nota3 = 8
let media = (nota1+nota2+nota3)/5
console.log(`MÉDIA : ${media} pontos`)
