class RankInfo {
	// rank: integer
	// equipIds: array[string]
	// stat: Stat
	constructor(rank, equipIds, stat) {
		this.rank = rank;
		this.equipments = [];
        for (var equipId of equipIds) {
            var eq = DataManager.getEquipmentById(equipId);
            this.equipments.push(eq);
        }
		this.stat = stat;
	}
}