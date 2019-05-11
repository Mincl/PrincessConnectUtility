class Stage {
	// chapter: int
	// number: int
	// stamina: int
	// dropEquipIds: Array[string]
	constructor(chapter, number, stamina, dropEquipIds) {
		this.chapter = chapter;
		this.number = number;
		this.stamina = stamina;
		this.dropEquipments = [];
        for (var equipId of dropEquipIds) {
            var eq = DataManager.getEquipmentById(equipId);
            this.dropEquipments.push(eq);
        }
	}

	// equipId: string
	isDropEquip(equipId) {
		for(var eq of this.dropEquipments) {
			if (eq.id == equipId)
				return true;
		}
		return false;
	}
}