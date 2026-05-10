const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

/* BOTÕES DAS ABAS */

for (let i = 0; i < botoes.length; i++) {

    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {

            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    };
}

/* CONTADORES */

const contadores = document.querySelectorAll(".contador");

const tempoObjetivo1 = new Date("2026-12-31T00:00:00");
const tempoObjetivo2 = new Date("2026-11-20T00:00:00");
const tempoObjetivo3 = new Date("2026-09-15T00:00:00");
const tempoObjetivo4 = new Date("2026-08-01T00:00:00");

const tempos = [
    tempoObjetivo1,
    tempoObjetivo2,
    tempoObjetivo3,
    tempoObjetivo4
];

function calculaTempo(tempoObjetivo) {

    const tempoAtual = new Date();

    const tempoFinal = tempoObjetivo - tempoAtual;

    if (tempoFinal <= 0) {

        return "Prazo finalizado.";
    }

    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos = segundos % 60;
    minutos = minutos % 60;
    horas = horas % 24;

    return dias + " dias "
        + horas + " horas "
        + minutos + " minutos "
        + segundos + " segundos";
}

function atualizaCronometro() {

    for (let i = 0; i < contadores.length; i++) {

        contadores[i].textContent = calculaTempo(tempos[i]);
    }
}

function comecaCronometro() {

    atualizaCronometro();

    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();