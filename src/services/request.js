export default class Request {
	startLoading() {
        document.getElementById('loader-container').classList.add('visible');
    }

    endLoading() {
        document.getElementById('loader-container').classList.remove('visible');
    }

    fetch(params) {
		this.startLoading();
		
		return fetch(...params)
		.then((response) => {
			return response.json();
		}).then((data) => {
			this.endLoading();
			return data;
		});
    }
}
