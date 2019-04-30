class Equipment {
	// blueprint: Array[Dictionary{'equipId':string, 'count':int}]
	// material: Dictionary{'equipId':string, 'count':int}]
	static addMaterialToBlueprint(blueprint, material) {
		for (var bp of blueprint) {
			if (bp['equipId'] == material['equipId']) {
				bp['count'] += material['count'];
				return blueprint;
			}
		}

		blueprint.push(material);
		return blueprint;
	}

	// id: string
	// name: string
	// icon: string (path)
	// stat: Stat
	// blueprint: Array[Dictionary{'equipId':string, 'count':int}]
	constructor(id, name, icon, stat, blueprint) {
		this.id = id;
		this.name = name;
		this.icon = icon;
		this.stat = stat;
		this.blueprint = blueprint;
	}

	getFullBlueprint() {
		var fullBlueprint = [];
		for (var bp of this.blueprint) {
			const equip = DataManager.getEquipmentById(bp['equipId']);
			// has blueprint, calculate raw materials
			if (equip.blueprint != undefined) {
				// get raw materials from subBlueprint
				const subBlueprint = equip.getFullBlueprint();
				for (var subp of subBlueprint) {
					var cnt = parseInt(bp['count']) * parseInt(subp['count']);
					Equipment.addMaterialToBlueprint(fullBlueprint, {
						'equipId': subp['equipId'],
						'count': cnt
					});
				}
			} else {
				Equipment.addMaterialToBlueprint(fullBlueprint, {
					'equipId': bp['equipId'],
					'count': bp['count']
				});
			}
		}

		return fullBlueprint;
	}
}