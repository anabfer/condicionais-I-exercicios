function number (){
    const n = prompt('Digite um número')
    if(n % 2 === 0){
        return 'O número é par'
    }else {
        return 'O número é ímpar'
    }
}

console.log(number())