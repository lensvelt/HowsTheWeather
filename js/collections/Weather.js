// A collection can only house one TYPE of model
var Weather = Backbone.Collection.extend({
  //Define the shape of the collection -> what kind of model will this collection hold:
  model: WeatherEntry, //reference to the 'class' constructor; not an instance of the model

  //we need to fully populate each instance of the model before we can 'push/add' it to the collection
  addWeatherEntry: function(zipcode) {

    //Jquery ajax request to API to get weather info based on specified Zip code
    $.get(
      'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial&APPID=5c680e5d8c8f29befb9f1c239dfae90b',
      function(data) {
        //pass in object with same shape as our model (WeatherEntry) & add to the collection
        this.add({
            zipcode: zipcode,
            city: data.name,
            weather: data.main.temp.toFixed(2)
          });

      }.bind(this)// 'this' is Jquery, unless we bind it to the collection itself
    );

  }

});
