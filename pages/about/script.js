const compEdu = document.querySelector('.complementary');

function postCompEdu() {
    const comEduArray = [
        {
            title: "Python para Data Science(Alura)",
            date: "2021",
            description: "Princípios de Dada Science e Python com uso de Anaconda e Júpiter. Introdução à análise de dados"
        },
        {
            title: "Programação em Android básica pts1, 2 e 3(Alura)",
            date: "2021",
            description: "Princípios da programação mobile com uso de Java e Android Studio"
        },
        {
            title: "Java e Orientação a Objetos(Alura)",
            date: "2021",
            description: "Princípios da orientação a objetos e bases de Java com uso de Eclipse IDE"
        },
        {
            title: "Iniciante em Programação(Alura)",
            date: "2021",
            description: "Princípios da lógica de programação, introdução a HTML, CSS e JavaScript"
        }
    ]

    comEduArray.forEach((comEdu) => {
        const newCourse = document.createElement('article');
        const newTitle = document.createElement('p');
        const newDate = document.createElement('p');
        const newDescription = document.createElement('p');

        compEdu.appendChild(newCourse);
        newCourse.appendChild(newTitle);
        newCourse.appendChild(newDate);
        newCourse.appendChild(newDescription);

        newCourse.classList.add('course');
        newTitle.classList.add('text-description', 'course-name');
        newDate.classList.add('text-description', 'course-date');
        newDescription.classList.add('text-description', 'course-description');

        newTitle.innerHTML = comEdu.title;
        newDate.innerHTML = comEdu.date;
        newDescription.innerHTML = comEdu.description;

    })
}

postCompEdu();