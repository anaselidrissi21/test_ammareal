
const form = document.getElementById('MyForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

	const message = new FormData(form);


		fetch('http://localhost:3000/message', {
		method:"POST",
		body: message,
	})

	.then(res => res.json())
	.then(data => console.log(data))
	.catch(err => console.log(err));



});

form.email.addEventListener('change', function() {
	validEmail(this)
}),

form.tel.addEventListener('change', function() {
	validPhone(this)
});

const validEmail = function(inputEmail) {
	const emailRegExp = new RegExp(
		'^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$'
	);

	const testemail = emailRegExp.test(inputEmail.value);
	const small = inputEmail.nextElementSibling;



	if (testemail) {
		small.innerHTML = 'Adresse Valide';
	}
	else {
		small.innerHTML = 'Adresse Non Valide';
	}

	};

	const validPhone = function(inputPhone) {
		const phoneRegExp = new RegExp(
			"^[0-9]{10}$"
		);

		const testphone = phoneRegExp.test(inputPhone.value);
		const small = inputPhone.nextElementSibling;

		if (testphone) {
			small.innerHTML = 'Numero de Telephone Valide';
		}
		else {
			small.innerHTML = 'Numero de Telephone non Valide';
		}

		};

