class DataManager {
	static getCharacters() {
		const characterData = [
			new Character("chara_1", "노조미", "static/images/icons/노조미.png", 160 ),
			new Character("chara_2", "타마키", "static/images/icons/타마키.png", 215 ),
			new Character("chara_3", "모니카", "static/images/icons/모니카.png", 410 ),
			new Character("chara_4", "미야코", "static/images/icons/미야코.png", 125 ),
			new Character("chara_5", "시오리", "static/images/icons/시오리.png", 710 ),
			new Character("chara_6", "리마", "static/images/icons/리마.png", 105 ),
			new Character("chara_7", "쿠우카", "static/images/icons/쿠우카.png", 130 ),
			new Character("chara_8", "쥰", "static/images/icons/쥰.png", 135 ),
			new Character("chara_9", "카오리", "static/images/icons/카오리.png", 145 ),
			new Character("chara_10", "신년 레이", "static/images/icons/레이(신).png", 153 ),
			new Character("chara_11", "페코린느", "static/images/icons/페코린느.png", 155 ),
			new Character("chara_12", "루카", "static/images/icons/루카.png", 158 ),
			new Character("chara_13", "무이미", "static/images/icons/무이미.png", 162 ),
			new Character("chara_14", "마코토", "static/images/icons/마코토.png", 165 ),
			new Character("chara_15", "신년 히요리", "static/images/icons/히요리(신).png", 170 ),
			new Character("chara_16", "아키노", "static/images/icons/아키노.png", 180 ),
			new Character("chara_17", "마츠리", "static/images/icons/마츠리.png", 185 ),
			new Character("chara_18", "발렌타인 에리코", "static/images/icons/에리코(발).png", 187 ),
			new Character("chara_19", "크리스마스 아야네", "static/images/icons/아야네(성).png", 190 ),
			new Character("chara_20", "츠무기", "static/images/icons/츠무기.png", 195 ),
			new Character("chara_21", "히요리", "static/images/icons/히요리.png", 200 ),
			new Character("chara_22", "미소기", "static/images/icons/미소기.png", 205 ),
			new Character("chara_23", "아야네", "static/images/icons/아야네.png", 210 ),
			new Character("chara_24", "토모", "static/images/icons/토모.png", 220 ),
			new Character("chara_25", "수영복 타마키", "static/images/icons/타마키(수).png", 225 ),
			new Character("chara_26", "에리코", "static/images/icons/에리코.png", 230 ),
			new Character("chara_27", "수영복 페코린느", "static/images/icons/페코린느(수).png", 235 ),
			new Character("chara_28", "쿠루미", "static/images/icons/쿠루미.png", 240 ),
			new Character("chara_29", "지타", "static/images/icons/지타.png", 245 ),
			new Character("chara_30", "레이", "static/images/icons/레이.png", 250 ),
			new Character("chara_31", "시즈루", "static/images/icons/시즈루.png", 285 ),
			new Character("chara_32", "크리스티나", "static/images/icons/크리스티나.png", 290 ),
			new Character("chara_33", "크리스마스 쿠루미", "static/images/icons/쿠루미(성).png", 295 ),
			new Character("chara_34", "미미", "static/images/icons/미미.png", 360 ),
			new Character("chara_35", "시노부", "static/images/icons/시노부.png", 365 ),
			new Character("chara_36", "발렌타인 시즈루", "static/images/icons/시즈루(발).png", 385 ),
			new Character("chara_37", "마히루", "static/images/icons/마히루.png", 395 ),
			new Character("chara_38", "유카리", "static/images/icons/유카리.png", 405 ),
			new Character("chara_39", "니논", "static/images/icons/니논.png", 415 ),
			new Character("chara_40", "미후유", "static/images/icons/미후유.png", 420 ),
			new Character("chara_41", "이리야", "static/images/icons/이리야.png", 425 ),
			new Character("chara_42", "사렌", "static/images/icons/사렌.png", 430 ),
			new Character("chara_43", "할로윈 시노부", "static/images/icons/시노부(할).png", 440 ),
			new Character("chara_44", "안나", "static/images/icons/안나.png", 440 ),
			new Character("chara_45", "수영복 미후유", "static/images/icons/미후유(수).png", 495 ),
			new Character("chara_46", "콧코로", "static/images/icons/콧코로.png", 500 ),
			new Character("chara_47", "아유미", "static/images/icons/아유미.png", 510 ),
			new Character("chara_48", "수영복 콧코로", "static/images/icons/콧코로(수).png", 535 ),
			new Character("chara_49", "린", "static/images/icons/린.png", 550 ),
			new Character("chara_50", "미츠키", "static/images/icons/미츠키.png", 565 ),
			new Character("chara_51", "아카리", "static/images/icons/아카리.png", 570 ),
			new Character("chara_52", "요리", "static/images/icons/요리.png", 575 ),
			new Character("chara_53", "할로윈 미야코", "static/images/icons/미야코(할).png", 590 ),
			new Character("chara_54", "아리사", "static/images/icons/아리사.png", 625 ),
			new Character("chara_55", "안", "static/images/icons/안.png", 630 ),
			new Character("chara_56", "루", "static/images/icons/루.png", 640 ),
			new Character("chara_57", "리노", "static/images/icons/리노.png", 700 ),
			new Character("chara_58", "스즈나", "static/images/icons/스즈나.png", 705 ),
			new Character("chara_59", "이오", "static/images/icons/이오.png", 715 ),
			new Character("chara_60", "스즈메", "static/images/icons/스즈메.png", 720 ),
			new Character("chara_61", "카스미", "static/images/icons/카스미.png", 730 ),
			new Character("chara_62", "미사토", "static/images/icons/미사토.png", 735 ),
			new Character("chara_63", "나나카", "static/images/icons/나나카.png", 740 ),
			new Character("chara_64", "신년 유이", "static/images/icons/유이(신).png", 745 ),
			new Character("chara_65", "캬루", "static/images/icons/캬루.png", 750 ),
			new Character("chara_66", "하츠네", "static/images/icons/하츠네.png", 755 ),
			new Character("chara_67", "미사키", "static/images/icons/미사키.png", 760 ),
			new Character("chara_68", "크리스마스 치카", "static/images/icons/치카(성).png", 770 ),
			new Character("chara_69", "수영복 스즈메", "static/images/icons/스즈메(수).png", 775 ),
			new Character("chara_70", "수영복 캬루", "static/images/icons/캬루(수).png", 780 ),
			new Character("chara_71", "아오이", "static/images/icons/아오이.png", 785 ),
			new Character("chara_72", "치카", "static/images/icons/치카.png", 790 ),
			new Character("chara_73", "마호", "static/images/icons/마호.png", 795 ),
			new Character("chara_74", "유이", "static/images/icons/유이.png", 800 ),
			new Character("chara_75", "유키", "static/images/icons/유키.png", 805 ),
			new Character("chara_76", "쿄우카", "static/images/icons/쿄우카.png", 810 ),
			new Character("chara_77", "할로윈 미사키", "static/images/icons/미사키(할).png", 815 )
		];

		return characterData;
	}

	static getCharacterById(id) {
		const characterData = DataManager.getCharacters();
		for (var char of characterData) {
			if (char.id == id) {
				return char;
			}
		}
	}
}