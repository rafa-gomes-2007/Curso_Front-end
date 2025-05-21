// // 1 - Strict

// "use strict"

// // opa = "teste" erro

// const opa = "teste"

// // const undefined = 2 -  erro

// // 2 - console.log

// let a = 1
// let b = 2

// if (a == 1) {
//     a = b + 2
// }
// console.log(a)

// for(let i = 0; i < b; i++){
//     a = a + 2
//     console.log(a)
// }

// // 3 - Debugger

// let c = 1
// let d = 2

// if (c == 1) {
//     c = d + 2
// }

// debugger

// for(let i = 0; i< d; i++){
//     c = c + 2
// }

// console.log("Executou o Loop")

// 4 - Tratamento de Dados

function checkNumber(n) {

    const result = Number(n)

    if(Number.isNaN(result)){
        console.log("Valor Incorreto")
        return
    } 
    else{
        console.log("Valor Correto")
        return
    }
}

checkNumber(2)
checkNumber("2")
checkNumber("Aaaaaauuuu")
checkNumber({})

// 5 - Exceptions

// let x = 10

// if (x != 11) {
//     throw new Error("Erro Detectado")
// }

// 6 - Try Catch

try {
    const soma = x + y
}
catch (error) {
    console.log(`Erro no programa ${error}`)
}

// 7 - Finally

try {
    const value = checkNumber("asas")

    if(!value){
        throw new Error("Valor Incorreto")
    }
    
}
catch(error) {
    console.log(`Ocorreu um problema ${error}`)
}
finally{
    console.log("O codigo foi executado")
}

// 8 - Assertions

function checkArray(arr) {
    if(checkArray.length === 0) {
        throw new Error("Array Vazio")
    }
    else{
        console.log(`O array tem ${arr.length} elementos`)
    }
}

checkArray([512,54])