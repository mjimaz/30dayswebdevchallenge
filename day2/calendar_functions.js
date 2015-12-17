//create month table
function createMonth() {

	var body = $('body');
	var table = $('<table></table>');
	table.attr('id',"monthCalendar");
	var tableBody = $('<tbody></tbody>');

	var tr = $('<tr></tr>');
	tr.attr('id', 'currentMonthRow');
	var month = $('<th></th>')
	month.attr('id', 'currentMonth');
	month.appendTo(tr);
	tr.appendTo(tableBody);

	var tr = $('<tr></tr>');
	tr.attr('id',"weekdays");
	
	for(var i = 0 ; i < 7 ; i++){
		var weekday = $('<th></th>');
		weekday.attr('id', 'weekday'+i);
		weekday.appendTo(tr);
	}
	tr.appendTo(tableBody);
	
	for(var i = 0; i<42 ; i++){
		//new row
		if(i%7 === 0){
			var tr = $('<tr></tr>');
			console.log('create row');
		}
		var td = $('<td></td>');
		console.log('create colimn');
		td.attr('id','day'+i);
		td.appendTo(tr);
		//end row
		if(i%6 === 0){
			tr.appendTo(tableBody);
		}
		
	}

	tableBody.appendTo(table);
    table.appendTo(body);

}

function fillMonth(){
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', "Thursday", 'Friday', 'Saturday'];
	var date = new Date();
	var month = date.getMonth();
	var year = date.getFullYear();
	var firstDayOfTheMonth = (new Date(year, month, 1)).getDay();
	var daysInMonth = (new Date(year, month, 0)).getDate();


	//add month to header
	$('#currentMonth').text(months[month]);
	//fill weekday names
	for(var i = 0; i<7 ; i++){
		$('#weekday'+i).text(weekdays[i]);
	}

	var daysCount = 1;

	//fill in days numbers in month
	//console.log()
	for(var i = firstDayOfTheMonth ; i < daysInMonth+firstDayOfTheMonth ; i++){
		$('#day'+i).text(daysCount++);
	}

}