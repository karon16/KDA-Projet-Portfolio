const portfolioRow1 = document.querySelector('#portfolioRow1');
const portfolioRow2 = document.querySelector('#hidden-card')
fetch('http://localhost:3000/portfolios')
.then(
    function(response) {
        return response.json();
    }
).then(function (portfolios) {
    for (const row of portfolios) {
        let portfolio1;

        if (portfolio1 = row.portfolio1) {
            for (const card of portfolio1) {
                const portfolioCard = document.createElement('div');
                portfolioCard.classList.add("column");
        
                const portfolioCardMainContainer = document.createElement('div');
                portfolioCardMainContainer.classList.add("ui", "fluid", "card");
        
                const ImageBox = document.createElement('div');
                ImageBox.classList.add("ui", "slide", "masked", "reveal", "image");
        
                const visibleImage = document.createElement('img');
                visibleImage.classList.add("visible", "content");
                visibleImage.setAttribute('src', `${card.image1}`);
                visibleImage.setAttribute('alt', `${card.alt1}`);
        
                const hiddenImage = document.createElement('img');
                hiddenImage.classList.add("hidden", "content");
                hiddenImage.setAttribute('src', `${card.image2}`);
                hiddenImage.setAttribute('alt', `${card.alt2}`);
        
                const textBox = document.createElement('div');
                textBox.classList.add('content');
        
                const link = document.createElement('a');
                link.classList.add('header');
                link.setAttribute('href', `${card.url}`);
                link.textContent = `${card.title}`
        
                const description = document.createElement('div');
                description.classList.add('description');
                description.textContent = `${card.description}`;
        
                ImageBox.appendChild(visibleImage);
                ImageBox.appendChild(hiddenImage);
        
                portfolioCardMainContainer.appendChild(ImageBox);
        
                textBox.appendChild(link);
                textBox.appendChild(description);
        
                portfolioCardMainContainer.appendChild(textBox);
        
                portfolioCard.appendChild(portfolioCardMainContainer);
        
                portfolioRow1.appendChild(portfolioCard);
            }
        }

        let portfolio2;
        if (portfolio2 = row.portfolio2) {
            for (const card of portfolio2) {
                const portfolioCard = document.createElement('div');
                portfolioCard.classList.add("column");
        
                const portfolioCardMainContainer = document.createElement('div');
                portfolioCardMainContainer.classList.add("ui", "fluid", "card");
        
                const ImageBox = document.createElement('div');
                ImageBox.classList.add("ui", "slide", "masked", "reveal", "image");
        
                const visibleImage = document.createElement('img');
                visibleImage.classList.add("visible", "content");
                visibleImage.setAttribute('src', `${card.image1}`);
                visibleImage.setAttribute('alt', `${card.alt1}`);
        
                const hiddenImage = document.createElement('img');
                hiddenImage.classList.add("hidden", "content");
                hiddenImage.setAttribute('src', `${card.image2}`);
                hiddenImage.setAttribute('alt', `${card.alt2}`);
        
                const textBox = document.createElement('div');
                textBox.classList.add('content');
        
                const link = document.createElement('a');
                link.classList.add('header');
                link.setAttribute('href', `${card.url}`);
                link.textContent = `${card.title}`
        
                const description = document.createElement('div');
                description.classList.add('description');
                description.textContent = `${card.description}`;
        
                ImageBox.appendChild(visibleImage);
                ImageBox.appendChild(hiddenImage);
        
                portfolioCardMainContainer.appendChild(ImageBox);
        
                textBox.appendChild(link);
                textBox.appendChild(description);
    
                portfolioCardMainContainer.appendChild(textBox);
                portfolioCard.appendChild(portfolioCardMainContainer);   
                portfolioRow2.appendChild(portfolioCard);
            }
        }
    }

});



    
