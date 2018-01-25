'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	function projectClick(e) { 
	$('.jumbotron h1').text("Javascript is connected");
    // prevent the page from reloading      
    e.preventDefault();
    $(".jumbotron h1").text("Javascript has taken control");
    $(".jumbotron p").toggleClass("active");
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    // $(this).css("background-color", "#7fff00");
    var containingProject = $(".project#project1");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
}
	$("#testjs").click(projectClick);
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	// $("a.thumbnail").click(projectClick);
}

