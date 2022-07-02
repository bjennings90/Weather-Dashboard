var key = "b9393b6852363e8a579f24ca8fe9f2bd";
var url = "https://api.openweathermap.org/data/2.5/weather?q=houston&appid=b9393b6852363e8a579f24ca8fe9f2bd";
var searchFormEl = document.querySelector('#search-form');
var nameInputEl = document.querySelector('#search');




var formSubmitHandler = function(event) {

fetch(url)
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log(err));
//     fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={b9393b6852363e8a579f24ca8fe9f2bd}")
// .then(response => response.json())
// .then(json => console.log(json));
}

searchFormEl.addEventListener('submit', formSubmitHandler);