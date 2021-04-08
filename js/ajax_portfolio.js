const portfolio1MainContiner = document.querySelector('#portfolio1MainContiner');

fetch('http://localhost:3000/portfolio1')
.then(
    function(response) {
        return response.json();
    }
).then(
    function (portfolio1) {
        for(let card of portfolio1){
            const 
        }
    }
)