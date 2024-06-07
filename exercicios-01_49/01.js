let prompt = require('prompt-sync')();

function calcularTempoDeVidaPerdido(cigarrosPorDia, anosFumando) {
    const minutosPerdidosPorCigarro = 10;
    const diasPorAno = 365;
    const minutosPorDia = 24 * 60;

    const totalCigarrosFumados = cigarrosPorDia * diasPorAno * anosFumando;
    const totalMinutosPerdidos = totalCigarrosFumados * minutosPerdidosPorCigarro;
    const totalDiasPerdidos = totalMinutosPerdidos / minutosPorDia;

    return totalDiasPerdidos;
}

const cigarrosPorDia = parseInt(prompt("Quantos cigarros você fuma por dia: "));
const anosFumando = parseInt(prompt("Por quantos anos você fumou: "));

const tempoDeVidaPerdido = calcularTempoDeVidaPerdido(cigarrosPorDia, anosFumando);

console.log(`Você perdeu aproximadamente ${tempoDeVidaPerdido.toFixed(0)} dias de vida devido ao cigarro.`);
