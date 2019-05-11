class Party {
	// members: Array[Character]
	constructor() {
		this.members = [];
	}

	// char: Character
	addMember(char) {
		if (this.members.length >= 5)
			return false;

		this.members.push(char);
		this.members.sort((a, b) => a.dist < b.dist ? -1 : a.dist > b.dist ? 1 : 0);
		return true;
	}

	// char: Character
	removeMember(char) {
		if (this.members.length <= 0)
			return false;

		for (var i in this.members) {
			if (this.members[i].id == char.id) {
				this.members.splice(i, 1);
			}
		}
		return true;
	}

	// id: int
	getMemberById(id) {
		for (var member of this.members) {
			if (member.id == id) {
				return member;
			}
		}

		return null;
	}
}