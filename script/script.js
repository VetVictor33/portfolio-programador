const projectCards = document.querySelector('.projects-cards');


function link(card, adress) {
    card.addEventListener('click', () => {
        window.location.replace(adress)
    })
};

function postProjects() {
    const projectsArrays = [
        {
            imgSrc: "./assets/projects/curriculo-web.png",
            title: "Currículo Web",
            description: "Primeiro projeto realizado para sedimentar os conhecimentos em HTML5 e CSS3, além de arriscar um pouco de JavaScript",
            link: "https://github.com/VetVictor33/curriculo-web"
        },
        {
            imgSrc: "./assets/projects/portfolio-escritor.png",
            title: "Portfólio de Escritor",
            description: "Utilizei HTML5, CSS3 e um pouco de JavaScript para apresentar alguns dos textos que produzi para um projeto pessoal relacionado à produção de crônicas e contos.",
            link: "https://github.com/VetVictor33/portfolio-escritor"
        },
        {
            imgSrc: "./assets/projects/duolingo-clone.png",
            title: "Clone da home page do Duolingo",
            description: "Uma forma que encontrei de treinar como seria atender a uma demanda de um designer ao reproduzir a página do site de ensino de idiomas. Ainda não adicionei responsividade, porém planejo fazê-lo no futuro.",
            link: "https://github.com/VetVictor33/clone-duolingo"
        },
        {
            imgSrc: "./assets/projects/desafio-portfolio.png",
            title: "Portfólio",
            description: "Nesse projeto criei um portfólio fictício com base em um layout do figma como forma de avaliação de um curso. As tecnologias utilizadas foram CSS e HTML.",
            link: "https://github.com/VetVictor33/desafio-portfolio"
        },
        {
            imgSrc: "./assets/projects/form-signup.png",
            title: "Formulário de inscrição",
            description: "Projeto passado como exercício de um curso no qual foi proposto o desenvolvimento de um formulário de inscrição em vestibular. Foi utilizado HTML, CSS e JavaScript para validar os dados.",
            link: "https://github.com/VetVictor33/formulario-inscricao"
        },
        {
            imgSrc: "./assets/projects/form.png",
            title: "Formulário para Login",
            description: "Projeto passado como exercício de um curso no qual foi proposto o desenvolvimento do Front End de login e sign in de um site fictício com base em um layout do figma. Foi utilizado HTML, CSS e JavaScript para validar os dados e adicionar comportamento ao site.",
            link: "https://github.com/VetVictor33/desafio-02"
        },
        {
            imgSrc: "./assets/projects/tech-store.png",
            title: "Tech Store",
            description: "Loja de produtos eletrônicos feita baseada em um curso da Skillshare. As technologias utilizadas foram HTML, CSS e JavaScript. Lancei mão da criação de novos elementos da DOM por meio do script para dar comportamento ao site, permitindo selecionar itens específicos, relizar filtragem por preço, categoria, além de busca pelo nome do produto, tudo isso sem necessidade de trocar a página. Também brinquei um pouco com Local Storage de forma a salvar os item selecionados pelo usuário e colocá-los no carrinho de compras.",
            link: "https://github.com/VetVictor33/tech-store-skillshare"
        }, {
            imgSrc: "./assets/projects/gourmet-burger.png",
            title: "Gourmet Burger",
            description: "Site que apresenta uma franquia de restaurantes baseado num curso da Skillshare. Todo o projeto foi feito utilizando o framework Bootstrap para estilizar a páginas e adicionar comportamentamento. As características mais interessantes do projeto são a responsividade, a presença do carousel, de um menu dropdown e de um modal.",
            link: "https://github.com/VetVictor33/skillshare-gourmet-burger"
        }
    ]
    let j = projectsArrays.length
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

        newCard.style.order = `${j}`
        j--

        link(newCard.firstChild, projectsArrays[i].link)


    }
}

postProjects()