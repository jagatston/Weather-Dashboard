// Variables
var searchForm = $("#search-form");
var searchTermEl = $("#search-term");
var imagesDisplay = $("#images-display");

// function to with api key
searchForm.on("submit", function (event) {
  event.preventDefault();

  var searchTerm = searchTermEl.val();
  console.log(searchTerm);
  var apiKey = "50fd6bbfeac12f2c482fff81df793012";

  var queryURL =
    "http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={50fd6bbfeac12f2c482fff81df793012}" +
    apiKey +
    "&q=" +
    searchTerm;
  
  fetch(queryURL)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
    });
  
});

