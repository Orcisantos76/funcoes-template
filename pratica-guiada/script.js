// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!
//const nomeUsuario = prompt('Insira seu nome: ')
console.log('Funções')
function cumprimentara(nome){
    console.log(`Olá ${nome}`)
}

cumprimentara('Orci')
let nome = prompt('Insira seu nome:')
cumprimentara(nome)
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
function tabuada(numero){
    console.log(`A tabuada de ${numero} é: \n`)
    for (let i = 1; i<=10; i++){
        console.log(`${i} * ${numero} = ${i * numero}`)
    }
}

const n = Number(prompt('Insira um número para saber a tabuada.'))
tabuada(n)
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
//Funcao não nomeada, uma variavel guarda a funcao ex:

const nomeVariavel = function(nome){
    console.log('Olá, no-name', nome)
}

nomeVariavel('Arthur')
nomeVariavel(prompt("Insira seu nome, para a funcao nao nomeada: "))
//const verifica=''
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
function conta(x){
    const verifica =(x%2 ===0)// true é par, false é impar
    const soma = x +10
    const multiplicaçao = x*x

    // console.log(`O número ${x} é par ${verifica}. Somado com 10 é ${soma}, e multiplicado por ele mesmo é ${multiplicaçao}. -01`)

    return (`O número ${x} é par ${verifica}. Somado com 10 é ${soma}, e multiplicado por ele mesmo é ${multiplicaçao}. -02`)
}

const retorno = conta(n)// se estiver usando o return, cria uma variavel para atribuir a funcao 
console.log(retorno)
conta(n)

function login(login,senha){
    const user = "Orci"
    const key = "1234"
    // if (login === user && senha === key){
    //     console.log(`'Bem vindo ${user}'`)
        
    // }else{
    //     console.log('Usuario invalido')
    // }
    const resp = (login === user && senha === key)
    //console.log(resp)
    return resp
}
const x=prompt("insira o nome de usuario")
const y=prompt('insira sua senha')
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
const tentativa = login(x,y)
console.log(tentativa)
console.log("888888")
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
function maior(nome,ano){
    const nome1 = nome
    const idade = 2023 - ano
    const maior = idade >= 18
    return`${nome1} tem ${idade} sendo assim maior idade é ${maior}` 
    //console.log(`${nome1} tem ${idade} sendo assim maior idade é ${maior}`) 
    // return tem que criar uma variavel pra receber ou dar um console.log()
}
const retorno2 = maior('Ana', 1979)
console.log(retorno2)// esse foi impresso
console.log(maior('Orci', 1976))// esse foi impresso
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')