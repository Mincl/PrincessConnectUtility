class CharacterRank {
	// rankInfos: Array[RankInfo]
	constructor() {
		const MAX_RANK = 8;

		this.rankInfos = Array(MAX_RANK);
	}

	// rankInfo: RankInfo
	setRankInfo(rankInfo) {
		this.rankInfos[rankInfo.rank] = rankInfo;

		return this;
	}

	// rank: int
	getRankInfo(rank) {

		return this.rankInfos[rank];
	}
}