const portfolioRows = [
  document.querySelector("#portfolioRow1"),
  document.querySelector("#hidden-card"),
];

// function createHtmlElements() {}

function renderCard(card) {
  const portfolioCard = document.createElement("div");
  portfolioCard.classList.add("column");

  const portfolioCardMainContainer = document.createElement("div");
  portfolioCardMainContainer.classList.add("ui", "fluid", "card");

  const ImageBox = document.createElement("div");
  ImageBox.classList.add("ui", "slide", "masked", "reveal", "image");

  const visibleImage = document.createElement("img");
  visibleImage.classList.add("visible", "content");
  visibleImage.setAttribute("src", `${card.image1}`);
  visibleImage.setAttribute("alt", `${card.alt1}`);

  const hiddenImage = document.createElement("img");
  hiddenImage.classList.add("hidden", "content");
  hiddenImage.setAttribute("src", `${card.image2}`);
  hiddenImage.setAttribute("alt", `${card.alt2}`);

  const textBox = document.createElement("div");
  textBox.classList.add("content");

  const link = document.createElement("a");
  link.classList.add("header");
  link.setAttribute("href", `${card.url}`);
  link.textContent = `${card.title}`;

  const description = document.createElement("div");
  description.classList.add("description");
  description.textContent = `${card.description}`;

  ImageBox.appendChild(visibleImage);
  ImageBox.appendChild(hiddenImage);

  portfolioCardMainContainer.appendChild(ImageBox);

  textBox.appendChild(link);
  textBox.appendChild(description);

  portfolioCardMainContainer.appendChild(textBox);

  portfolioCard.appendChild(portfolioCardMainContainer);

  return portfolioCard;
}

function renderPortfolio(portfolio, portfolioRow) {
  for (const card of portfolio.portfolio) {
    const portfolioCard = renderCard(card);
    portfolioRow.appendChild(portfolioCard);
    console.log(portfolio)

  }
}

function getAndRenderPortfolios(portfolios) {
  let index = 0;
  for (const portfolio of portfolios) {
    renderPortfolio(portfolio, portfolioRows[index]);
    index++;
  }
}

const fetchUrl =
  "https://my-json-server.typicode.com/karon16/KDA-Projet-Portfolio/portfolios";

fetch(fetchUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (portfolios) {
    getAndRenderPortfolios(portfolios);
  });

