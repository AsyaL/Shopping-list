class AddItem {

    constructor({el, data}) {
        this.el = el;
        this.data = data;
        this.render();
    }	
	render () {
		this.el.innerHTML =  `
			<div>
			   <input name="name" placeholder="Product Name" class="add_item-input" required />
			   <select name="category" class="add_item-input">
			    	<option>category</option>
	   				<option value="food">food</option>
	    			<option value="home goodsк">home goods</option>
	    			<option value="other">other</option>
   				</select>
			   <input name="submit" class="add_item-button" type="submit" value="Add" />
			</div>`;	
	}
}

// Export
export default AddItem;
