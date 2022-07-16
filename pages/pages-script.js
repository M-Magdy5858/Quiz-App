// Time when page is opened
let startTime;

document.querySelector('body').onload = function () {
	startTime = new Date().getTime();
	console.log(`start time is ${startTime}`);
};

//
// // display timer count-up

let minutes = document.getElementById('min');
let seconds = document.getElementById('sec');

let secondPassed = 0;
let timer = setInterval(countUp, 1000);

function countUp() {
	secondPassed++;
	minutes.innerHTML = addLeftZero(Math.floor(secondPassed / 60));
	seconds.innerHTML = addLeftZero(Math.floor(secondPassed % 60));
}
// add zero to the left if number < 10  ( 00 , 01 , 02 , ... )
function addLeftZero(value) {
	return value > 9 ? value : '0' + value;
}

//
// // // // // // // //
// //  Main code  // //
// // // // // // // //
//

let score = 0;
let numberOfQuestions = document.querySelectorAll('.question').length;

document.querySelector('.next').onclick = function () {
	// select the active question
	let active = document.querySelector('.question:not(.d-none) form');
	console.log(active.parentElement);

	// alert when no answer
	if (!active.answer.value) {
		alert('Select answer!!');
	} else {
		// get the answer value 0 , 1 .. add it to score
		score += parseInt(active.answer.value);

		// hide the active question  div
		active.parentElement.classList.toggle('d-none');

		// display the next question div
		active.parentElement.nextElementSibling.classList.toggle('d-none');

		// when reaching last one
		if (active.parentElement.getAttribute('num') == numberOfQuestions) {
			// display the score box
			document.getElementById('scorebox').classList.toggle('d-none');
			document.getElementById('score').innerHTML = score + ' from 10!';

			document.getElementById('result').innerHTML =
				score >= numberOfQuestions / 2 ? 'PASSED!' : 'FAILED!';

			// stop timer
			clearInterval(timer);
		}
	}
};
