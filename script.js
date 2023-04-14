const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	checkInputs();
});

function checkInputs() {
	const usernameValue = usernameInput.value.trim();
	const passwordValue = passwordInput.value.trim();

	if (usernameValue === '') {
		setErrorFor(usernameInput, 'Username cannot be blank');
	} else if (!isValidUsername(usernameValue)) {
		setErrorFor(usernameInput, 'Username must be between 4 and 20 characters and only contain letters and numbers');
	} else {
		setSuccessFor(usernameInput);
	}

	if (passwordValue === '') {
		setErrorFor(passwordInput, 'Password cannot be blank');
	} else if (!isValidPassword(passwordValue)) {
		setErrorFor(passwordInput, 'Password must be between 8 and 20 characters, contain at least one uppercase letter, one lowercase letter, one number, and one special character');
	} else {
		setSuccessFor(passwordInput);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	input.classList.add('error');
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	input.classList.remove('error');
}

function isValidUsername(username) {
	return /^[a-zA-Z0-9]{4,20}$/.test(username);
}

function isValidPassword(password) {
	return /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[@$!%#?&])[A-Za-z\d@$!%#?&]{8,20}$/.test(password);
}