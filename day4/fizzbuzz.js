//Write a program that prints the numbers from 1 to 100. 
//But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
//For numbers which are multiples of both three and five print "FizzBuzz."

//Be creative in the way you display your final output (i.e., don't simply print to the console; 
//challenge your sense of good UI design!). See below for the different levels of completion and try them all :)


function fizzbuzz() {

	var body = $('body');
	

	var output;

	for(var num = 1 ; num <= 100 ; num++){
		var div = $('<div></div>');
		output ='';

		if(num%3 === 0){
			output += 'Fizz'
		}
		if(num%5 === 0){
			output += 'Buzz'
		}

		div.text(output === ''? num : output);
		div.attr('class', output);
		div.appendTo(body);
	}
    

}