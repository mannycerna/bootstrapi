//Dog API

let img = document.querySelector('#dog')

let dogButton = document.querySelector('button');

// console.log(1)
fetch('https://dog.ceo/api/breeds/image/random')
    .then(function(response){
        //console.log(response.json());
    //    console.log(2) 
       return response.json()
    })
    .then(function(data){
        // console.log(data);

        // console.log(data.message); //use this message url for the image
        // console.log(data.status);
        // console.log(3)
        img.src = data.message;
    })

// console.log(4)

dogButton.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(function(response){
        //console.log(response.json());
       return response.json()
    })
    .then(function(data){
        // console.log(data);

        // console.log(data.message); //use this message url for the image
        // console.log(data.status);
        img.src = data.message;
    })
})


//Weather API

let weatherForm = document.querySelector('#weatherForm');
let cityInput = document.querySelector('#cityInput');
let submitButon = document.querySelector('#submit');

let cityHeader = document.querySelector('#city');
let temp = document.querySelector('#temp');
let wind = document.querySelector('#wind');
let desc = document.querySelector('#desc');





weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(`Input: ${cityInput.value}`);

    fetch(encodeURI(`https://goweather.herokuapp.com/weather/{${cityInput.value}}`))

    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log(data);        
        temp.innerHTML = data.temperature;
        wind.innerHTML = data.wind;
        desc.innerHTML = data.description;
    })
    addCity();
    cityInput.value = '';



})
function addCity() {
    var x = document.querySelector("#cityInput").value;
    document.querySelector("#city").innerHTML = x;
  }