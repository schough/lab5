var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	console.log("addFriend called");

	// Get parameter values
	var name = req.query.name;
	var description = req.query.description

	// Add friend to data base
	var newFriend = {
		name: name,
		description: description,
		imageURL: "http://lorempixel.com/500/500/people"
	}
	data.friends.push(newFriend);
	
	// Takes back to index route
	res.redirect('/');
 }