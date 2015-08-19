var express = require("express");
var router = express.Router();
var models = require("../models");
module.exports = router;




router.get("/", function (request, response, next) {
	// models.Restaurant.find({})
	// 	.then(function (restaurants) {
	// 		response.render("index", {restaurants: restaurants});
	// 	})
	// 	.then(null, function (error) {
	// 		next(error);
	// 	});

	var promises = [];

	promises.push(models.Restaurant.find().exec());
	promises.push(models.Hotel.find().exec());
	promises.push(models.Activity.find().exec());

	Promise.all(promises)
		.then(function (dataArr) {
			response.render("index", {
				restaurants: dataArr[0],
				hotels: dataArr[1],
				activities: dataArr[2]
			});
		});
});




