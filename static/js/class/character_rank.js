class CharacterRank {
	// charId: string
	// rankInfos: Array[RankInfo]
	constructor(charId, rankInfos) {
		const MAX_RANK = 8;

		this.charId = charId;
		this.rankInfos = Array(MAX_RANK+1);
		for (var rankInfo of rankInfos) {
			this.rankInfos[rankInfo.rank] = rankInfo;
		}
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