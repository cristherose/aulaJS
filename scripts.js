let nome=prompt('Qual é seu nome?') 
let sobrenome= prompt('Qual é seu sobrenome?') 
let idade= Number(prompt('escreva su idade por favor')) 
let nacionalidade=prompt( 'onde você nasceu?') 
let visita= prompt('que cidade vai conhecer do Brasil?')

console.log('Bem-vindo ao Braisl:    ' + nome + (' ')+ sobrenome )
console.log('digite sua edade:    ' + idade )
console.log('que legal! ' + nacionalidade)
console.log('disfrute de sua estadia!  ' + visita)

function Person( nome, sobrenome, idade, nacionalidade, visita){
    this.nome=prompt('Qual é seu nome?')
    this.sobrenome= sobrenome= prompt('Qual é seu sobrenome?') 
    this.idade= Number(prompt('escreva su idade por favor')) 
    this.nacionalidade=prompt( 'onde você nasceu?') 
    this.visita= prompt('que cidade vai conhecer do Brasil?')
}

var dados= new Person

console.table(dados)