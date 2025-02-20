const personagem = {
    nome: 'Thor',
    codinome: 'Deus Do Trovão',
    arma: 'Mjolnir',
    armaSecundaria: 'Storm Breaker',
    forca: 95, // considere de 0 a 100
    velocidade: 75, // considere de 0 a 100
    resistencia: 90, // considere de 0 a 100
    descricao: function () {
        return 'Nome do personagem: ' + this.nome + '\n' +
            'Codinome do personagem: ' + this.codinome + '\n' +
            'Arma principal: ' + this.arma + '\n' +
            'Arma secundaria: ' + this.armaSecundaria + '\n' +
            'Nivel de força: ' + this.forca + '\n' +
            'Nivel de velocidade: ' + this.velocidade + '\n' +
            'Nivel de resistencia: ' + this.resistencia;
    },
    calcularPontuacao: function () {
        return this.forca * 0.5 + this.velocidade * 0.3 + this.resistencia * 0.2;
    }
};

const personagem1 = {
    nome: 'Thanos',
    codinome: 'Titã',
    arma: 'Manopla do poder',
    armaSecundaria: '',
    forca: 100, // considere de 0 a 100
    velocidade: 65, // considere de 0 a 100
    resistencia: 95, // considere de 0 a 100
    descricao: function () {
        return 'Nome do personagem: ' + this.nome + '\n' +
            'Codinome do personagem: ' + this.codinome + '\n' +
            'Arma principal: ' + this.arma + '\n' +
            'Arma secundaria: ' + this.armaSecundaria + '\n' +
            'Nivel de força: ' + this.forca + '\n' +
            'Nivel de velocidade: ' + this.velocidade + '\n' +
            'Nivel de resistencia: ' + this.resistencia;
    },
    calcularPontuacao: function () {
        return this.forca * 0.5 + this.velocidade * 0.3 + this.resistencia * 0.2;
    }
};

const personagem2 = {
    nome: 'Tony Stark',
    codinome: 'Iron Man',
    arma: 'Armadura Tek',
    armaSecundaria: '$$$',
    forca: 70, // considere de 0 a 100
    velocidade: 90, // considere de 0 a 100
    resistencia: 65, // considere de 0 a 100
    descricao: function () {
        return 'Nome do personagem: ' + this.nome + '\n' +
            'Codinome do personagem: ' + this.codinome + '\n' +
            'Arma principal: ' + this.arma + '\n' +
            'Arma secundaria: ' + this.armaSecundaria + '\n' +
            'Nivel de força: ' + this.forca + '\n' +
            'Nivel de velocidade: ' + this.velocidade + '\n' +
            'Nivel de resistencia: ' + this.resistencia;
    },
    calcularPontuacao: function () {
        return this.forca * 0.5 + this.velocidade * 0.3 + this.resistencia * 0.2;
    }
};

const personagem3 = {
    nome: 'Peter Quill',
    codinome: 'Star Lord',
    arma: 'Arma Elemental',
    armaSecundaria: 'Botas a jato',
    forca: 70, // considere de 0 a 100
    velocidade: 85, // considere de 0 a 100
    resistencia: 60, // considere de 0 a 100
    descricao: function () {
        return 'Nome do personagem: ' + this.nome + '\n' +
            'Codinome do personagem: ' + this.codinome + '\n' +
            'Arma principal: ' + this.arma + '\n' +
            'Arma secundaria: ' + this.armaSecundaria + '\n' +
            'Nivel de força: ' + this.forca + '\n' +
            'Nivel de velocidade: ' + this.velocidade + '\n' +
            'Nivel de resistencia: ' + this.resistencia;
    },
    calcularPontuacao: function () {
        return this.forca * 0.5 + this.velocidade * 0.3 + this.resistencia * 0.2;
    }
};

const personagem4 = {
    nome: 'Adam',
    codinome: 'Adam Warlock',
    arma: 'Quantic magic',
    armaSecundaria: 'soul Bond',
    forca: 80, // considere de 0 a 100
    velocidade: 60, // considere de 0 a 100
    resistencia: 80, // considere de 0 a 100
    descricao: function () {
        return 'Nome do personagem: ' + this.nome + '\n' +
            'Codinome do personagem: ' + this.codinome + '\n' +
            'Arma principal: ' + this.arma + '\n' +
            'Arma secundaria: ' + this.armaSecundaria + '\n' +
            'Nivel de força: ' + this.forca + '\n' +
            'Nivel de velocidade: ' + this.velocidade + '\n' +
            'Nivel de resistencia: ' + this.resistencia;
    },
    calcularPontuacao: function () {
        return this.forca * 0.5 + this.velocidade * 0.3 + this.resistencia * 0.2;
    }
};

function compararHerois(heroi1, heroi2) {
    const pontuacaoHeroi1 = heroi1.calcularPontuacao();
    const pontuacaoHeroi2 = heroi2.calcularPontuacao();

    if (pontuacaoHeroi1 > pontuacaoHeroi2) {
        console.log(`${heroi1.nome} é mais forte que ${heroi2.nome}`);
    } else if (pontuacaoHeroi1 < pontuacaoHeroi2) {
        console.log(`${heroi2.nome} é mais forte que ${heroi1.nome}`);
    } else {
        console.log(`${heroi1.nome} e ${heroi2.nome} têm a mesma força`);
    }
}


compararHerois(personagem, personagem2);