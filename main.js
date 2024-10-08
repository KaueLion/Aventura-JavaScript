let vida = 100;
let forca = 10;
let recursos = 0;
let rodadas = 5;

function start() {
    console.log("Bem-vindo a A Jornada do Aventureiro!");
    console.log(`Você começa com: VIDA: ${vida}, FORÇA: ${forca}, RECURSO: ${recursos}`);
    jogarRodada(0);
}

function jogarRodada(rodadaAtual) {
    if (rodadaAtual >= rodadas || vida <= 0) {
        fimDeJogo();
        return;
    }

    console.log(`\nRodada ${rodadaAtual + 1}:`);
    let desafio = Math.random();
    if (desafio < 0.5) {
        combate();
    } else if (desafio < 0.8) {
        armadilha();
    } else {
        recursosEncontrados();
    }
    
    console.log(`Após a rodada: VIDA: ${vida}, FORÇA: ${forca}, RECURSO: ${recursos}`);
    jogarRodada(rodadaAtual + 1);
}

function combate() {
    console.log("Você encontrou um monstro! Prepare-se para lutar.");
    let dano = Math.floor(Math.random() * forca);
    let acao = prompt("Digite 'a' para atacar ou 'd' para defender:");

    if (acao === 'a') {
        console.log(`Você atacou e causou ${dano} de dano!`);
    } else if (acao === 'd') {
        console.log("Você se defendeu e não tomou dano.");
        return;
    }
    
    let danoRecebido = Math.floor(Math.random() * 20);
    vida -= danoRecebido;
    console.log(`Você recebeu ${danoRecebido} de dano. Sua vida agora é: ${vida}`);
}

function armadilha() {
    console.log("Você caiu em uma armadilha!");
    let danoRecebido = Math.floor(Math.random() * 30);
    vida -= danoRecebido;
    console.log(`Você recebeu ${danoRecebido} de dano. Sua vida agora é: ${vida}`);
}

function recursosEncontrados() {
    console.log("Você encontrou um recurso!");
    recursos += 1;
    let acao = prompt("Digite 'v' para aumentar a vida ou 'f' para aumentar a força:");
    if (acao === 'v') {
        vida += 20;
        console.log("Sua vida aumentou em 20.");
    } else if (acao === 'f') {
        forca += 5;
        console.log("Sua força aumentou em 5.");
    }
}

function fimDeJogo() {
    if (vida <= 0) {
        console.log("Você foi derrotado! Fim de jogo.");
    } else {
        console.log("Parabéns! Você completou todas as rodadas e sobreviveu.");
    }
}
