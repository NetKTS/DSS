let apiUrl ="http://www.localhost:2002/api/getData/";
let RName = document.querySelector('.data-Name');

function getData(){
    axios.get(apiUrl)
    .then(function(response){
        console.log(response.data.data[0].name)
        RName.innerHTML = response.data.data[0].name;
    })
    .catch(function(error){
        RName.innerHTML = "(Error)";
    })
}

let button = document.querySelector(".data-button");
button.addEventListener("click",getData);