// // 1 - setTimeOut
// console.log("Ainda não executou")

// setTimeout( function() {
//     console.log("Requisição Assíncrona")
// }, 4000);

// console.log("Ainda não executou 2")

// // 2 - SetInterval

// console.log("Ainda não começou")

// setInterval(function() {
//     console.log("Intervalo")    
// },2000)

// console.log("Ainda não começou")

// 3 - Promises

// const promessa = Promise.resolve(4 + 4)

// promessa
//     .then((value) => {
//         console.log(`A soma é ${value}`)
//         return value
//     })
//     .then((value) => value - 1)
//     .then((value) => console.log(`Agora é ${value}`))

// 4 - falhas na promises
// Promise.resolve(4 * 8)
// .then((n) => {
//     if(Number.isNaN(n)) {
//         throw new Error("VALORES INVÁLIDOS")
//     }
// })
// .catch((err) => console.log(`Um erro ocorreu: ${err}`))

// 5 - Rejeitando Promisse
// function checkNumber(n) {
//     return new Promise((resolve , reject) => {
//         if(n >10) {
//             resolve(`O numero ${n} é maior que 10 `)
//         }
//         else{
//             reject(new Error(`O numero ${n} é menor que 10`))
//         }
//     })
// }

// const a = checkNumber(20)

// const b = checkNumber(5)

// a.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log(`Um erro ocorreu ${err}`))

// b.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log(`Um erro ocorreu ${err}`))

// 6 - Resolvendo varias promises

// const p1 = new Promise((resolve,reject) => {
//     setTimeout(function() {
//         resolve(10)
//     },1000)
// })

// const p2 = Promise.resolve(10 + 10)

// const p3 = new Promise((resolve,reject) => {
//     if (30 > 10) {
//         resolve(30)
//     }
//     else{
//         reject("Erro!")
//     }
// })

// Promise.all([p1,p2,p3]).then((values) => console.log(values))

// 7 - functions assincronas
// async function somarComDelay(a,b) {
//     return a + b
// }

// somarComDelay(2,4).then((value) => {
//     console.log(`O valor da soma é ${value}`)
// })

// console.log("Teste Async")

// 8 - Await
// function resolveComDelay() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Resolveu a promise")
//         }, 2000);
//     })
// }

// async function chamadaAsync() {
//     console.log("Chamando a Promise, esperando o resultado")
//     const result = await resolveComDelay()
//     console.log(`O resultado chegou: ${result}`)
// }

// chamadaAsync()

// 9 - Generators
function* generator() {
    yield 1
    yield 2
    yield 4
}

const gen = generator()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
