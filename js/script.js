$(document).ready(function() {

	// ------------------------------------------------------ Waypoints

	$('.stick-it').waypoint('sticky', {
	  wrapper: '<div class="sticky-wrapper" />',
	  stuckClass: 'stuck'
	});
	
	$('#about').waypoint(function() {
	});
	
	$('#portfolio').waypoint(function() {
	});
	
	$('#contact').waypoint(function() {  
	});
	
	// ------------------------------------------------------ Sliders
	
	$('.s1').cycle({ 
	    fx:     'scrollHorz', 
	    timeout	:  0, 
	    slideResize: 0,
	    containerResize: 1,
	    prev    : '#prev1',  
	    next    : '#next1'
	});
	
	$('.s2').cycle({ 
	    fx:     'scrollHorz', 
	    timeout	:  0, 
	    slideResize: 0,
	    containerResize: 1,
	    prev    : '#prev2',  
	    next    : '#next2'
	});
	
	$('.s3').cycle({ 
	    fx:     'scrollHorz', 
	    timeout	:  0, 
	    slideResize: 0,
	    containerResize: 1,
	    prev    : '#prev3',  
	    next    : '#next3'
	});
	
	$('.s4').cycle({ 
	    fx:     'scrollHorz', 
	    timeout	:  0, 
	    slideResize: 0,
	    containerResize: 1,
	    prev    : '#prev4',  
	    next    : '#next4'
	});
	
	$('.s5').cycle({ 
	    fx:     'scrollHorz', 
	    timeout	:  0, 
	    slideResize: 0,
	    containerResize: 1,
	    prev    : '#prev5',  
	    next    : '#next5'
	});
	
});