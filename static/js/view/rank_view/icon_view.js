// using jquery
class IconView {
	// id: string
	constructor(id) {
		this.dom = $(`<div id="${id}" class="view"></div>`);
		this.ico_width_p = 0;
		this.ico_height_p = 0;
		this.icons = {};
		this.rank_img = $('<div class="rank_img"></div>');
		this.rank_img.append($('<span class="rank_text"></span>'));
		this.rank_num = $('<span class="rank_num" rank="1"></span>');
		this.rank_img.append(this.rank_num);
		this.dom.append(this.rank_img);
	}

	get rankNum() {
		return parseInt(this.rank_num.attr('rank'));
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

	// iconId: string
	// left_p: int (percent)
	// top_p: int (percent)
	// equipment: Equipment
	addIcon(iconId, left_p, top_p, equipment) {
		const newIconId = `ico_${iconId}`;
		if (this.icons[newIconId] != undefined)
			return null;
		var newIcon = new Icon(equipment);
		newIcon.setSize(this.ico_width_p, this.ico_height_p)
			.setPos(left_p, top_p).click(function(e) {
				newIcon.toggle();
		});
		this.dom.append(newIcon.dom.attr('id', newIconId));
		this.icons[newIconId] = newIcon;

		return newIconId;
	}

	// iconId: string
	removeIcon(iconId) {
		this.icons[iconId].remove();
		delete this.icons[iconId];
	}

	// callback: function
	clickRank(callback) {
		this.rank_img.click(callback);
		return this;
	}

	// num: digit
	changeRankNum(num) {
		const n = parseInt(num);
		if (1 <= n && n <= 8) {
			this.rank_num.attr('rank', num);
		}
	}

	incrRankNum() {
		var n = parseInt(this.rank_num.attr('rank'));
		n++;
		if (n > 8) n = 1;
		this.changeRankNum(n);
	}

	clear() {
		for (var i in this.icons) {
			this.removeIcon(i);
		}
	}
}