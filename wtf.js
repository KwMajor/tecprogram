// let obj = {
//     x:10,
//     y:"ABC"
// }

// let obj2 = obj
// obj2.x = 20
// console.log(`obj: ${obj.x} obj2: ${obj2.x} y:${obj2.y}`)

// function calcularPotencia(base, expoente){
//     return base**expoente
// }
// let resultado = calcularPotencia(2,3)
// console.log(`resultado:`+resultado)

// const personagem = {
//     apelido: "capitao america",
//     nome: "steve rogers",
//     habilidade: "força e agilidade",
//     descricao: function(){
//         return "nome: "+ this.nome +"apelido: " +this.apelido+ "poderes: "+this.habilidade
//     }
// }
// console.log(personagem.descricao())

// soma = function (valor1, valor2) {
//     return valor1 + valor2
// }
// console.log("Valor da soma: " + soma(3,5))

// soma = (valor1, valor2) => {
//     return valor1 + valor2
// }
// console.log("valor da soma: " + soma(3,5))

// let estrutura = new Map()
// estrutura.set(1,'12')
// estrutura.set('funcao', function(){
//     return 'função anonima dentro do mapa'
// })
// console.log(estrutura.get(1))
// console.log(estrutura.get('funcao')())

// let empresa = {
//     razaosocial: "ABC LTDA"
//     nomefantasia: "mercado online"
// }
// for (valor in empresa){
//     console.log(valor)
// }

// let empresa = {
//     x: 'valor 1',
//     y: 'valor 2'
// }
// for (atributo in empresa) {
//     console.log(empresa[atributo])
// }

let estadossudeste = new Set(['ES', 'SP', 'MG', 'RJ'])

for (let valores of estadossudeste){
    console.log(valores)
}