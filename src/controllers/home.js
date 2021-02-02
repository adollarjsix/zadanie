export default function homeController() {
    this.$on('.some-guy', 'click', (event) => {
        if(!event.target.classList.contains('is-animating')) {
            event.target.classList.add('is-animating');
        }
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

        fetch('https://zwzt-zadanie.netlify.app/api/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            if(data.error) {
                document.getElementById('error-container').classList.add('visible');
            } else {
                sessionStorage.setItem('sessionId', data.token)
                location.assign('/#/loggedin');
            }
        })
    });

    this.$on('#error-container', 'click', (event) => {
        event.target.classList.remove('visible');
    });
}
