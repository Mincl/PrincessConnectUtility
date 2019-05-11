class DataManager {
	/***************** Rank *********************/
	static getCharRanks() {
		return DataRank.getCharRanks();
	}

	// charId: string
	static getCharRankByCharId(charId) {
		return DataRank.getCharRankByCharId(charId);
	}

	// charId: string
	// rank: integer
	static getRankInfoByCharIdAndRank(charId, rank) {
		return DataRank.getRankInfoByCharIdAndRank(charId, rank);
	}


	/***************** Character *********************/
	static getCharacters() {
		return DataCharacter.getCharacters();
	}

    // id: string
	static getCharacterById(id) {
		return DataCharacter.getCharacterById(id);
	}


	/***************** Equipment *********************/
	static getEquipments() {
		return DataEquipment.getEquipments();
	}

	// id: string
	static getEquipmentById(id) {
		return DataEquipment.getEquipmentById(id);
	}

	// name: string
	static getEquipmentByName(name) {
		return DataEquipment.getEquipmentByName(name);
	}

	// name: string
	static getEquipmentsByName(name) {
		return DataEquipment.getEquipmentsByName(name);
	}

	// temporary function
	// names: array[string]
	// static getEq(names, rank) {
	// 	var res = [];
	// 	var res_name = [];
	// 	for (var name of names) {
	// 		var eq = DataEquipment.getEquipmentByName(name);
	// 		if (eq != undefined) {
	// 			res.push(eq.id);
	// 			res_name.push(eq.name);
	// 		}
	// 	}
	// 	console.log(res_name);
	// 	var r=res.map(r => `"${r}"`).join(",");
	// 	return `new RankInfo(${rank}, [${r}])`;
	// 	// return res;
	// }

	// temporary function
	// function neq(names) {
	// 	var txt=[];
	// 	for (var i = 0; i < names.length; i+=6) {
	// 		var res = [];
	// 		for (var j = 0; j < 6; j++) {
	// 			res.push(names[i+j]);
	// 		}
	// 		txt.push(DataEquipment.getEq(res, parseInt(i/6)+1));
	// 	}
	// 	console.log(`${txt.join(",\n")}`);
	// }

	// when you need some rank equipment data, use this code
	// $('.ItemIconDiv img').map(function() { return $(this).attr('title'); });
}