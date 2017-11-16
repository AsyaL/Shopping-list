(function () {
	'use strict';

	// import
	const List = window.List;
	const AddItem = window.AddItem;


	class App {
		constructor({el}) {
			const menu = new List({
				el: document.querySelector('.js-menu'),

				data: {
					title: 'Shopping list',
					items: [
						{
							category: 'food',
							item: 'milk',
						},
						{
							category: 'food',
							item: 'orange',
						},
						{
							category: 'food',
							item: 'bred',
						},
						{
							category: 'food',
							item: 'cherry',
						},
					],
				}

				
			});

			const form = new AddItem({
				el: el.querySelector('.form_add-item'),
			});

			window.menu = menu;
		}
	}

	// export
	window.App = App;
})();