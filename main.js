let jogador = {
    vida: 100,
    forca: 10,
    recursos: 50,
};

const rodadas = 5;

function start() {
    console.log("O jogo começou!");
    for (let i = 1; i <= rodadas; i++) {
        console.log(`Rodada ${i}`);
        console.log(`Vida: ${jogador.vida}`);
        console.log(`Força: ${jogador.forca}`);
        console.log(`Recursos: ${jogador.recursos}`);

        let desafio = Math.floor(Math.random() * 3); // 0: perder vida, 1: ganhar força, 2: perder recursos
        enfrentarDesafio(desafio);

        if (jogador.vida <= 0) {
            console.log("Você foi derrotado! Fim de jogo.");
            return;
        }
    }
    console.log("Você completou todas as rodadas! Vitória!");
}

function enfrentarDesafio(desafio) {
    switch (desafio) {
        case 0:
            let dano = Math.floor(Math.random() * 30);
            jogador.vida -= dano;
            console.log(`Você enfrentou um desafio e perdeu ${dano} de vida!`);
            break;
        case 1:
            let ganho = Math.floor(Math.random() * 5);
            jogador.forca += ganho;
            console.log(`Você enfrentou um desafio e ganhou ${ganho} de força!`);
            break;
        case 2:
            let perda = Math.floor(Math.random() * 20);
            jogador.recursos -= perda;
            console.log(`Você enfrentou um desafio e perdeu ${perda} recursos!`);
            break;
    }
}