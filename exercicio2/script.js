const check = (idade, ensinoMedio, ensinoSuperior) =>{
    if (idade >=18){
        console.log('é maior de idade')
    } else {
        console.lof('é menor de idade')
    }
    if (ensinoMedio === true){
        console.log('terminou o ensino medio')
    } else {
        console.log('não terminou o ensino médio')
    }
    if (ensinoSuperior === false) {
        console.log('não está fazendo faculdade')
    } else {
        console.lof('está fazendo faculdade')
    }
}

check(18, true, false)