var colour = ['red', 'blue', 'green', 'yellow', 'orange', 'black', 'pink'];
var colourSequence;
var playSequence;
var currentLevel;

function createSimon() {

	var body = $('body');
	var announcement = $('<div></div>')
	announcement.attr('id',"announcement");
	
	announcement.appendTo(body);

	var gameBoard = $('<table></table>');
	gameBoard.attr('id',"gameBoard");

	var row = $('<tr></tr>');

	for(var i = 0 ; i < colour.length ; i++){
		var col = $('<td></td>');
		col.attr('id', i);
		col.attr('bgcolor',colour[i]);
		col.on('click', play);
		col.appendTo(row);
	}
		
	row.appendTo(gameBoard);
    gameBoard.appendTo(body);

    currentLevel = 1;
    startGame(currentLevel);

}

function startGame(level){

	$('#announcement').text("Level "+level+" - Watch the colour sequence");

	var item;
	var j = 0;
	colourSequence = [];
	var selectedSquare;
	var r;
	for(var i = 0 ; i < level ; i++){
		r = Math.floor(Math.random()*colour.length);
		//console.log('r = '+r);
		colourSequence.push(r);
	}

	//console.log('colourSequence='+colourSequence.length);
	
	while(j < colourSequence.length){
		selectedSquare = colourSequence[j];

		//console.log('colour='+selectedSquare);

		item = $('#'+selectedSquare);

		//console.log('item='+item);

		setTimeout(colourSquare(item, 0.2), 2000*j);
		setTimeout(colourSquare(item, 1), 2000*(j+1));
		
		j++;
	}

	playSequence = 0;
	setTimeout(function(){
		$('#announcement').text("Level "+level+" - Click the correct sequence");
	},2000*j);
}

function colourSquare (item, opacity){
		return function (){
			item.css('opacity', opacity);		
		};
	}


function play(){
	
	var id = $(this).attr('id');

	//console.log('play id1='+id);
	//console.log('play id2='+colourSequence[playSequence]);

	if(id == colourSequence[playSequence]){
		playSequence++;
		if(playSequence === colourSequence.length){
			$('#announcement').text("Level "+currentLevel+" - You Won!");
			setTimeout(function(){startGame(++currentLevel)}, 4000);	
		}
	}else{
		$('#announcement').text("Level "+currentLevel+" - Incorrect! Refresh to play again.");
	}

}