export default class Request {
	startLoading() {
        document.getElementById('loader-container').classList.add('visible');
    }

    endLoading() {
        document.getElementById('loader-container').classList.remove('visible');
	}
	
	showError() {
		document.getElementById('error-container').classList.add('visible');
	}

	hideError() {
		document.getElementById('error-container').classList.remove('visible');
	}

    fetch(params) {
		this.startLoading();
		
		return fetch(...params)
		.then((response) => {
			return response.json();
		}).then((data) => {
			this.endLoading();
			if(data.error) {
				this.showError();
				return;
			} else {
				return data;
			}
		});
    }
}
