function positions(fisrtPlace, secondPlace, lastPlace) {
    let arrayAtletas = [{
            nome: fisrtPlace,
            tarefaExtra: false
        },
        {
            nome: secondPlace,
            tarefaExtra: false
        },
        {
            nome: lastPlace,
            tarefaExtra: true
        }
    ]
    //console.log(arrayAtletas)
    console.log(
        `---Chegada---
    1ª - Colocado ${arrayAtletas[0].nome}
    2ª - Colocado ${arrayAtletas[1].nome} 
    3ª - Colocado ${arrayAtletas[2].nome}  
        `
    )
    console.log("Tarefas Extras")
    if (arrayAtletas[0].tarefaExtra == true) {
        console.log(`${arrayAtletas[0].nome} completou a tarefa extra e subiu uma posicao`)
        arrayAtletas=mudarPosicaoAtleta(0, arrayAtletas, 0)
    }
    if (arrayAtletas[1].tarefaExtra == true) {
        console.log(`${arrayAtletas[1].nome} completou a tarefa extra e subiu uma posicao`)
        arrayAtletas=mudarPosicaoAtleta(1, arrayAtletas, 0)
    }
    if (arrayAtletas[2].tarefaExtra == true) {
        console.log(`${arrayAtletas[2].nome} completou a tarefa extra e subiu uma posicao`)
        arrayAtletas = mudarPosicaoAtleta(2, arrayAtletas, 1)

    }
    //console.log(arrayAtletas)

    return `
    Resultado final
    1ª - Colocado ${arrayAtletas[0].nome}
    2ª - Colocado ${arrayAtletas[1].nome} 
    3ª - Colocado ${arrayAtletas[2].nome}  
    `

}

function mudarPosicaoAtleta(posicaoChegada, arrayAtletas, posicaoFinalExtra) {
    arrayAtletas.splice(posicaoFinalExtra, 0, arrayAtletas.splice(posicaoChegada, 1)[0]);
    return arrayAtletas;
}

console.log(positions('Rafael', 'Manoel', 'Daniel'))