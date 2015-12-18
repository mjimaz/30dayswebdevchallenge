//create month table
function createWatch() {

	var body = $('body');
	var watch = $('<div></div>');
	watch.attr('id',"watch");
	

	var  watchTitle = $('<div></div>');
	watchTitle.attr('id', 'watchTitle');
	watchTitle.appendTo(watch);
	watchTitle.text('Time:')

	var time = $('<div></div>');
	time.attr('id', 'time');
	time.appendTo(watch);

	

    watch.appendTo(body);

}


function updateTime(){
	var date = new Date();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	/*console.log(hour);
	console.log(min);
	console.log(sec);*/
	
	$('#time').text(hour+':'+min+':'+sec); 
}