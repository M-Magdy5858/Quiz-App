// Select Icons :::::>

let testIcons = document.querySelectorAll('.hero .box');

let select;

for (let icon of testIcons) {
	icon.onclick = function () {
		let selected = document.querySelector('.hero .box.selected');
		if (selected) {
			selected.classList.toggle('selected');
		}
		icon.classList.toggle('selected');

		select = icon.id;
	};
}

// Start test :::::>

document.querySelector('.hero .start').onclick = function () {
	if (select) {
		let url = `pages/${select}.html`;
		window.open(url);
	} else {
		alert('Please select a test!');
	}
};
