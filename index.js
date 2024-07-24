let counter = document.getElementById("counter");
let saveDisplay = document.getElementById("save-display");
let count = 0;

function increase() {
	count++;
	counter.textContent = count;
}

function decrease() {
	if (count > 0) {
		count--;
	} else {
		count = 0;
	}
	counter.textContent = count;
}

function save() {
	let countStr = count + "-";
	saveDisplay.textContent += countStr;
	count = 0;
	counter.textContent = count;
}
