const blockSpecialization = document.querySelector('#blockSpecialization');

fetch('https://my-json-server.typicode.com/karon16/KDA-Projet-Portfolio/specializations')
.then(
    function(response){
        return response.json();
    }
)
.then(function(specializations){
    for(const specialization of specializations){

        // creating elements
        const specializationContainer = document.createElement('div');
        specializationContainer.classList.add("specialisation__card", "specialisation__card--color", "specialisation__card--size", "specialisation__card--animation");

        const iconContainer = document.createElement('div');

        const icon = document.createElement('i');
        icon.classList.add("fas", "fa-laptop-code");

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

        blockSpecialization.appendChild(specializationContainer);
    }
})