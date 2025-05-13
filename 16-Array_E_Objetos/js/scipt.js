// // 1 - Array 
// const lista = [1,2,3,4,5]

// console.log(lista)
// console.log(typeof lista)

// const itens = ["Marcos", 1,2, 5.4]

// console.log(itens)


// // 2 - Mais sobre arrays

// const array = ["a","b", "c"]

// console.log(array[0])

// // 3 - Propriedades

// const numeros = [5,3,4]

// console.log(numeros.length)

// console.log(numeros["length"])

// const nome = "Rafael"

// console.log(nome.length)

// console.log(nome["length"])

// 4 - Metódos

// const numeros = [1,2,3,4,5]

// const outros_numeros = [6,7,8,9]

// const todos_numeros = numeros.concat(outros_numeros)
// console.log(todos_numeros)

// const nome = "Rafael"

// console.log(nome.toUpperCase())

// console.log(nome.toLowerCase())

// console.log(nome.indexOf("l"))

// 5 - Objetos

// const person = {
//     name : "Rafael",
//     idade: 18,
//     work: "Developer",
// }

// console.log(person)

// console.log(person.name)

// console.log(person.name.length)

// console.log(typeof person)

// 6 - criando e deletando propriedades

// const carro = {
//     marca: "Chevrolet",
//     km: "100000",
//     cor: "Branco",
// }

// // console.log(carro)

// // carro.doors = 4
// // console.log(carro)

// // delete carro.km
// // console.log(carro)

// // 7 - Mais sobre objetos

// const obj = {
//     a: "Teste",
//     b: false,
// }

// console.log(obj instanceof Object)

// const obj2 = {
//     c: [],
// }

// Object.assign(obj2, obj)

// console.log(obj2)

// // 8 - Conhecenndo melhor os objetos

// console.log(Object.keys(obj))
// console.log(Object.keys(obj2))
// console.log(Object.keys(carro))
// console.log(Object.entries(carro))

// 9 - Mutação

// const a = {
//     name: "Rafael",
// }

// const b = a

// console.log(a)
// console.log(b)

// console.log(a === b)

// a.age = 18

// console.log(a)
// console.log(b)

// delete b.age

// console.log(a)
// console.log(b)

// 10 - Loops em Array

// const users = ["Rafael", "Pedro","Mario",'Joaquim']

// for (let i = 0; i < users.length; i++) {
//     console.log(`Listando o usuário: ${users[i]}`)
// }

// 11 - push e pop

// const array = ["a","b","c"]

// array.push("d")
// console.log(array)

// array.pop()
// console.log(array)

// const removido = array.pop()
// console.log(removido)

// 12 - shift e unshift

// const letras = ["a","b","c"]

// const letra = letras.shift()

// console.log(letra)

// console.log(letras)

// letras.unshift("d")

// console.log(letras)

// 13 - indeexof e lastindexof

// const elementos = ["Maça","Pera", "Morango","Laranja","Morango"]

// console.log(elementos.indexOf("Pera"))
// console.log(elementos.indexOf("Maça"))

// console.log(elementos.indexOf("Morango"))

// 14 - Slice

// const testeSlice = ["a","b","c","d"]

// const arrayMenor = testeSlice.slice(1,3)

// console.log(arrayMenor)

// const arrayMenor2 = testeSlice.slice(1,3 +1)

// console.log(arrayMenor2)

// const arrayMenor3 = testeSlice.slice(89,26)
// console.log(arrayMenor3)

// const arrayMenor4 = testeSlice.slice(1)
// console.log(arrayMenor4)

// 15 forEach

// const nums = [1,2,3,4,5]

// nums.forEach((n) => {
//     console.log(`O numero é: ${n}`)
// })

// const posts = [
//     {title: "Post 1", body: "Corpo do post 1"},
//     {title: "Post 2", body: "Corpo do post 2"},
//     {title: "Post 3", body: "Corpo do post 3"},
//     {title: "Post 4", body: "Corpo do post 4"},
//     {title: "Post 5", body: "Corpo do post 5"},
// ]

// posts.forEach((post) => {
//     console.log(`Exibindo post: ${post.title} exibindo corpo: ${post.body}`)
// })

// 16 - include

// const brands = ["Apple", "Samsung", "Motorola", "Xiaomi"]

// console.log(brands.includes("Fiat"))

// console.log(brands.includes("Apple"))

// if ((brands.includes("Apple"))) {

//     console.log("Existem celulares da Apple")
// }

// 17 - reverse

// const reverseTeste = [1,2,3,4,5]

// console.log(reverseTeste)
// reverseTeste.reverse()

// console.log(reverseTeste)

// 18 - trim

// const trimTest = " TESTE \n "

// console.log(trimTest)

// console.log(trimTest.trim())

// console.log(trimTest.length)

// console.log(trimTest.trim().length)

// 19 - Padstart

// const padstartTeste = "1"

// const newNumeber = padstartTeste.padStart(4,"0")
// console.log(newNumeber)

// const testePadEnd = newNumeber.padEnd(15,"0")

// console.log(testePadEnd)

// 20 - Split

// const frase = "Shakespeare escreveu Romeu e Julieta"

// const arrayDaFrase = frase.split(" ")

// console.log(arrayDaFrase)

// 21 - Join

// const fraseNovo = arrayDaFrase.join(" ")

// console.log(fraseNovo)

// const itensParComprar = ["Arroz", "Feijao", "Macarrao", "Batata"]

// const fraseDeCompra = `Precisamos comprar: ${itensParComprar.join(", ")}.`

// console.log(fraseDeCompra)

// 22 - Repeat

// const palavra = "Testando"

// console.log(palavra.repeat(6))

// 23 - Rest Operator / Rest Parameter

// const somaInfinita = (...args) => {
//     let total = 0

//     for(let i=0; i<args.length; i++) {
//         total += args[i]
//     }

//     return `Este é o resultado: ${total}`
// }

// console.log(somaInfinita(1,2,3))

// console.log(somaInfinita(15,558445,5888,15))

// 24 - For of

const somaInfiita2 = (...args) => {
    let total2 = 0

    for (num of args) {
        total2 += num
    }

    return `Este é o resultado: ${total2}`
}

console.log(somaInfiita2(5758,84988,5877,577))

// 25 - Destructuring em ojetos

