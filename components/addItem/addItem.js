class AddItem {

    constructor({el, data}) {
        this.el = el;
        this.render();
    }	

	render () {
		this.el.innerHTML =  `
			<form>
			   <input name="name" placeholder="Product Name" class="add_item-input" id="itemName" required  autocomplete="off"/>
			   <select name="category" class="add_item-input" id="itemCategory" required>
	   				<option value="food">food</option>
	    			<option value="forHome">home goods</option>
	    			<option value="other">other</option>
   				</select>
			   <input name="submit" class="add_item-button" type="submit" value="Add" />
			<form>`;	
	}
}

// Export
export default AddItem;