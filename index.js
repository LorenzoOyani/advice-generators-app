const adviceBtn = document.querySelector(".new__advice");
const adviceId = document.getElementById("advice-id");
const quoteGenerator = document.querySelector(".text__quote")
const main = document.querySelector("main");
const cssLoader = document.querySelector('.css__loader')

adviceBtn.addEventListener("click", getQuotes);

 
    
let url = 'https://api.adviceslip.com/advice';
function getQuotes() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
             adviceId.textContent = data.slip.id;
            quoteGenerator.textContent = data.slip.advice;
            
        })
        .catch(error => console.log(error));
}
