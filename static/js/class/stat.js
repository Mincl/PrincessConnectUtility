class Stat {
	// statA: Stat
	// statB: Stat
	static plus(statA, statB) {
		var stat = statA.clone();
		stat.addStat(statB);
		return stat;
	}

	// params: Dictionary
	constructor(params) {
		this.atk = params['atk'] || 0;
		this.def = params['def'] || 0;
		this.matk = params['matk'] || 0;
		this.mdef = params['mdef'] || 0;
		this.crit = params['crit'] || 0;
		this.mcrit = params['mcrit'] || 0;
		this.hp = params['hp'] || 0;
		this.avoid = params['avoid'] || 0;
		this.hpReg = params['hpReg'] || 0;
		this.tpReg = params['tpReg'] || 0;
		this.hpAbs = params['hpAbs'] || 0;
		this.tpAbs = params['tpAbs'] || 0;
		this.heal = params['heal'] || 0;
		this.tpRed = params['tpRed'] || 0;
	}

	clone() {
		var stat = new Stat(this.toDict());

		return stat;
	}

	// stat: Stat
	addStat(stat) {
		this.atk += stat.atk;
		this.def += stat.def;
		this.matk += stat.matk;
		this.mdef += stat.mdef;
		this.crit += stat.crit;
		this.mcrit += stat.mcrit;
		this.hp += stat.hp;
		this.avoid += stat.avoid;
		this.hpReg += stat.hpReg;
		this.tpReg += stat.tpReg;
		this.hpAbs += stat.hpAbs;
		this.tpAbs += stat.tpAbs;
		this.heal += stat.heal;
		this.tpRed += stat.tpRed;
	}

	toDict() {
		var dict = {
			'atk': this.atk,
			'def': this.def,
			'matk': this.matk,
			'mdef': this.mdef,
			'crit': this.crit,
			'mcrit': this.mcrit,
			'hp': this.hp,
			'avoid': this.avoid,
			'hpReg': this.hpReg,
			'tpReg': this.tpReg,
			'hpAbs': this.hpAbs,
			'tpAbs': this.tpAbs,
			'heal': this.heal,
			'tpRed': this.tpRed
		};
		return dict;
	}
}