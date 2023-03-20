// Resolva o Exercício de Fixação!
console.log('Funções Faruqi')
function olaNome(nome){
    let name = nome
    console.log(`Olá ${nome}`)
}
olaNome('Orci')

//Unindo funções, variaveis e operadores
const n1 = parseInt(prompt('Insira um numero: '))
function operacoes(numero){
    const verifica = (numero%2 ===0)// true, false    
    const soma = numero+=10
    const multiplicacao = numero * numero
    return `O número ${numero} é par? ${verifica}. Somado com 10, o resultado é ${soma} e multiplicado por ele mesmo o resultado é ${multiplicacao}`
}
const retorno = operacoes(n1)
console.log(retorno)

// console.log(operacoes(3003))

// // operaçoes 2

// const operacoesDois = function(numero){
//     const verifica = (numero%2 ===0)// true, false
//     const soma = numero+=10
//     const multiplicacao = numero * numero
//     return `O número ${numero} é par? ${verifica}. Somado com 10, o resultado é ${soma} e multiplicado por ele mesmo o resultado é ${multiplicacao}`
// }


// function login(login,senha){
//     const loginArmazenado = 'Orci'
//     const senhaArmazenada = 'Orci1234'
//     const resposta =(login === loginArmazenado && senha === senhaArmazenada)
//     return resposta
// }
// const tentativaLogin = login("Orci","1234Orci")
// console.log("login", tentativaLogin)


// function maior(nome,anoAtual,anoNasceu){
//     const fulano = nome
//     const maior = ((anoAtual-anoNasceu)>=18)

//     //console.log(`${nome} é maior de idade? ${maior}`)
//     return `${nome} é maior de idade? ${maior}`
// }

// maior("Orci",2012,2023)// nao imprimiu porque eu mudei o retorno da funcao.
// console.log(maior("Ana",1976,2023))
// console.log(maior("Arthur", 2012,2023))

// const retorno = maior(prompt('Qual seu nome'), prompt("Em que ano estamos?"), prompt("Que ano nasceu?"))
// console.log(retorno)

function cumprimento(nome){
    const pessoa = nome
    console.log(`Olá ${nome}`)
}
cumprimento("Orci")
cumprimento("Ana")
cumprimento(prompt("Qual seu nome"))