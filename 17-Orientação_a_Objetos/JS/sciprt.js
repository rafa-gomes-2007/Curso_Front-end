// 1 - Metodos
// const animal = {
//     nome: "Fluf",
//     latido: function() {
//         console.log("Auuuuuuu")
//     }
// }

// console.log(animal.nome)

// animal.latido()

// 2 - Aprofundando em Metodos

// const pessoa = {

//     nome: "Rafael",   

//     getNome: function() {
//         return this.nome
//     },

//     setNome: function(novoNome) {
//         this.nome = novoNome
//     },
// }

// console.log(pessoa.nome)
// console.log(pessoa.getNome())
// console.log(pessoa.setNome("Roberto"))
// console.log(pessoa.getNome())
// console.log(pessoa.nome)

// 3 - Prototype
// const text = "Rafael"

// console.log(Object.getPrototypeOf(text))

// const bool = true

// console.log(Object.getPrototypeOf(bool))

// const array = []

// console.log(Object.getPrototypeOf(array))

// console.log(Object.getPrototypeOf(array) === Array.prototype)

// 4 - Mais sobre prototye

// const objeto = {
//     a: "B",
// }

// console.log(Object.getPrototypeOf(objeto))

// console.log(Object.getPrototypeOf(objeto) === Object.prototype)

// const objeto2 = Object.create(objeto)

// console.log(objeto2)

// console.log(objeto2.a)

// console.log(Object.getPrototypeOf(objeto2) === objeto)

// 5 - Classes Basicas

// const cachorro = {
//     raca: null,
//     patas: 4,
// }

// const yorkshire = Object.create(cachorro)
// console.log(yorkshire.raca)

// yorkshire.raca = "Yorkshire"

// console.log(yorkshire)
// console.log(yorkshire.raca)

// 6 - Funções como classe

// function criarCachorro(nome,raca) {

//     const cachorro = ({})

//     cachorro.nome = nome
//     cachorro.raca = raca

//     return cachorro
// }

// const Teddy = criarCachorro("Teddy","Yorkshire")
// console.log(Teddy)

// const Bob = criarCachorro("Bob","Podle")
// console.log(Bob)

// // 7 - Funções como Classe

// function Cachorro(nome,raca) {
//     this.nome = nome,
//     this.raca = raca
// }

// const Doberman = new Cachorro("Astolfo","Doberman")
// console.log(Doberman)

// // 8 - Metodos na Função construtora
// Cachorro.prototype.uivar = function() {
//     console.log("aUUUUUUUUU")
// }

// Doberman.uivar()

// 9 - Classes ES6
// class CachorroClasse {
//     constructor(nome,raca) {
//         this.nome = nome
//         this.raca = raca
//     }
// }

// const Romeu = new CachorroClasse("Romeu","Husk")

// console.log(Romeu)

// console.log(Object.getPrototypeOf(Romeu))

// // 10 - Mais sobre classes
// class Caminhao {
//     constructor(eixos,cor) {
//         this.eixos = eixos
//         this.cor = cor
//     }

//     descreverCaminhao() {
//         console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`)
//     }
// }

// const scania = new Caminhao(8,"Branco")
// console.log(scania)

// scania.descreverCaminhao()

// Caminhao.prototype.motor = "v16"
// console.log(scania)

// const Toretto = new Caminhao(4,"Preto")
// console.log(Toretto.motor)

// 11 - Override

// class Humano{
//     constructor(nome,idade) {
//         this.nome = nome
//         this.idade = idade
//     }
// }

// const Rafael = new Humano("Rafael",187)
// console.log(Rafael)

// console.log(Humano.prototype.idade)

// Humano.prototype.idade = "Não Definida"
// console.log(Humano.prototype.idade)

// console.log(Rafael.idade)

// 12 - Symbol

// class Aviao {
//     constructor(turbinas,marca) {
//         this.turbinas = turbinas
//         this.marca = marca
//     }
// }

// const asas = Symbol()
// const pilotos = Symbol()

// Aviao.prototype[asas] = 2
// Aviao.prototype[pilotos] = 3

// const Boeing = new Aviao("Boeing", 10)  
// console.log(Boeing)

// console.log(Boeing[asas])
// console.log(Boeing[pilotos])

// 13 - Getters e Setters

// class post{
//     constructor(titulo,descricao,tags){
//         this.titulo = titulo
//         this.descricao = descricao
//         this.tags = tags
//     }

//     get exibirTitulo() {
//         return `Você esta lendo: ${this.titulo}`
//     }

//     set adicionarTags(tags){
//         const tagsArrays = tags.split(", ")
//         this.tags = tagsArrays
//     }
// }

// const myPost = new post("Algum post", "é um post sobre programação")
// console.log(myPost)

// console.log(myPost.exibirTitulo)

// myPost.adicionarTags = "programação, javascript"
// console.log(myPost)

// 14 - Herança

class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
}

class Lobo extends Mamifero{
    constructor(patas,nome) {
        super(patas, patas)
        this.nome = nome
    }
}

const Hellsing = new Lobo(8,"Hellsing")
console.log(Hellsing)
console.log(Hellsing.patas)

// 15 - Instanceof

console.log(Hellsing instanceof Lobo)
console.log(Lobo instanceof Mamifero)
console.log(new Lobo(4,"Teste") instanceof Mamifero)
console.log(new Post("A","b") instanceof Mamifero) 