
let apiUrl ="http://www.localhost:2002/api/getData/";
let RName = document.querySelector('.Data-name');

function getData(){
    axios.get(apiUrl)
    .then(function(response){
        console.log(response.data.data[0].name)
        RName.innerHTML = response.data.data[0].name;
        return response.data.data[0].name;
    })
    .catch(function(error){
        RName.innerHTML = "(Error)";
        console.log(error);
    })
}