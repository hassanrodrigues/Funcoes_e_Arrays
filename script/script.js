function positions(fisrtPlace, secondPlace, lastPlace) {
    let arrayAtletas = [{
            name: fisrtPlace,
            tarefaExtra: true
        },
        {
            name: secondPlace,
            tarefaExtra: false
        },
        {
            name: lastPlace,
            tarefaExtra: true
        }
    ]
    console.log(arrayAtletas)

    if (arrayAtletas[0].tarefaExtra == true) {
        console.log("Completou a tarefa extra e subiu uma posicao");
        mudarPosicaoAtleta((arrayAtletas.length - 1), arrayAtletas, 1)
    }
    if (arrayAtletas[1].tarefaExtra == true) {
        console.log("Completou a tarefa extra e subiu uma posicao")
        mudarPosicaoAtleta((arrayAtletas.length - 1), arrayAtletas, 1)
    }
    if (arrayAtletas[2].tarefaExtra == true) {
        console.log("Completou a tarefa extra e subiu uma posicao")
        mudarPosicaoAtleta((arrayAtletas.length - 1), arrayAtletas, 1)
    }
    console.log(arrayAtletas)

}

function mudarPosicaoAtleta(posicaoInicio, arrayAtletas, posicaoFinal) {
    arrayAtletas.splice(posicaoFinal, 0, arrayAtletas.splice(posicaoInicio, 1)[0]);
    return arrayAtletas;
}



positions('rafael', 'hassan', 'daniel')