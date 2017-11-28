
import List from '../list/list';
import AddItem from '../addItem/addItem';
import data from '../../data/data.json';

	class App {
		constructor({el}) {
			this.data = data;
			this.el = el;
			this.newItem = { "category": " ",
                             "item": " ", 
            };
			this._initEvents();	
			this.menu = new List({
				el: document.querySelector('.js-menu'),
				data: this.data	,
			});

			this.form = new AddItem({
				el: el.querySelector('.form_add-item'),
			});

		}

	_initEvents() {
        this.el.addEventListener('click', this._onCLick.bind(this));
    }

    _onCLick(event) {
        event.preventDefault();
        let target = event.target;

        if (target.classList.contains('menu__title')) {
            this.toggle();
        }

        if (target.classList.contains('buttom_delete')) {
            this.deleteClick(target.dataset.id);
        }

        if (target.classList.contains('buttom_ok')) {
            this.okClick(target.dataset.id)
        }

        if (target.classList.contains('add_item-button')) {
            this.newItem.category = document.getElementById("itemCategory").value;
			this.newItem.item = document.getElementById("itemName").value;
			this.addNewItem();
        }
    }

    deleteClick(id) {
        this.data.items.splice(id, 1);
        this.menu.render();
    }

    okClick(id) {
        let elements = document.querySelectorAll('ul > li > div');
        	elements[id].classList.toggle('menu__item-ok');
    }

    addNewItem() {
		this.data.items.push(this.newItem);
		this.menu.render();
		this.newItem = { "category": " ",
                         "item": " ", 
        };
        document.getElementById("itemCategory").value="";
        document.getElementById("itemName").value ="";

	}

    toggle() {
        this.el.classList.toggle('menu_close');
    }

	}

	// export
const app = new App({
  el: document.querySelector('.js-app')
});