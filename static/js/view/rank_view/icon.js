class Icon {
	// equipment: Equipment
	constructor(equipment) {
		this.equipment = equipment;
		this.invalid = true;
		// icon div
		this.dom = $('<div class="equipment"></div>');
		// icon image
		this.img = $(`<img src="${this.equipment.invalidIcon}" />`);
		this.dom.append(this.img);
	}

	// width_p: int (percent)
	// height_p: int (percent)
	setSize(width_p, height_p) {
		this.dom.css('width', `${width_p}%`);
		this.dom.css('height', `${height_p}%`);

		return this;
	}

	// left_p: int (percent)
	// top_p: int (percent)
	setPos(left_p, top_p) {
		this.dom.css('left', `${left_p}%`);
		this.dom.css('top', `${top_p}%`);

		return this;
	}

	// callback: function
	click(callback) {
		this.dom.click(callback);
		return this;
	}

	remove() {
		this.dom.remove();
		delete this;
	}

	toggle() {
		if (this.invalid) {
			this.invalid = false;
			this.img.attr('src', this.equipment.icon);
		} else {
			this.invalid = true;
			this.img.attr('src', this.equipment.invalidIcon);
		}
	}
}
