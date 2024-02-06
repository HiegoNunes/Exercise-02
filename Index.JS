function placar (Vitorias, Derrotas){
    let resultadoFinal = Vitorias - Derrotas
    return resultadoFinal}

let saldoRankeadas = placar (70,28)

if (saldoRankeadas <10){
    console.log("O heroi tem saldo de " + saldoRankeadas + " e está no nível Ferro")

}else if (saldoRankeadas >= 11 && saldoRankeadas <=20){
    console.log("O heroi tem saldo de " + saldoRankeadas + " e está no nível Bronze")

}else if (saldoRankeadas >= 21 && saldoRankeadas <=50){
    console.log("O heroi tem saldo de " + saldoRankeadas + " e está no nível Prata")

}else if (saldoRankeadas >= 51 && saldoRankeadas <=80){
    console.log("O heroi tem saldo de " + saldoRankeadas + " e está no nível Ouro")

}else if (saldoRankeadas >= 81 && saldoRankeadas <=90){
    console.log("O heroi tem saldo de " + saldoRankeadas + " e está no nível Diamante")

}else if (saldoRankeadas >= 91 && saldoRankeadas <=100){
    console.log("O heroi tem saldo de " + saldoRankeadas + " e está no nível Lendario")

}else console.log("O heroi tem saldo de " + saldoRankeadas + " e está no nível Imortal")