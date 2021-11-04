let order={};
let clickedorder={};
let score = 0;

//0 - verde
//vermelho
//amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('yellow');

//ordens de cores aleatórias
let shuffleorder = () => {
    let colororder = Math.floor(Math.random() = 4)
    order[order.length] = colororder;
    clickedorder = [];

    for(let i in order) {
        let elementcolor = createcolorelement(order[i]);
        lightcolor(elementcolor, Number[i] + 1)
    }
} 

//acende a próxima cor
let lightcolor = (element, number) => {
    time = time * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, tempo - 250);
    setTimeout(() => {
        element.classlist.remove('selected')
    });
}

//checa se os botões clicados foram corretos
let checkorder = () => {
    for(let i in clickedorder) {
        if(clickedorder[i] != order[i]){
            lose();
            break;
        }
    }
    if(clickedorder.length == order.length) {
        alert('Pontuacao: ${score}\nVocê acertou! Iniciando próximo nível!');
        nextlevel();
    }
}

//função para clique do usuário
let click = (color) => {
    clickedorder[clickedorder.length] = color;
    createcolorelement(color).classList.add('selected');

    setTimeout(() => {
        createcolorelement(color).classList.remove('selected');
        checkorder();
    },260)
}

//função que retorna a cor
let createcolorelement = (color) => {
    if(color == 0) {
        return green;
    } else if (color == 1){
        return red; 
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//função referente ao próximo nível do jogo
let nextlevel = () => {
    score++;
    shuffleorder();

}

//função para quando o jogador perde
let lose = () => {
    alert('você perdeu, pontuação: ${score}!\nClique ok para reiniciar');
    order = [];
    clickedorder = [];

    playgame();
}


//função de inícip
let playgame = () => {
    alert('bem vindo ao genesis');
    score = 0;

    nextlevel();
}

//eventos de click
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//green.addEventListener('click',click(0));
//red.addEventListener('click',click(1));
//yellow.addEventListener('click',click(2));
//blue.addEventListener('click',click(3));

//início do jogo
playgame();