// task 1:

function showRange(a, b){
	if(a > b){
		console.log('case a > b', a);
		let dec = a - 1 ; 
		showRange(dec, b);

	}else if(a < b){
		console.log('case a < b', a);
		let inc = a + 1;
		showRange(inc, b);

	}else if(a === b){
		console.log('equity case:', a);
	}
	
}

showRange(2, 8);
showRange(5, 1);


// task 2:
let dateArea = document.querySelector('#main');
let timePattern;

function showDate(){	
	date = new Date();
	hours = date.getHours();
	hours < 10 ? hours = '0' + hours : hours = hours;
	
	minutes = date.getMinutes();
	minutes < 10 ? minutes = '0' + minutes : minutes = minutes;

	seconds = date.getSeconds();
	seconds < 10 ? seconds = '0' + seconds : seconds = seconds;

	longDate = `<p>Current date: ${hours} : ${minutes} : ${seconds}</p>`;
	shortDate = `<p>Current date: ${hours} : ${minutes}</p>`;

	timePattern === true ? dateArea.innerHTML = longDate : dateArea.innerHTML = shortDate;
	
}

timePattern = true;

let time = setInterval(showDate, 1000);

document.querySelector('#main').addEventListener('click', (e) => {
	e.preventDefault();

	if(e.target.tagName === 'P'){
		console.log('clicked');
		clearInterval(time);
		timePattern = !timePattern;
		setInterval(showDate, 1000);

	}
})



