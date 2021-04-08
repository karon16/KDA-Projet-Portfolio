const blockSpecialization = document.querySelector('#blockSpecialization');
const specialiationMain = document.querySelector('#specialiationMain')

fetch('https://my-json-server.typicode.com/karon16/KDA-Projet-Portfolio/specializations')
.then(
    function(response){
        return response.json();
    }
)
.then(function(specializations){
    for(const specialization of specializations){

        // creating elements
        const specialisationMainContainer = document.createElement('div');
        specialisationMainContainer.classList.add("column", "center", "aligned")

        const specializationContainer = document.createElement('div');
        specializationContainer.classList.add("specialisation__card", "specialisation__card--color", "specialisation__card--size", "specialisation__card--animation");

        const iconContainer = document.createElement('div');

        const icon = document.createElement('i');
        icon.classList.add(`${specialization.iconClass1}`, `${specialization.iconClass2}`);

        const title = document.createElement('h3');
        title.classList.add("third__title--size");
        title.textContent = `${specialization.title}`;

        const paragraph = document.createElement('p');
        paragraph.classList.add("paragraphs--font-family", "paragraphs--font-size");
        paragraph.textContent = `${specialization.paragraph}`;

        // adding element
        iconContainer.appendChild(icon);
        specializationContainer.appendChild(iconContainer);

        specializationContainer.appendChild(title);
        specializationContainer.appendChild(paragraph);

        specialisationMainContainer.appendChild(specializationContainer);
        blockSpecialization.appendChild(specialisationMainContainer);

    }
        const btnContainer = document.createElement('div');
        btnContainer.classList.add("btn--cente", "btn--centered-size");

        const btnLink = document.createElement('a');
        btnLink.classList.add("btn", "btn--color", "btn--cente");
        btnLink.setAttribute('href', 'mailto:hristopherbuhendwa2000@gmail.com');
        btnLink.textContent = "ENGAGEZ-MOI"

        btnContainer.appendChild(btnLink);
        specialiationMain.appendChild(btnContainer);
})

// const 