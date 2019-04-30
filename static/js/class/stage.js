class Stage {
	// chapter: int
	// number: int
	// stamina: int
	// dropEquipIds: Array[string]
	constructor(chapter, number, stamina, dropEquipIds) {
		this.chapter = chapter;
		this.number = number;
		this.stamina = stamina;
		this.dropEquipIds = dropEquipIds;
	}

	// equipId: string
	hasEquip(equipId) {

		return this.dropEquipIds.includes(equipId);
	}
}