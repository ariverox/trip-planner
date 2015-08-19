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
  place: [],
  num_stars: {type:Number, min:1, max:5},
  ameneties: { type : String, enum:[]}

});

var activitySchema = new mongoose.Schema({
  name: String,
  place: [],
  age_range: String
});

var restaurantSchema = new mongoose.Schema({
  name: String,
  place: [],
  cuisines:  { type : String, enum:[]},
  price: {type:Number, min:1, max:5}
});


var Place = mongoose.model("Place", placeSchema);
var Hotel = mongoose.model("Hotel", hotelSchema);
var Activity = mongoose.model("Activity", activitySchema);
var Restaurant = mongoose.model("Restaurant", restaurantSchema);



module.exports = {
  Place: Place,
  Hotel: Hotel,
  Activity: Activity,
  Restaurant: Restaurant
};