class List {

    constructor(options) {
        this.el = options.el;
        this.data = options.data;
        this._initEvents();
        this.render();
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
    }

    deleteClick(id) {
        this.data.items.splice(id, 1);
        this.render();
    }

    okClick(id) {
        var elements = document.querySelectorAll('ul > li > div');
        elements[id].classList.toggle('menu__item-ok');
    }

    render() {
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
            if (itemData.category == 'food') {
                imgItem.setAttribute("src", "image/meal.png");
            } else if (itemData.category == 'forHome') {
                imgItem.setAttribute("src", "image/home1.png");
            } else if (itemData.category == 'other') {
                imgItem.setAttribute("src", "image/other.png");
            };
            imgItem.setAttribute("data-category", itemData.category);
            item.appendChild(imgItem);

            let itemName = document.createElement('div');
            itemName.classList.add('menu__item');
            itemName.innerHTML = itemData.item;
            item.appendChild(itemName);

            let buttomOk = document.createElement('input');
            buttomOk.classList.add('buttom_ok');
            buttomOk.setAttribute("type", "image");
            buttomOk.setAttribute("src", "image/ok.png");
            buttomOk.setAttribute("data-id", id);
            item.appendChild(buttomOk);

            let buttomDelete = document.createElement('input');
            buttomDelete.classList.add('buttom_delete');
            buttomDelete.setAttribute("type", "image");
            buttomDelete.setAttribute("data-id", id);
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
export default List;