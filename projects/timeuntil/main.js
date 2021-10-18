function calculateRemainingTime (){
	const event = "Dying Light 2";
	const eventDate = new Date(2022, 1, 4);

	var eventText = document.getElementById("eventName");
	var remainingDaysText = document.getElementById("remainingDays");
	var remainingHoursText = document.getElementById("remainingHours");
	var remainingMinutesText = document.getElementById("remainingMinutes");
	var remainingSecondsText = document.getElementById("remainingSeconds");

	eventText.textContent = "Event: " + event;

	setInterval(function () {
		const currentDate = Date.now();

		let secondsRemaining = Math.round((eventDate - currentDate) / 1000);
		let minutesRemaining = Math.round(secondsRemaining / 60);
		let hoursRemaining = Math.round(minutesRemaining / 60);
		let daysRemaining = Math.round(hoursRemaining / 24);

		remainingDaysText.textContent = "Remaining Days: " + daysRemaining;
		remainingHoursText.textContent = "Remaining Hours: " + hoursRemaining;
		remainingMinutesText.textContent = "Remaining Minutes: " + minutesRemaining;
		remainingSecondsText.textContent = "Remaining Seconds: " + secondsRemaining;
	}, 100);
	
}