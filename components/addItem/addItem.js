class AddItem {

    constructor({el, data}) {
        this.el = el;
        this.data = data;
        this.newItem = {
        	"category": " ",
			"item": " "
		}

		this._initEvents();
        this.render();
    }	

	_initEvents() {
        this.el.addEventListener('submit', this._onSubmit.bind(this));
    }

    _onSubmit(event) {
    	event.preventDefault();
        this.addNewItem();
    }

    addNewItem() {
	    this.newItem.category = document.getElementById("itemCategory").value;
		this.newItem.item = document.getElementById("itemName").value;
		console.log(this.newItem);
		this.data.items.push(this.newItem);
		console.log(this.data);
	}
    
	render () {
		this.el.innerHTML =  `
			<form>
			   <input name="name" placeholder="Product Name" class="add_item-input" id="itemName" required />
			   <select name="category" class="add_item-input" id="itemCategory" required>
			    	<option>category</option>
	   				<option value="food">food</option>
	    			<option value="home good">home goods</option>
	    			<option value="other">other</option>
   				</select>
			   <input name="submit" class="add_item-button" type="submit" value="Add" />
			<form>`;	
	}
}

// Export
export default AddItem;
