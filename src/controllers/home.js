import Request from '../services/request';

export default function homeController() {
	const request = new Request();

	this.$on('#error-container', 'click', (event) => {
		request.hideError();
	});

	this.$on('.some-guy', 'click', (event) => {
		if(!event.target.classList.contains('is-animating')) {
			event.target.classList.add('is-animating');
		}

		document.body.classList.toggle('some-mode');
	});

	this.$on('.some-guy', 'animationend', (event) => {
		if(event.target.classList.contains('is-animating')) {
			event.target.classList.remove('is-animating');
		}
	});

	this.$on('#main-form', 'submit', (event) => {
		const username = document.getElementById('username').value;
		const password = document.getElementById('password').value;

		event.preventDefault();

		request.fetch(['https://zwzt-zadanie.netlify.app/api/login', {
			method: 'POST',
			body: JSON.stringify({
				username,
				password
			})
		}]).then((data) => {
			sessionStorage.setItem('sessionId', data.token)
			location.assign('/#/loggedin');
		});
	});
}
