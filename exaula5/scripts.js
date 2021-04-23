let pessoas= []

for(let i=0; i<2; i++) {
       alert('vamos a iniciar el cadastro' + i)
    
    let nome=prompt('Qual é seu nome?') 
    let sobrenome= prompt('Qual é seu sobrenome?') 
    let idade= Number(prompt('escreva su idade por favor')) 
    let nacionalidade=prompt( 'onde você nasceu?') 
    let visita= prompt('que cidade vai conhecer do Brasil?')
    
    let dados= {
        nome,
        sobrenome,
        idade,
        nacionalidade,
        visita
    }

    console.log('Bem-vindo ao Braisl:    ' + nome + (' ')+ sobrenome )
    console.log('digite sua edade:    ' + idade )
    console.log('que legal! ' + nacionalidade)
    console.log('disfrute de sua estadia!  ' + visita)
    
    if(idade<18){
        console.log( 'alerta menor de idade pedir permiso de viaje');
    }else{
        console.log('a pessoa é maior de idade')
    }

   


     









