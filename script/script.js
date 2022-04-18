function positions(fisrtPlace, secondPlace, lastPlace) {
    let atletas = [fisrtPlace, secondPlace, lastPlace]
  //segundo pra primeira
    if (secondPlace===`Daniel`) {
        atletas[0]=atletas[1]
        atletas[1]=fisrtPlace
    }

    if(lastPlace===`Daniel`) {
        atletas[1]=atletas[2]
        atletas[2]=secondPlace   
    }  
    //console.log(arrayAtletas)
    return `
    Resultado final
    1ª - Colocado ${atletas[0]}
    2ª - Colocado ${atletas[1]} 
    3ª - Colocado ${atletas[2]} `

}

console.log(`Teste 1`)
console.log(positions('Rafael', 'Manoel', 'Daniel'))
console.log(`Teste 2`)
console.log(positions('Rafael', 'Daniel', 'Manoel'))
console.log(`Teste3`)
console.log(positions('Daniel', 'Rafael', 'Manoel'))