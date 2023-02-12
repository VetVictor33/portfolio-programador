const projectCards = document.querySelector('.projects-cards');


function link(card, adress) {
    card.addEventListener('click', () => {
        window.location.replace(adress)
    })
};

function postProjects() {
    const projectsArrays = [
        {
            imgSrc: "../assets/curriculo-web.png",
            title: "Currículo Web",
            description: "Primeiro projeto realizado para sedimentar os conhecimentos em HTML5 e CSS3, além de arriscar um pouco de JavaScript",
            link: "https://github.com/VetVictor33/curriculo-web"
        },
        {
            imgSrc: "../assets/portfolio-escritor.png",
            title: "Portfoílio de Escritor",
            description: "Utilizei HTML5, CSS3 e um pouco de JavaScript para apresentar alguns dos textos que produzi para um projeto pessoal relacionado à produção de crônicas e contos.",
            link: "https://github.com/VetVictor33/portfolio-escritor"
        },
        {
            imgSrc: "../assets/duolingo-clone.png",
            title: "Clone da home page do Duolingo",
            description: "Uma forma que encontrei de treinar como seria atender a uma demanda de um designer ao reproduzir a página do site de ensino de idiomas. Ainda não adicionei responsividade, porém planejo fazê-lo no futuro.",
            link: "https://github.com/VetVictor33/clone-duolingo"
        },
        {
            imgSrc: "../assets/desafio-portfolio.png",
            title: "Portfólio",
            description: "Nesse projeto criei um portfólio fictício com base em um layout do figma como forma de avaliação de um curso. As tecnologias utilizadas foram CSS e HTML.",
            link: "https://github.com/VetVictor33/desafio-portfolio"
        },
        {
            imgSrc: "../assets/form-signup.png",
            title: "Formulário de inscrição",
            description: "Projeto passado como exercício de um curso no qual foi proposto o desenvolvimento de um formulário de inscrição em vestibular. Foi utilizado HTML, CSS e JavaScript para validar os dados.",
            link: "https://github.com/VetVictor33/formulario-inscricao"
        },
        {
            imgSrc: "../assets/form.png",
            title: "Formulário para Login",
            description: "Projeto passado como exercício de um curso no qual foi proposto o desenvolvimento do Front End de login e sign in de um site fictício com base em um layout do figma. Foi utilizado HTML, CSS e JavaScript para validar os dados e adicionar comportamento ao site.",
            link: "https://github.com/VetVictor33/desafio-02"
        }
    ]
    for (let i = 0; i < projectsArrays.length; i++) {
        const newCard = document.createElement('div');
        const cardImgDiv = document.createElement('div');
        const projectTitle = document.createElement('h2');
        const projectDescription = document.createElement('p');

        newCard.classList.add('project-card');
        cardImgDiv.classList.add('card-img');

        projectCards.appendChild(newCard);
        newCard.appendChild(cardImgDiv);
        newCard.appendChild(projectTitle);
        newCard.appendChild(projectDescription);

        cardImgDiv.style.backgroundImage = `url(${projectsArrays[i].imgSrc})`;
        projectTitle.innerHTML = projectsArrays[i].title;
        projectDescription.innerHTML = projectsArrays[i].description;

        link(newCard, projectsArrays[i].link)

    }
}

postProjects()