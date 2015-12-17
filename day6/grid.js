//Write a program that prints the numbers from 1 to 100. 
//But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
//For numbers which are multiples of both three and five print "FizzBuzz."

//Be creative in the way you display your final output (i.e., don't simply print to the console; 
//challenge your sense of good UI design!). See below for the different levels of completion and try them all :)


function grid(numOfSquares) {

	var body = $('body');
	
	while (mainGrid.hasChildNodes()) {
    	mainGrid.removeChild(mainGrid.lastChild);
	}

	var dimensions = Math.floor(750/numOfSquares);
    
    for(var i = 0 ; i < numOfSquares*numOfSquares; i++){
    	console.log(i);
	    var square = $('<div></div>');
	    square.attr('style',"width: "+dimensions+"px; height: "+dimensions+"px;");
    	square.attr('class', 'square');
    	square.on('click', function(){

    		var red = Math.floor(Math.random()*256);
    		var green = Math.floor(Math.random()*256);
    		var blue = Math.floor(Math.random()*256);
    	
    		$(this).css('background-color', 'rgba('+red+', '+green+','+blue+',100)');

  
    	});
        square.appendTo(mainGrid);
    } 

}