var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");

button.addEventListener('click',function(){
    fetch(
        "api.openweathermap.org/data/2.5/weather?q=" +
          inputValue.value +
          "&appid=50fd6bbfeac12f2c482fff81df793012"
      )
          .then(response => response.json())
          .then(data => console.log(data))
      
      .catch(err => alert("Wrong city name!"))
      
})