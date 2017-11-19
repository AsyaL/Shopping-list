(function () {
	'use strict';

	// import
	const List = window.List;
	const AddItem = window.AddItem;


	class App {
		constructor({el}) {
			this.menu = new List({
				el: document.querySelector('.js-menu'),

				data: {},	
			});

			this.form = new AddItem({
				el: el.querySelector('.form_add-item'),
			});

		const promise = this.fetchData();

		promise.then((result) => {
			this.menu.setData(result)
		});

		promise.then((result));
		promise.then();
		}

		fetchData() {
return new Promise((resolve, reject) => { 
		const xhr = new XMLHttpRequest(); 

xhr.addEventListener('load', () => {
					if (xhr.status === 200) {
						const result = JSON.parse(xhr.responseText);

						resolve(result);
					} else {
						console.error('Что-то пошло не так!');

						reject(xhr);
					}
				});

		xhr.open('GET', '/data/data.json',true);
		xhr.send();
});
		}

	}

	// export
	window.App = App;
})();