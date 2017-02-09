'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

	/* Click function for names */
	$(".listen").click(function(event) {
		// Prevent page from reloading
		event.preventDefault();

		// Print onto console
		console.log("My name was clicked!");
		// Get name
		var name = $(this).text();
		console.log(name);
		// Get different name
		var emna = anagrammedName( name );
		// Change name
		$(this).text( emna );
	});
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
}

function anagrammedName(name) {
	// Thanks, Internet Anagram Server!
	
	if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (name == "Allen Newell") {
		return "Ellen All New";
	}
	else if (name == "Lucy Suchman") {
		return "Lunacy Chums";
	}
	else if (name == "Grace Hopper") {
		return "Gear Chopper";
	}
	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}