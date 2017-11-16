(function () {

class List {

		constructor (options) {
			this.el = options.el;
			this.data = options.data;
			this.render();	
			this._initEvents();
		}

		_initEvents() {
			this.el.addEventListener('click', this._onCLick.bind(this));

		}

		_onCLick (event) {	

			event.preventDefault();
			let target = event.target;
			

			if (target.classList.contains('menu__title')) {
			this.toggle();
			}

			if (target.classList.contains('buttom_delete')) {
				console.log(target.value);
				this.deleteClick(target.value);
			}

			if (target.classList.contains('buttom_ok')) {
				this.okClick(target.value)
			}

			if (target.classList.contains('add_item-button')) {
				this.data.items.push('appel');
			}

		}

		deleteClick(id) {
			this.data.items.splice(id, 1);
			console.log(this.data.items);
			this.render();
		}

		okClick (id) {
			console.log(id);
			var elements = document.querySelectorAll('ul > li > div');
			elements[id].classList.toggle('menu__item-ok');
		}


		render () {
			
			this.el.innerHTML = '';

			let title = document.createElement('a');
			title.classList.add('menu__title');
			title.classList.add('menu__title-text');
			title.innerHTML = this.data.title;

			let list = document.createElement('ul');
			list.classList.add('menu__list');

			this.data.items.map((itemData, id) => {
				let item = document.createElement('li');
				item.classList.add('menu_list-li')
				list.appendChild(item);


				let imgItem = document.createElement('img');
				imgItem.classList.add('img_item');
				item.appendChild(imgItem);
				
				let itemName = document.createElement('div');
				itemName.classList.add('menu__item');
				itemName.innerHTML = itemData.item;
				item.appendChild(itemName);

				let buttomOk = document.createElement('input');
				buttomOk.classList.add('buttom_ok');
				buttomOk.setAttribute("type","image");
				buttomOk.setAttribute("src", "image/ok.png");
				buttomOk.setAttribute("value", id);
				item.appendChild(buttomOk);

				
				let buttomDelete = document.createElement('input');
				buttomDelete.classList.add('buttom_delete');
				buttomDelete.setAttribute("type","image");
				buttomDelete.setAttribute("value", id);
				buttomDelete.setAttribute("src", "image/delete.png");	
				item.appendChild(buttomDelete);
			});

			this.el.appendChild(title);
			this.el.appendChild(list);
		
		}

		toggle() {
			this.el.classList.toggle('menu_close');
		}




	}



// Export
	window.List = List;
})(window);
