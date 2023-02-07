const curriculoWeb = document.querySelector('#curriculo-web');
const portfolioEscrito = document.querySelector('#portfolio-escritor');
const cloneDuolingo = document.querySelector('#clone-duolingo');
const desafioPortfolio = document.querySelector('#desafio-portfolio');
const formSignup = document.querySelector('#form-signup');
const form = document.querySelector('#form');


function link(card, adress) {
    card.addEventListener('click', () => {
        window.location.replace(adress)
    })
};

link(curriculoWeb, 'https://github.com/VetVictor33/curriculo-web');
link(portfolioEscrito, 'https://github.com/VetVictor33/portfolio-escritor');
link(cloneDuolingo, 'https://github.com/VetVictor33/clone-duolingo');
link(desafioPortfolio, 'https://github.com/VetVictor33/desafio-portfolio');
link(formSignup, 'https://github.com/VetVictor33/formulario-inscricao');
link(form, 'https://github.com/VetVictor33/desafio-02');