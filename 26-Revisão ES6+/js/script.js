// 1 - var, let e const

// var x = 5
// var y = 10

// if(x < 10) {
//     var x = 10
//     console.log(x)
// }

// console.log(x)

// let a = 5
// let b = 10 

// if(a < 10) {
//     let a = 10
//     console.log(a)
// }

// console.log(a)

// function LogName() {
//     const name = "João Pedro"
//     console.log(name)
// }

// const name = "Matheus"
// console.log(name)
// LogName()

//2 - Arrow Functions

// const sum = function(a,b) {
//     return a + b
// }

// const ArrowSum = (a,b) => a + b

// console.log(sum(5 ,5))
// console.log(ArrowSum(5, 5))

// const greeting = (name) => {
//         if(name) {
//             return Hello ${name}
//         }
//         else{
//             return Hello
//     }
// }

// console.log(greeting("Paulo"))
// console.log(greeting())

// const user = {
//     name: "Theo",
//     sayUserName() {
//         setTimeout(function() {

//             console.log(this)
//             console.log(Username: ${this.name})

//         }, 1000)
//     },
//     sayUserNameArrow() {
//         setTimeout(() => {
//             console.log(this)
//             console.log(Username: ${this.name})
//         }, 2000);
//     }
// }

// user.sayUserName()


//3 - Filter

// const arr = [1,2,3,4,5,6]

// const highNumbers = arr.filter((n) => {
//     if(n >= 3) {
//         return n
//     }
// })

// console.log(highNumbers)

// const user = [
//     {name: "Matheus", available: true},
//     {name: "João", available: false},
//     {name: "Felipe", available: true},
//     {name: "Marcos", available: false},
//     {name: "Lucas", available: true},
// ]

// const availableUser = user.filter((user) => user.available)

// console.log(availableUser)

//4 -  Map

//const products = [
//     {name: "Camisa", price: 10.99, category: "Roupas"},
//     {name: "Calça", price: 80.00, category: "Roupas"},
//     {name: "Air Freyer", price: 150.90, category: "Eletrodomestico"},
//     {name: "Micro-ondas", price: 200.80, category: "Eletrodomestico"},
// ]

// products.map((product) => {
//     if(product.category === "Roupas") {
//         product.onSale = true
//     }
// })

// console.log(products)

// Template LIterals

// const Username = "Matheus"
// const age = 31

// console.log(O nome do usuário é ${Username} e ele tem ${age} anos)

// 5 - Destructuring
// const fruits = ["Maça", "Mamão", "Pera"]

// const [f1,f2,f3] = fruits

// console.log(f1,f3)

// const productDetails = {
//     name: "Mouse",
//     price: 39.90,
//     category: "Periférico",
//     color: "Vermelho",
// }

// const { name:ProductName, price ,category ,color} = productDetails

// console.log(O produto é ${ProductName}, ele custa R$${price}, ele é um ${category} e tem a cor ${color})

// 6 - Spread Operator

// const a1 = [1,2,3]

// const a2 = [4,5,6]

// const a3 = [...a1,...a2]

// console.log(a3)

// const a4 = [0,...a3,7]

// console.log(a4)

// const carName = {name: "Gol"}
// const carBrand = {brand: "WV"}
// const otherInfos = {km: 10000000, price: 49999}

// const car = {...carName,...carBrand,...otherInfos}
// console.log(car)

// 7 - Classes

class Products{
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    ProductWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Products("Camisa gola V", 20)

console.log(shirt)

console.log(shirt.ProductWithDiscount(10))

console.log(shirt.ProductWithDiscount(15))

// 8 - Herança

class ProducWithAttributes extends Products {

    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são: ")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProducWithAttributes("Chapéu", 29.90, ["Preto", "Amarelo", "Azul"])

console.log(hat)
console.log(hat.name)