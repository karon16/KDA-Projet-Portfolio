const blockIdentities = document.querySelector('#blocIdentities');

fetch("https://my-json-server.typicode.com/karon16/KDA-Projet-Portfolio/identities")
.then(
    function(response) {
        return response.json();
    }
)
.then(function (identities) {
    for (let identity of identities) {

        // creating and assigning element
        const identitiesMainContainer = document.createElement('div');
        identitiesMainContainer.classList.add("ui", "relaxed", "fluid", "stackable", "grid");

        const profilePhotoContainer = document.createElement('div');
        profilePhotoContainer.classList.add("five", "wide", "column", "about__profile");

        const profilePhoto = document.createElement('img');
        profilePhoto.classList.add("about__photo");
        profilePhoto.setAttribute('alt', `${identity.alt}`);
        profilePhoto.setAttribute('src', `${identity.image}`);

        const biographyMainContainer = document.createElement('div');
        biographyMainContainer.classList.add("eleven", "wide", "column", "middle", "aligned", "about__biography");

        const biographyNames = document.createElement('span');
        biographyNames.classList.add("bold-text--color");
        biographyNames.textContent = `${identity.firstName} ${identity.lastName}`;

        const biographyHeader = document.createElement('p');
        biographyHeader.classList.add("paragraphs--font-size", "biography__greetings-size");
        biographyHeader.textContent = `Hey, Je suis `;

        const biographyParagraph = document.createElement('p');
        biographyParagraph.classList.add("paragraphs--font-size", "biography__paragraph--text","biography__paragraph--margin", "paragraphs--font-family");
        biographyParagraph.textContent = `${identity.Biography}`;

        const cvButtonContainer = document.createElement('div');
        cvButtonContainer.classList.add("sixteen", "wide", "column", "right", "aligned");

        const cvButtonLink = document.createElement('a');
        cvButtonLink.classList.add("btn", "btn--hidden", "btn--color");
        cvButtonLink.setAttribute('target', '_blank');
        cvButtonLink.setAttribute('href', `${identity.cvLink}`)
        cvButtonLink.textContent = 'VOIR MON CV'

        // adding element to DOM
        // profile photo
        profilePhotoContainer.appendChild(profilePhoto);
        identitiesMainContainer.appendChild(profilePhotoContainer);

        // paragraphs
        biographyHeader.appendChild(biographyNames);
        biographyMainContainer.appendChild(biographyHeader);
        biographyMainContainer.appendChild(biographyParagraph);

        // button
        cvButtonContainer.appendChild(cvButtonLink);
        biographyMainContainer.appendChild(cvButtonContainer);

        // main Container
        identitiesMainContainer.appendChild(biographyMainContainer);
        blockIdentities.appendChild(identitiesMainContainer);

    }
});