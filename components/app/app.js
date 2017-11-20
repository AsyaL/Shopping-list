
import List from '../list/list';
import AddItem from '../addItem/addItem';
import data from '../../data/data.json';


console.log(data)
	class App {
		constructor({el}) {
			const menu = new List({
				el: document.querySelector('.js-menu'),
				data: data	
			});

			const form = new AddItem({
				el: el.querySelector('.form_add-item'),
			});
		}
	}

	// export
  const app = new App({
  el: document.querySelector('.js-app')
  });