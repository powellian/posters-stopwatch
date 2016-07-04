$(document).foundation();

console.log('WHAA?')

//	Amended version of this Stopwatch: https://gist.github.com/electricg/4372563#file-stopwatch-js
//	Removed all the HTML inline .onclick() handlers and created appropriate functions in the script below.
//	Added 'lap();' function to render lap times. Results of lap(); are cleared in reset() function;
//	Ian Powell.

// Timer and Button elements:
var splitTimesWrap = document.getElementById("split-times"),
	startBtn = document.getElementById("btn_start"),
	pauseBtn = document.getElementById("btn_pause"),
	lapBtn = document.getElementById("btn_lap"),
	resetBtn = document.getElementById("btn_reset"),
	increment = 0;

var	clsStopwatch = function() {
	// Private vars
	var	startAt	= 0;	// Time of last start / resume. (0 if not running)
	var	lapTime	= 0;	// Time on the clock when last stopped in milliseconds

	var	now	= function() {
		return (new Date()).getTime();
	};
	// Public methods
	// Start or resume
	this.start = function() {
		startAt	= startAt ? startAt : now();
	};
	// Stop or pause
	this.stop = function() {
		// If running, update elapsed time otherwise keep it
		lapTime	= startAt ? lapTime + now() - startAt : lapTime;
		startAt	= 0; // Paused
	};
	// Reset
	this.reset = function() {
		lapTime = startAt = 0;
	};
	// Duration
	this.time = function() {
		return lapTime + (startAt ? now() - startAt : 0);
	};
};

var x = new clsStopwatch();
var $time;
var clocktimer;

function pad(num, size) {
	var s = "0000" + num;
	return s.substr(s.length - size);
}

function formatTime(time) {
	// var h = m = s = ms = 0;
	var h = 0;
	var m = 0;
	var s = 0;
	var ms = 0;
	var newTime = '';

	h = Math.floor( time / (60 * 60 * 1000) );
	time = time % (60 * 60 * 1000);
	m = Math.floor( time / (60 * 1000) );
	time = time % (60 * 1000);
	s = Math.floor( time / 1000 );
	ms = time % 1000;

	newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 2);
	return newTime;
}

window.onload = function () {
	$time = document.getElementById('time');
	update();
}

function update() {
	$time.innerHTML = formatTime(x.time());
}

// Buttons:
startBtn.onclick = function start() {
	clocktimer = setInterval("update()", 1);
	x.start();
}
pauseBtn.onclick = function stop() {
	x.stop();
	clearInterval(clocktimer);
}
lapBtn.onclick = function lap() {
	var lapTr = document.createElement("tr");
	splitTimesWrap.appendChild(lapTr);
	increment++;
	lapTr.innerHTML = '<td>Lap ' + increment + ': ' + '</td>' + '<td>' + formatTime(x.time()) + '</td>';
}
resetBtn.onclick = function reset() {
	stop();
	x.reset();
	update();
	splitTimesWrap.innerHTML = "";	// Clear lap times
	increment = 0;					// Reset lap index
}
