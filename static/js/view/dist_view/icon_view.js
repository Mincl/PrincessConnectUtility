// using jquery
class IconView {
	constructor() {
		this.dom = $('<div class="icon_view"></div>');
		this.ico_width_p = 0;
		this.ico_height_p = 0;
		this.icons = {};
	}

	// ico_width_p: int (percent)
	// ico_height_p: int (percent)
	setIconSize(ico_width_p, ico_height_p) {
		this.ico_width_p = ico_width_p;
		this.ico_height_p = ico_height_p;
		for (var i in this.icons) {
			this.icons[i].setSize(ico_width_p, ico_height_p);
		}
	}

	// id: string
	// left_p: int (percent)
	// top_p: int (percent)
	// tooltip: string
	// iconUrl: string (path)
	// callbackOnClick: function
	addIcon(id, left_p, top_p, tooltip, iconUrl, callbackOnClick) {
		const newIconId = `p_ico_${id}`;
		if (this.icons[newIconId] != undefined)
			return null;
		var newIcon = new Icon(tooltip, iconUrl);
		newIcon.setSize(this.ico_width_p, this.ico_height_p)
			.setPos(left_p, top_p)
			.click(callbackOnClick);
		this.dom.append(newIcon.dom.attr('id', newIconId));
		this.icons[newIconId] = newIcon;

		return newIconId;
	}

	// id: string
	removeIcon(id) {
		this.icons[id].remove();
		delete this.icons[id];
	}
}