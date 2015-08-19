var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trip-planner');
var db = mongoose.connection;

var placeSchema = new mongoose.Schema({
  address: String,
  city: String,
  state: String,
  phone: String,
  location: [Number]
});

var hotelSchema = new mongoose.Schema({
  name: String,
  place: String,
  num_stars: {type:Number, min:1, max:5},
  ameneties: CSV

});

var activitySchema = new mongoose.Schema({
  name: String,
  place: String,
  age_range: String
});

var restaurantSchema = new mongoose.Schema({
  name: String,
  place: String,
  cuisines:  { type : String, enum:[]},
  price: {type:Number, min:1, max:5}
});
