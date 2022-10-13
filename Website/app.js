const themeSwitcher = document.querySelector('#themeSwitcher');

const defaultTheme = localStorage.getItem('theme') || 'theme-dark';
setTheme(defaultTheme);

themeSwitcher.addEventListener('change', (e) => {
	setTheme(e.target.value);
});

function setTheme(theme) {
	theme = theme || 'theme-dark';
	document.documentElement.className = theme;
	localStorage.setItem('theme', theme);
	themeSwitcher.value = theme;
}

const componentBoxes = document.querySelectorAll('.main__html-componentBox');

componentBoxes.forEach((componentBox) => {
	componentBox.addEventListener('click', () => {
		let a =
			componentBox.lastElementChild.lastElementChild.firstElementChild;
		location.href = a.href;
	});
});
