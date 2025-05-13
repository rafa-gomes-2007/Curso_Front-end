// 1 Criando uma função
// function minhaFunção(){
//     console.log('Testando')
// }

// minhaFunção()

// const minhaFunçãoEmVariavel = function(){
//     console.log("Função em variável")
// }

// minhaFunçãoEmVariavel()

// function funcaoComParametro(txt) {
//     console.log(`Imprimindo: ${txt}`)
// }

// funcaoComParametro("Hoje é dia 15")
// funcaoComParametro("Hoje é dia 16")

// 2 return

// const Lakers = 17
// const Bulls = 6
// const Warriors = 7
// const Spurs = 6

// function soma(n1 ,n2) {
//     return n1 + n2 
// }

// // Jeito 1
// let resultado = soma(Spurs , Bulls)
// console.log(resultado)   

// // Jeito 2
// resultado = console.log(`O resultado é ${soma(Warriors,Spurs)}`)


// // Jeiot 3
// console.log(soma(Lakers,Bulls))

// 3 escopo da função

// let y = 11

// function testandoEscopo() {
//     let y = 44
//     console.log(`O Y dentro da função é ${y}`)
// }

// testandoEscopo()

// console.log(`O Y fora da função é ${y}`)

// 4 escopo aninhado

// let m = 10

// function escopoAninhado() {
//     let m = 12

//     if(true) {
//         let m = 15

//         if(true) {
//             let m = 17

//             console.log(m)
//         }

//         console.log(m)
//     }

//     console.log(m)
// }

// escopoAninhado()
// console.log(m)

// 5 arrow function

// const testeArrow = () =>{
//     console.log('testeArrow')
// }

// testeArrow()

// const parOuImpar = (n) => {
//     if (n % 2 == 0) {
//         console.log('Par')
//         return
//     }
//     else{
//         console.log("Impar")
//     }
// }

// parOuImpar(2)

// parOuImpar(11)

// const raizQuadrada = (x) => {
//     return x * x
// }

// console.log(raizQuadrada(4))

// const raizQuadrada2 = (x) => x * x 

// console.log(raizQuadrada2(11))

// 7 parametro opxional

// const multiplicar = function(m,n) {

//     if(n === undefined){
//         return m * 2
//     } else {
//        return  m * n
//     }
// }

// console.log(multiplicar(5))

// console.log(multiplicar(2,4))

// const greeting = (name) =>{
//     if (!name) {
//         console.log('Olá')
//     }
//     else{
//         console.log(`Ola ${name} !`)
//     }
// }

// greeting()
// greeting('Rafael')    

// 8 valor default

// const greeting = (name, greet = "Ola") => {
//     return `${greet}, ${name}`
// }

// console.log(greeting('Rafael'))

// console.log(greeting('Rafael' , "Oi"))

// const repeteTexto = (texto, repete) => {
//     for (let i = 0; i < repete; i++) {
//         console.log(texto)
//     }
// }

// repeteTexto("Testando")

// repeteTexto(`Testando`, 5)

// 9 Closure
// function somaFuncao() {
//     let txt = "Alguma texto"

//     function displat() {
//         console.log(txt)
//     }

//     displat()
// }

// somaFuncao()

// const multiplicaçãoClosure = (n) => {
//     return (m) => {
//         return n * m
//     }
// }

// conct = c1 = multiplicaçãoClosure(5)

// conct = c2 = multiplicaçãoClosure(10)

// console.log(c1)

// console.log(c2)

// console.log(c1(5))

// console.log(c2(10))

// 10 Recursão

// const dez = (n,m) =>{
//     if (n < 10) {
//         console.log("A função parou de executat")
//     } else{
//         const x = n - m

//         console.log(x)

//         dez(x ,m)
//     }
// }

// dez(1000,7)

function fatorial(x) {
    if (x === 0) {
        return 1    
    }
    else{
        return x * fatorial(x - 1)
    }
}

const num = 6

const result = fatorial(num)

console.log(`O fatorial do numero ${num} é ${result}`)