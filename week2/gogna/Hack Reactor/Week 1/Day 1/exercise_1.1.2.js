var hour = 5
var minute = 50
function minutesUntilMidnight () {
	var midnight = new Date ();
	midnight.setHour (24);
	midnight.setMinute (0);
	midnight.setSeconds (0);
	return (midnight.getTime() - new Date.getTime() ) / 1000 /60
}