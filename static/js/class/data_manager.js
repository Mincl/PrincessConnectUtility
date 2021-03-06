class DataManager {
	static getCharRanks() {
		const charRankData = [
			new CharacterRank(
				"chara_1",
				[
					new RankInfo(1, ["equip_128","equip_137","equip_135","equip_137","equip_140","equip_141"]),
					new RankInfo(2, ["equip_119","equip_106","equip_94","equip_107","equip_140","equip_141"]),
					new RankInfo(3, ["equip_45","equip_102","equip_95","equip_102","equip_124","equip_111"]),
					new RankInfo(4, ["equip_46", "equip_74", "equip_67", "equip_74", "equip_125", "equip_112"]),
					new RankInfo(5, ["equip_47", "equip_73", "equip_65", "equip_73", "equip_80", "equip_83"]),
					new RankInfo(6, ["equip_0", "equip_85", "equip_66", "equip_73", "equip_81", "equip_84"]),
					new RankInfo(7, ["equip_1", "equip_22", "equip_19", "equip_85", "equip_85", "equip_84"]),
					new RankInfo(8, ["equip_27", "equip_1", "equip_40", "equip_25", "equip_43", "equip_85"])
				]
			),
			new CharacterRank(
				"chara_2",
				[
					new RankInfo(1, ["equip_129","equip_129","equip_135","equip_138","equip_140","equip_140"]),
					new RankInfo(2, ["equip_120","equip_121","equip_103","equip_103","equip_140","equip_140"]),
					new RankInfo(3, ["equip_50","equip_120","equip_99","equip_104","equip_109","equip_109"]),
					new RankInfo(4, ["equip_48","equip_74","equip_68","equip_74","equip_110","equip_110"]),
					new RankInfo(5, ["equip_51","equip_48","equip_69","equip_75","equip_80","equip_80"]),
					new RankInfo(6, ["equip_4","equip_51","equip_70","equip_75","equip_81","equip_81"]),
					new RankInfo(7, ["equip_5","equip_4","equip_20","equip_82","equip_51","equip_81"]),
					new RankInfo(8, ["equip_29","equip_5","equip_38","equip_23","equip_42","equip_82"])
				]
			),
			new CharacterRank(
				"chara_3",
				[
					new RankInfo(1, ["equip_128","equip_129","equip_135","equip_137","equip_128","equip_141"]),
					new RankInfo(2, ["equip_118","equip_121","equip_94","equip_106","equip_128","equip_141"]),
					new RankInfo(3, ["equip_50","equip_118","equip_95","equip_102","equip_111","equip_111"]),
					new RankInfo(4, ["equip_46","equip_28","equip_64","equip_74","equip_118","equip_112"]),
					new RankInfo(5, ["equip_51","equip_46","equip_65","equip_73","equip_28","equip_83"]),
					new RankInfo(6, ["equip_0","equip_51","equip_70","equip_73","equip_46","equip_84"]),
					new RankInfo(7, ["equip_1","equip_4","equip_18","equip_82","equip_47","equip_84"]),
					new RankInfo(8, ["equip_27","equip_5","equip_38","equip_22","equip_42","equip_85"])
				]
			),
			new CharacterRank(
				"chara_4",
				[
					new RankInfo(1, ["equip_132","equip_135","equip_138","equip_138","equip_141","equip_141"]),
					new RankInfo(2, ["equip_125","equip_124","equip_98","equip_103","equip_141","equip_141"]),
					new RankInfo(3, ["equip_55","equip_104","equip_99","equip_104","equip_111","equip_111"]),
					new RankInfo(4, ["equip_56","equip_55","equip_68","equip_74","equip_112","equip_112"]),
					new RankInfo(5, ["equip_70","equip_56","equip_75","equip_56","equip_83","equip_83"]),
					new RankInfo(6, ["equip_10","equip_85","equip_70","equip_75","equip_84","equip_84"]),
					new RankInfo(7, ["equip_11","equip_23","equip_20","equip_85","equip_85","equip_75"]),
					new RankInfo(8, ["equip_32","equip_11","equip_38","equip_23","equip_43","equip_85"])
				]
			),
			new CharacterRank(
				"chara_5",
				[
					new RankInfo(1, ["equip_131","equip_131","equip_129","equip_138","equip_140","equip_140"]),
					new RankInfo(2, ["equip_123","equip_121","equip_98","equip_103","equip_140","equip_140"]),
					new RankInfo(3, ["equip_50","equip_123","equip_123","equip_104","equip_109","equip_109"]),
					new RankInfo(4, ["equip_53","equip_50","equip_68","equip_80","equip_104","equip_110"]),
					new RankInfo(5, ["equip_54","equip_53","equip_69","equip_81","equip_68","equip_80"]),
					new RankInfo(6, ["equip_8","equip_54","equip_82","equip_69","equip_53","equip_81"]),
					new RankInfo(7, ["equip_9","equip_8","equip_20","equip_82","equip_54","equip_84"]),
					new RankInfo(8, ["equip_31","equip_9","equip_38","equip_8","equip_42","equip_82"])
				]
			),
			new CharacterRank(
				"chara_6",
				[
					new RankInfo(1, ["equip_128","equip_132","equip_135","equip_137","equip_138","equip_141"]),
					new RankInfo(2, ["equip_118","equip_124","equip_96","equip_107","equip_137","equip_141"]),
					new RankInfo(3, ["equip_28","equip_125","equip_97","equip_102","equip_111","equip_111"]),
					new RankInfo(4, ["equip_46","equip_55","equip_67","equip_74","equip_102","equip_112"]),
					new RankInfo(5, ["equip_47","equip_56","equip_65","equip_77","equip_83","equip_83"]),
					new RankInfo(6, ["equip_0","equip_59","equip_66","equip_77","equip_73","equip_81"]),
					new RankInfo(7, ["equip_1","equip_10","equip_19","equip_85","equip_85","equip_77"]),
					new RankInfo(8, ["equip_27","equip_11","equip_37","equip_22","equip_43","equip_85"])
				]
			),
			new CharacterRank(
				"chara_7",
				[
					new RankInfo(1, ["equip_129","equip_139","equip_135","equip_138","equip_141","equip_141"]),
					new RankInfo(2, ["equip_108","equip_121","equip_100","equip_103","equip_141","equip_141"]),
					new RankInfo(3, ["equip_50","equip_108","equip_101","equip_104","equip_111","equip_111"]),
					new RankInfo(4, ["equip_52","equip_78","equip_78","equip_83","equip_112","equip_112"]),
					new RankInfo(5, ["equip_51","equip_79","equip_71","equip_76","equip_83","equip_83"]),
					new RankInfo(6, ["equip_4","equip_85","equip_72","equip_76","equip_71","equip_84"]),
					new RankInfo(7, ["equip_5","equip_21","equip_24","equip_85","equip_85","equip_84"]),
					new RankInfo(8, ["equip_29","equip_5","equip_39","equip_24","equip_43","equip_85"])
				]
			),
			new CharacterRank(
				"chara_8",
				[
					new RankInfo(1, ["equip_128","equip_137","equip_135","equip_137","equip_140","equip_141"]),
					new RankInfo(2, ["equip_119","equip_106","equip_94","equip_107","equip_140","equip_141"]),
					new RankInfo(3, ["equip_28","equip_102","equip_95","equip_102","equip_124","equip_111"]),
					new RankInfo(4, ["equip_46","equip_74","equip_67","equip_74","equip_125","equip_112"]),
					new RankInfo(5, ["equip_47","equip_73","equip_65","equip_73","equip_80","equip_83"]),
					new RankInfo(6, ["equip_0","equip_85","equip_66","equip_73","equip_81","equip_84"]),
					new RankInfo(7, ["equip_1","equip_22","equip_19","equip_85","equip_85","equip_84"]),
					new RankInfo(8, ["equip_27","equip_1","equip_40","equip_25","equip_43","equip_85"])
				]
			),
			new CharacterRank(
				"chara_9",
				[
					new RankInfo(1, ["equip_130","equip_129","equip_135","equip_138","equip_129","equip_140"]),
					new RankInfo(2, ["equip_122","equip_121","equip_98","equip_103","equip_140","equip_140"]),
					new RankInfo(3, ["equip_50","equip_122","equip_99","equip_104","equip_109","equip_109"]),
					new RankInfo(4, ["equip_52","equip_50","equip_68","equip_74","equip_110","equip_110"]),
					new RankInfo(5, ["equip_51","equip_52","equip_69","equip_75","equip_80","equip_80"]),
					new RankInfo(6, ["equip_6","equip_51","equip_70","equip_75","equip_69","equip_84"]),
					new RankInfo(7, ["equip_7","equip_6","equip_20","equip_82","equip_51","equip_81"]),
					new RankInfo(8, ["equip_30","equip_7","equip_38","equip_6","equip_42","equip_82"])
				]
			),
			new CharacterRank(
				"chara_10",
				[
				
				]
			),
			new CharacterRank(
				"chara_11",
				[
					new RankInfo(1, ["equip_128","equip_129","equip_135","equip_137","equip_140","equip_141"]),
					new RankInfo(2, ["equip_118","equip_117","equip_96","equip_107","equip_138","equip_141"]),
					new RankInfo(3, ["equip_28","equip_102","equip_95","equip_102","equip_117","equip_109"]),
					new RankInfo(4, ["equip_46","equip_28","equip_67","equip_83","equip_102","equip_112"]),
					new RankInfo(5, ["equip_47","equip_73","equip_65","equip_75","equip_83","equip_80"]),
					new RankInfo(6, ["equip_0","equip_47","equip_66","equip_77","equip_73","equip_84"]),
					new RankInfo(7, ["equip_1","equip_25","equip_19","equip_85","equip_85","equip_73"]),
					new RankInfo(8, ["equip_27","equip_1","equip_40","equip_25","equip_43","equip_85"])
				]
			),
			new CharacterRank(
				"chara_12",
				[
				
				]
			),
			new CharacterRank(
				"chara_13",
				[
				
				]
			),
			new CharacterRank(
				"chara_14",
				[
					new RankInfo(1, ["equip_128","equip_128","equip_135","equip_137","equip_128","equip_140"]),
					new RankInfo(2, ["equip_120","equip_117","equip_94","equip_107","equip_128","equip_140"]),
					new RankInfo(3, ["equip_28","equip_120","equip_95","equip_102","equip_117","equip_109"]),
					new RankInfo(4, ["equip_48","equip_28","equip_64","equip_80","equip_120","equip_110"]),
					new RankInfo(5, ["equip_49","equip_48","equip_65","equip_73","equip_28","equip_80"]),
					new RankInfo(6, ["equip_2","equip_49","equip_66","equip_73","equip_48","equip_81"]),
					new RankInfo(7, ["equip_3","equip_2","equip_18","equip_85","equip_49","equip_81"]),
					new RankInfo(8, ["equip_28","equip_3","equip_36","equip_2","equip_42","equip_82"])
				]
			),
			new CharacterRank(
				"chara_15",
				[
				
				]
			),
			new CharacterRank(
				"chara_16",
				[
					new RankInfo(1, ["equip_128","equip_128","equip_135","equip_137","equip_140","equip_141"]),
					new RankInfo(2, ["equip_118","equip_117","equip_96","equip_107","equip_128","equip_141"]),
					new RankInfo(3, ["equip_28","equip_118","equip_95","equip_102","equip_109","equip_111"]),
					new RankInfo(4, ["equip_46","equip_28","equip_67","equip_74","equip_118","equip_112"]),
					new RankInfo(5, ["equip_47","equip_46","equip_65","equip_46","equip_80","equip_83"]),
					new RankInfo(6, ["equip_0","equip_47","equip_66","equip_73","equip_81","equip_84"]),
					new RankInfo(7, ["equip_1","equip_25","equip_19","equip_82","equip_47","equip_84"]),
					new RankInfo(8, ["equip_27","equip_1","equip_36","equip_22","equip_42","equip_82"])
				]
			),
			new CharacterRank(
				"chara_17",
				[
				
				]
			),
			new CharacterRank(
				"chara_18",
				[
				
				]
			),
			new CharacterRank(
				"chara_19",
				[
				
				]
			),
			new CharacterRank(
				"chara_20",
				[
				
				]
			),
			new CharacterRank(
				"chara_21",
				[
					new RankInfo(1, ["equip_130","equip_130","equip_135","equip_138","equip_129","equip_141"]),
					new RankInfo(2, ["equip_122","equip_121","equip_98","equip_103","equip_130","equip_141"]),
					new RankInfo(3, ["equip_50","equip_122","equip_99","equip_104","equip_121","equip_111"]),
					new RankInfo(4, ["equip_52","equip_50","equip_68","equip_74","equip_122","equip_112"]),
					new RankInfo(5, ["equip_51","equip_52","equip_69","equip_75","equip_50","equip_83"]),
					new RankInfo(6, ["equip_6","equip_51","equip_70","equip_75","equip_81","equip_84"]),
					new RankInfo(7, ["equip_7","equip_6","equip_20","equip_85","equip_51","equip_81"]),
					new RankInfo(8, ["equip_30","equip_7","equip_38","equip_6","equip_42","equip_82"])
				]
			),
			new CharacterRank(
				"chara_22",
				[
					new RankInfo(1, ["equip_130","equip_130","equip_135","equip_138","equip_141","equip_141"]),
					new RankInfo(2, ["equip_122","equip_121","equip_98","equip_103","equip_141","equip_141"]),
					new RankInfo(3, ["equip_50","equip_122","equip_99","equip_104","equip_111","equip_111"]),
					new RankInfo(4, ["equip_52","equip_50","equip_68","equip_74","equip_112","equip_112"]),
					new RankInfo(5, ["equip_51","equip_52","equip_69","equip_75","equip_80","equip_83"]),
					new RankInfo(6, ["equip_6","equip_51","equip_70","equip_75","equip_81","equip_84"]),
					new RankInfo(7, ["equip_7","equip_6","equip_20","equip_85","equip_85","equip_81"]),
					new RankInfo(8, ["equip_30","equip_7","equip_38","equip_23","equip_43","equip_85"])
				]
			),
			new CharacterRank(
				"chara_23",
				[
				
				]
			),
			new CharacterRank(
				"chara_24",
				[
				
				]
			),
			new CharacterRank(
				"chara_25",
				[
				
				]
			),
			new CharacterRank(
				"chara_26",
				[
					new RankInfo(1, ["equip_133","equip_133","equip_137","equip_133","equip_140","equip_140"]),
					new RankInfo(2, ["equip_127","equip_126","equip_94","equip_126","equip_140","equip_140"]),
					new RankInfo(3, ["equip_57","equip_127","equip_95","equip_127","equip_109","equip_109"]),
					new RankInfo(4, ["equip_58","equip_57","equip_64","equip_57","equip_110","equip_110"]),
					new RankInfo(5, ["equip_59","equip_58","equip_71","equip_58","equip_80","equip_80"]),
					new RankInfo(6, ["equip_12","equip_59","equip_66","equip_58","equip_81","equip_81"]),
					new RankInfo(7, ["equip_13","equip_12","equip_18","equip_59","equip_82","equip_81"]),
					new RankInfo(8, ["equip_33","equip_13","equip_36","equip_12","equip_42","equip_82"])
				]
			),
			new CharacterRank(
				"chara_27",
				[
				
				]
			),
			new CharacterRank(
				"chara_28",
				[
					new RankInfo(1, ["equip_133","equip_138","equip_135","equip_133","equip_140","equip_141"]),
					new RankInfo(2, ["equip_127","equip_103","equip_96","equip_126","equip_138","equip_141"]),
					new RankInfo(3, ["equip_57","equip_102","equip_95","equip_127","equip_126","equip_109"]),
					new RankInfo(4, ["equip_58","equip_83","equip_67","equip_57","equip_102","equip_102"]),
					new RankInfo(5, ["equip_59","equip_75","equip_65","equip_58","equip_83","equip_80"]),
					new RankInfo(6, ["equip_12","equip_85","equip_66","equip_58","equip_84","equip_65"]),
					new RankInfo(7, ["equip_13","equip_22","equip_19","equip_59","equip_85","equip_84"]),
					new RankInfo(8, ["equip_33","equip_13","equip_36","equip_25","equip_43","equip_85"])
				]
			),
			new CharacterRank(
				"chara_29",
				[
					new RankInfo(1, ["equip_128","equip_128","equip_135","equip_137","equip_128","equip_140"]),
					new RankInfo(2, ["equip_118","equip_117","equip_94","equip_107","equip_140","equip_140"]),
					new RankInfo(3, ["equip_28","equip_118","equip_95","equip_102","equip_117","equip_109"]),
					new RankInfo(4, ["equip_46","equip_28","equip_64","equip_74","equip_110","equip_110"]),
					new RankInfo(5, ["equip_47","equip_46","equip_65","equip_73","equip_50","equip_80"]),
					new RankInfo(6, ["equip_0","equip_47","equip_66","equip_73","equip_81","equip_81"]),
					new RankInfo(7, ["equip_1","equip_0","equip_18","equip_82","equip_47","equip_81"]),
					new RankInfo(8, ["equip_27","equip_1","equip_36","equip_0","equip_42","equip_82"])
				]
			),
			new CharacterRank(
				"chara_30",
				[
					new RankInfo(1, ["equip_128","equip_128","equip_135","equip_137","equip_129","equip_141"]),
					new RankInfo(2, ["equip_119","equip_117","equip_96","equip_107","equip_129","equip_140"]),
					new RankInfo(3, ["equip_28","equip_119","equip_95","equip_102","equip_121","equip_109"]),
					new RankInfo(4, ["equip_46","equip_28","equip_67","equip_83","equip_112","equip_110"]),
					new RankInfo(5, ["equip_47","equip_46","equip_65","equip_73","equip_50","equip_80"]),
					new RankInfo(6, ["equip_0","equip_47","equip_66","equip_73","equip_81","equip_81"]),
					new RankInfo(7, ["equip_1","equip_0","equip_19","equip_82","equip_51","equip_84"]),
					new RankInfo(8, ["equip_27","equip_1","equip_37","equip_22","equip_42","equip_82"])
				]
			),
			new CharacterRank(
				"chara_31",
				[
					new RankInfo(1, ["equip_128","equip_128","equip_135","equip_137","equip_140","equip_141"]),
					new RankInfo(2, ["equip_119","equip_117","equip_94","equip_107","equip_140","equip_140"]),
					new RankInfo(3, ["equip_28","equip_119","equip_95","equip_102","equip_109","equip_111"]),
					new RankInfo(4, ["equip_46","equip_28","equip_67","equip_74","equip_110","equip_110"]),
					new RankInfo(5, ["equip_47","equip_46","equip_65","equip_77","equip_80","equip_83"]),
					new RankInfo(6, ["equip_0","equip_47","equip_66","equip_77","equip_81","equip_84"]),
					new RankInfo(7, ["equip_1","equip_25","equip_19","equip_82","equip_85","equip_81"]),
					new RankInfo(8, ["equip_27","equip_1","equip_40","equip_22","equip_43","equip_82"])
				]
			),
			new CharacterRank(
				"chara_32",
				[
				
				]
			),
			new CharacterRank(
				"chara_33",
				[
				
				]
			),
			new CharacterRank(
				"chara_34",
				[
					new RankInfo(1, ["equip_128","equip_133","equip_135","equip_137","equip_141","equip_140"]),
					new RankInfo(2, ["equip_118","equip_117","equip_96","equip_107","equip_135","equip_140"]),
					new RankInfo(3, ["equip_28","equip_127","equip_97","equip_102","equip_111","equip_109"]),
					new RankInfo(4, ["equip_46","equip_28","equip_64","equip_74","equip_104","equip_110"]),
					new RankInfo(5, ["equip_47","equip_58","equip_65","equip_77","equip_74","equip_80"]),
					new RankInfo(6, ["equip_0","equip_47","equip_66","equip_77","equip_73","equip_81"]),
					new RankInfo(7, ["equip_1","equip_12","equip_18","equip_82","equip_85","equip_81"]),
					new RankInfo(8, ["equip_27","equip_13","equip_36","equip_25","equip_42","equip_82"])
				]
			),
			new CharacterRank(
				"chara_35",
				[
					new RankInfo(1, ["equip_128","equip_128","equip_135","equip_137","equip_140","equip_141"]),
					new RankInfo(2, ["equip_120","equip_117","equip_94","equip_107","equip_141","equip_141"]),
					new RankInfo(3, ["equip_28","equip_120","equip_95","equip_102","equip_109","equip_111"]),
					new RankInfo(4, ["equip_48","equip_28","equip_64","equip_74","equip_110","equip_112"]),
					new RankInfo(5, ["equip_49","equip_81","equip_65","equip_77","equip_80","equip_83"]),
					new RankInfo(6, ["equip_2","equip_49","equip_70","equip_77","equip_81","equip_84"]),
					new RankInfo(7, ["equip_3","equip_2","equip_18","equip_82","equip_85","equip_73"]),
					new RankInfo(8, ["equip_28","equip_3","equip_37","equip_22","equip_42","equip_82"])
				]
			),
			new CharacterRank(
				"chara_36",
				[
				
				]
			),
			new CharacterRank(
				"chara_37",
				[
					new RankInfo(1, ["equip_132","equip_132","equip_135","equip_138","equip_132","equip_141"]),
					new RankInfo(2, ["equip_125","equip_126","equip_98","equip_106","equip_132","equip_141"]),
					new RankInfo(3, ["equip_55","equip_125","equip_99","equip_104","equip_124","equip_111"]),
					new RankInfo(4, ["equip_56","equip_55","equip_68","equip_74","equip_125","equip_112"]),
					new RankInfo(5, ["equip_59","equip_56","equip_69","equip_77","equip_55","equip_83"]),
					new RankInfo(6, ["equip_10","equip_59","equip_70","equip_77","equip_81","equip_84"]),
					new RankInfo(7, ["equip_11","equip_12","equip_20","equip_82","equip_85","equip_73"]),
					new RankInfo(8, ["equip_32","equip_13","equip_38","equip_25","equip_42","equip_82"])
				]
			),
			new CharacterRank(
				"chara_38",
				[
					new RankInfo(1, ["equip_128","equip_128","equip_135","equip_137","equip_141","equip_141"]),
					new RankInfo(2, ["equip_119","equip_117","equip_94","equip_94","equip_141","equip_141"]),
					new RankInfo(3, ["equip_28","equip_119","equip_95","equip_102","equip_111","equip_111"]),
					new RankInfo(4, ["equip_46","equip_28","equip_64","equip_28","equip_112","equip_112"]),
					new RankInfo(5, ["equip_47","equip_46","equip_65","equip_73","equip_83","equip_83"]),
					new RankInfo(6, ["equip_0","equip_47","equip_70","equip_81","equip_84","equip_84"]),
					new RankInfo(7, ["equip_1","equip_22","equip_18","equip_82","equip_47","equip_84"]),
					new RankInfo(8, ["equip_27","equip_1","equip_40","equip_22","equip_43","equip_85"])
				]
			),
			new CharacterRank(
				"chara_39",
				[
					new RankInfo(1, ["equip_128","equip_128","equip_135","equip_137","equip_140","equip_141"]),
					new RankInfo(2, ["equip_120","equip_117","equip_94","equip_107","equip_128","equip_141"]),
					new RankInfo(3, ["equip_28","equip_120","equip_95","equip_102","equip_109","equip_111"]),
					new RankInfo(4, ["equip_48","equip_74","equip_64","equip_28","equip_120","equip_112"]),
					new RankInfo(5, ["equip_49","equip_46","equip_65","equip_73","equip_80","equip_83"]),
					new RankInfo(6, ["equip_2","equip_49","equip_66","equip_73","equip_48","equip_84"]),
					new RankInfo(7, ["equip_3","equip_2","equip_18","equip_82","equip_85","equip_73"]),
					new RankInfo(8, ["equip_28","equip_3","equip_37","equip_2","equip_42","equip_82"])
				]
			),
			new CharacterRank(
				"chara_40",
				[
					new RankInfo(1, ["equip_132","equip_133","equip_135","equip_138","equip_132","equip_141"]),
					new RankInfo(2, ["equip_125","equip_126","equip_96","equip_107","equip_132","equip_141"]),
					new RankInfo(3, ["equip_55","equip_127","equip_95","equip_102","equip_124","equip_111"]),
					new RankInfo(4, ["equip_56","equip_57","equip_64","equip_74","equip_125","equip_112"]),
					new RankInfo(5, ["equip_59","equip_56","equip_65","equip_77","equip_55","equip_83"]),
					new RankInfo(6, ["equip_10","equip_59","equip_66","equip_75","equip_56","equip_84"]),
					new RankInfo(7, ["equip_11","equip_12","equip_19","equip_82","equip_85","equip_73"]),
					new RankInfo(8, ["equip_32","equip_13","equip_40","equip_25","equip_43","equip_82"])
				]
			),
			new CharacterRank(
				"chara_41",
				[
				
				]
			),
			new CharacterRank(
				"chara_42",
				[
					new RankInfo(1, ["equip_128","equip_128","equip_135","equip_137","equip_129","equip_140"]),
					new RankInfo(2, ["equip_118","equip_117","equip_96","equip_107","equip_129","equip_140"]),
					new RankInfo(3, ["equip_28","equip_118","equip_97","equip_102","equip_121","equip_109"]),
					new RankInfo(4, ["equip_46","equip_28","equip_64","equip_74","equip_110","equip_112"]),
					new RankInfo(5, ["equip_47","equip_46","equip_65","equip_73","equip_80","equip_80"]),
					new RankInfo(6, ["equip_0","equip_47","equip_66","equip_73","equip_81","equip_81"]),
					new RankInfo(7, ["equip_1","equip_25","equip_19","equip_82","equip_47","equip_84"]),
					new RankInfo(8, ["equip_27","equip_1","equip_36","equip_22","equip_42","equip_82"])
				]
			),
			new CharacterRank(
				"chara_43",
				[
				
				]
			),
			new CharacterRank(
				"chara_44",
				[
					new RankInfo(1, ["equip_134","equip_134","equip_136","equip_139","equip_142","equip_142"]),
					new RankInfo(2, ["equip_91","equip_90","equip_100","equip_105","equip_142","equip_142"]),
					new RankInfo(3, ["equip_60","equip_91","equip_101","equip_108","equip_113","equip_113"]),
					new RankInfo(4, ["equip_63","equip_78","equip_62","equip_86","equip_115","equip_115"]),
					new RankInfo(5, ["equip_61","equip_63","equip_71","equip_79","equip_86","equip_86"]),
					new RankInfo(6, ["equip_14","equip_61","equip_72","equip_79","equip_71","equip_88"]),
					new RankInfo(7, ["equip_15","equip_14","equip_21","equip_89","equip_89","equip_88"]),
					new RankInfo(8, ["equip_34","equip_15","equip_41","equip_14","equip_44","equip_85"])
				]
			),
			new CharacterRank(
				"chara_45",
				[
				
				]
			),
			new CharacterRank(
				"chara_46",
				[
					new RankInfo(1, ["equip_132","equip_132","equip_135","equip_138","equip_141","equip_140"]),
					new RankInfo(2, ["equip_125","equip_124","equip_98","equip_106","equip_141","equip_140"]),
					new RankInfo(3, ["equip_55","equip_125","equip_99","equip_104","equip_111","equip_109"]),
					new RankInfo(4, ["equip_56","equip_55","equip_68","equip_74","equip_112","equip_110"]),
					new RankInfo(5, ["equip_59","equip_56","equip_69","equip_75","equip_83","equip_80"]),
					new RankInfo(6, ["equip_10","equip_59","equip_70","equip_73","equip_81","equip_69"]),
					new RankInfo(7, ["equip_11","equip_10","equip_20","equip_85","equip_82","equip_84"]),
					new RankInfo(8, ["equip_32","equip_11","equip_40","equip_25","equip_43","equip_85"])
				]
			),
			new CharacterRank(
				"chara_47",
				[
				
				]
			),
			new CharacterRank(
				"chara_48",
				[
				
				]
			),
			new CharacterRank(
				"chara_49",
				[
					new RankInfo(1, ["equip_132","equip_132","equip_135","equip_138","equip_141","equip_141"]),
					new RankInfo(2, ["equip_125","equip_124","equip_98","equip_106","equip_141","equip_141"]),
					new RankInfo(3, ["equip_55","equip_125","equip_99","equip_104","equip_111","equip_111"]),
					new RankInfo(4, ["equip_56","equip_55","equip_68","equip_74","equip_112","equip_110"]),
					new RankInfo(5, ["equip_59","equip_56","equip_69","equip_75","equip_83","equip_80"]),
					new RankInfo(6, ["equip_10","equip_59","equip_70","equip_73","equip_81","equip_84"]),
					new RankInfo(7, ["equip_11","equip_10","equip_20","equip_85","equip_82","equip_84"]),
					new RankInfo(8, ["equip_32","equip_11","equip_40","equip_25","equip_42","equip_85"])
				]
			),
			new CharacterRank(
				"chara_50",
				[
					new RankInfo(1, ["equip_128","equip_128","equip_128","equip_137","equip_140","equip_140"]),
					new RankInfo(2, ["equip_118","equip_117","equip_94","equip_107","equip_140","equip_140"]),
					new RankInfo(3, ["equip_28","equip_118","equip_118","equip_102","equip_109","equip_109"]),
					new RankInfo(4, ["equip_46","equip_28","equip_67","equip_74","equip_110","equip_110"]),
					new RankInfo(5, ["equip_47","equip_46","equip_65","equip_73","equip_80","equip_80"]),
					new RankInfo(6, ["equip_0","equip_47","equip_66","equip_73","equip_81","equip_81"]),
					new RankInfo(7, ["equip_1","equip_0","equip_18","equip_82","equip_85","equip_81"]),
					new RankInfo(8, ["equip_27","equip_1","equip_37","equip_25","equip_43","equip_82"])
				]
			),
			new CharacterRank(
				"chara_51",
				[
					new RankInfo(1, ["equip_134","equip_134","equip_136","equip_139","equip_142","equip_141"]),
					new RankInfo(2, ["equip_93","equip_92","equip_100","equip_105","equip_142","equip_141"]),
					new RankInfo(3, ["equip_62","equip_93","equip_101","equip_108","equip_114","equip_111"]),
					new RankInfo(4, ["equip_63","equip_62","equip_78","equip_78","equip_116","equip_112"]),
					new RankInfo(5, ["equip_61","equip_63","equip_71","equip_76","equip_87","equip_83"]),
					new RankInfo(6, ["equip_16","equip_61","equip_72","equip_79","equip_88","equip_84"]),
					new RankInfo(7, ["equip_17","equip_26","equip_21","equip_89","equip_85","equip_88"]),
					new RankInfo(8, ["equip_35","equip_17","equip_39","equip_24","equip_43","equip_89"])
				]
			),
			new CharacterRank(
				"chara_52",
				[
					new RankInfo(1, ["equip_134","equip_134","equip_136","equip_139","equip_142","equip_142"]),
					new RankInfo(2, ["equip_91","equip_90","equip_100","equip_105","equip_142","equip_142"]),
					new RankInfo(3, ["equip_60","equip_91","equip_101","equip_108","equip_113","equip_113"]),
					new RankInfo(4, ["equip_63","equip_78","equip_60","equip_86","equip_115","equip_115"]),
					new RankInfo(5, ["equip_61","equip_63","equip_71","equip_79","equip_86","equip_86"]),
					new RankInfo(6, ["equip_14","equip_61","equip_72","equip_79","equip_71","equip_88"]),
					new RankInfo(7, ["equip_15","equip_14","equip_21","equip_89","equip_89","equip_79"]),
					new RankInfo(8, ["equip_34","equip_15","equip_41","equip_14","equip_44","equip_89"])
				]
			),
			new CharacterRank(
				"chara_53",
				[
				
				]
			),
			new CharacterRank(
				"chara_54",
				[
					new RankInfo(1, ["equip_131","equip_131","equip_135","equip_140","equip_131","equip_140"]),
					new RankInfo(2, ["equip_123","equip_121","equip_98","equip_109","equip_131","equip_140"]),
					new RankInfo(3, ["equip_50","equip_123","equip_99","equip_110","equip_121","equip_109"]),
					new RankInfo(4, ["equip_53","equip_50","equip_68","equip_74","equip_123","equip_110"]),
					new RankInfo(5, ["equip_54","equip_53","equip_69","equip_69","equip_50","equip_80"]),
					new RankInfo(6, ["equip_8","equip_54","equip_70","equip_75","equip_53","equip_81"]),
					new RankInfo(7, ["equip_9","equip_8","equip_20","equip_82","equip_54","equip_84"]),
					new RankInfo(8, ["equip_31","equip_9","equip_38","equip_8","equip_42","equip_82"])
				]
			),
			new CharacterRank(
				"chara_55",
				[
				
				]
			),
			new CharacterRank(
				"chara_56",
				[
				
				]
			),
			new CharacterRank(
				"chara_57",
				[
					new RankInfo(1, ["equip_131","equip_131","equip_135","equip_140","equip_131","equip_140"]),
					new RankInfo(2, ["equip_123","equip_121","equip_98","equip_109","equip_131","equip_140"]),
					new RankInfo(3, ["equip_50","equip_123","equip_99","equip_110","equip_121","equip_109"]),
					new RankInfo(4, ["equip_53","equip_50","equip_68","equip_74","equip_123","equip_110"]),
					new RankInfo(5, ["equip_54","equip_53","equip_69","equip_69","equip_50","equip_80"]),
					new RankInfo(6, ["equip_8","equip_54","equip_70","equip_75","equip_53","equip_81"]),
					new RankInfo(7, ["equip_9","equip_8","equip_20","equip_82","equip_54","equip_84"]),
					new RankInfo(8, ["equip_31","equip_9","equip_38","equip_23","equip_42","equip_82"])
				]
			),
			new CharacterRank(
				"chara_58",
				[
					new RankInfo(1, ["equip_131","equip_131","equip_135","equip_140","equip_131","equip_140"]),
					new RankInfo(2, ["equip_123","equip_121","equip_98","equip_109","equip_131","equip_140"]),
					new RankInfo(3, ["equip_50","equip_123","equip_99","equip_110","equip_121","equip_109"]),
					new RankInfo(4, ["equip_53","equip_50","equip_68","equip_80","equip_123","equip_110"]),
					new RankInfo(5, ["equip_54","equip_53","equip_69","equip_81","equip_50","equip_80"]),
					new RankInfo(6, ["equip_8","equip_54","equip_70","equip_81","equip_53","equip_81"]),
					new RankInfo(7, ["equip_9","equip_8","equip_20","equip_82","equip_82","equip_84"]),
					new RankInfo(8, ["equip_31","equip_9","equip_38","equip_8","equip_42","equip_82"])
				]
			),
			new CharacterRank(
				"chara_59",
				[
					new RankInfo(1, ["equip_134","equip_134","equip_136","equip_139","equip_142","equip_142"]),
					new RankInfo(2, ["equip_91","equip_90","equip_100","equip_105","equip_142","equip_142"]),
					new RankInfo(3, ["equip_60","equip_91","equip_101","equip_108","equip_113","equip_113"]),
					new RankInfo(4, ["equip_63","equip_60","equip_78","equip_86","equip_115","equip_115"]),
					new RankInfo(5, ["equip_61","equip_63","equip_71","equip_79","equip_86","equip_86"]),
					new RankInfo(6, ["equip_14","equip_61","equip_72","equip_79","equip_71","equip_88"]),
					new RankInfo(7, ["equip_15","equip_26","equip_21","equip_89","equip_85","equip_88"]),
					new RankInfo(8, ["equip_34","equip_15","equip_39","equip_24","equip_43","equip_85"])
				]
			),
			new CharacterRank(
				"chara_60",
				[
					new RankInfo(1, ["equip_134","equip_134","equip_136","equip_139","equip_142","equip_141"]),
					new RankInfo(2, ["equip_93","equip_92","equip_100","equip_105","equip_142","equip_141"]),
					new RankInfo(3, ["equip_62","equip_93","equip_101","equip_108","equip_114","equip_111"]),
					new RankInfo(4, ["equip_63","equip_62","equip_78","equip_78","equip_116","equip_112"]),
					new RankInfo(5, ["equip_61","equip_63","equip_71","equip_76","equip_87","equip_83"]),
					new RankInfo(6, ["equip_16","equip_61","equip_72","equip_79","equip_88","equip_84"]),
					new RankInfo(7, ["equip_17","equip_24","equip_21","equip_89","equip_61","equip_84"]),
					new RankInfo(8, ["equip_35","equip_17","equip_39","equip_24","equip_43","equip_89"])
				]
			),
			new CharacterRank(
				"chara_61",
				[
				
				]
			),
			new CharacterRank(
				"chara_62",
				[
				
				]
			),
			new CharacterRank(
				"chara_63",
				[
				
				]
			),
			new CharacterRank(
				"chara_64",
				[
				
				]
			),
			new CharacterRank(
				"chara_65",
				[
					new RankInfo(1, ["equip_134","equip_134","equip_136","equip_139","equip_142","equip_142"]),
					new RankInfo(2, ["equip_91","equip_90","equip_100","equip_105","equip_142","equip_142"]),
					new RankInfo(3, ["equip_60","equip_91","equip_101","equip_108","equip_113","equip_113"]),
					new RankInfo(4, ["equip_63","equip_60","equip_78","equip_78","equip_115","equip_115"]),
					new RankInfo(5, ["equip_61","equip_63","equip_71","equip_79","equip_86","equip_86"]),
					new RankInfo(6, ["equip_14","equip_61","equip_72","equip_79","equip_71","equip_88"]),
					new RankInfo(7, ["equip_15","equip_14","equip_21","equip_89","equip_61","equip_88"]),
					new RankInfo(8, ["equip_34","equip_15","equip_41","equip_14","equip_44","equip_89"])
				]
			),
			new CharacterRank(
				"chara_66",
				[
					new RankInfo(1, ["equip_134","equip_134","equip_136","equip_139","equip_142","equip_142"]),
					new RankInfo(2, ["equip_91","equip_90","equip_100","equip_105","equip_142","equip_142"]),
					new RankInfo(3, ["equip_60","equip_91","equip_101","equip_108","equip_113","equip_113"]),
					new RankInfo(4, ["equip_63","equip_60","equip_78","equip_78","equip_115","equip_115"]),
					new RankInfo(5, ["equip_61","equip_63","equip_71","equip_79","equip_86","equip_86"]),
					new RankInfo(6, ["equip_14","equip_61","equip_72","equip_79","equip_71","equip_88"]),
					new RankInfo(7, ["equip_15","equip_14","equip_21","equip_89","equip_89","equip_88"]),
					new RankInfo(8, ["equip_34","equip_15","equip_41","equip_24","equip_44","equip_85"])
				]
			),
			new CharacterRank(
				"chara_67",
				[
					new RankInfo(1, ["equip_134","equip_134","equip_136","equip_139","equip_142","equip_142"]),
					new RankInfo(2, ["equip_91","equip_90","equip_100","equip_105","equip_142","equip_142"]),
					new RankInfo(3, ["equip_60","equip_91","equip_101","equip_108","equip_113","equip_113"]),
					new RankInfo(4, ["equip_63","equip_60","equip_78","equip_86","equip_115","equip_115"]),
					new RankInfo(5, ["equip_61","equip_63","equip_71","equip_79","equip_86","equip_86"]),
					new RankInfo(6, ["equip_14","equip_61","equip_72","equip_79","equip_71","equip_88"]),
					new RankInfo(7, ["equip_15","equip_14","equip_21","equip_89","equip_61","equip_88"]),
					new RankInfo(8, ["equip_34","equip_15","equip_41","equip_14","equip_44","equip_89"])
				]
			),
			new CharacterRank(
				"chara_68",
				[
				
				]
			),
			new CharacterRank(
				"chara_69",
				[
				
				]
			),
			new CharacterRank(
				"chara_70",
				[
				
				]
			),
			new CharacterRank(
				"chara_71",
				[
					new RankInfo(1, ["equip_131","equip_131","equip_135","equip_138","equip_129","equip_140"]),
					new RankInfo(2, ["equip_123","equip_121","equip_98","equip_103","equip_140","equip_140"]),
					new RankInfo(3, ["equip_50","equip_123","equip_99","equip_104","equip_109","equip_109"]),
					new RankInfo(4, ["equip_53","equip_50","equip_68","equip_74","equip_110","equip_110"]),
					new RankInfo(5, ["equip_54","equip_53","equip_69","equip_75","equip_50","equip_80"]),
					new RankInfo(6, ["equip_8","equip_54","equip_70","equip_75","equip_81","equip_81"]),
					new RankInfo(7, ["equip_9","equip_8","equip_20","equip_82","equip_85","equip_84"]),
					new RankInfo(8, ["equip_31","equip_9","equip_38","equip_23","equip_42","equip_82"])
				]
			),
			new CharacterRank(
				"chara_72",
				[
					new RankInfo(1, ["equip_134","equip_134","equip_136","equip_139","equip_142","equip_142"]),
					new RankInfo(2, ["equip_93","equip_92","equip_100","equip_105","equip_142","equip_142"]),
					new RankInfo(3, ["equip_62","equip_93","equip_101","equip_108","equip_114","equip_113"]),
					new RankInfo(4, ["equip_63","equip_62","equip_78","equip_78","equip_116","equip_115"]),
					new RankInfo(5, ["equip_61","equip_63","equip_71","equip_76","equip_87","equip_86"]),
					new RankInfo(6, ["equip_16","equip_61","equip_72","equip_79","equip_88","equip_88"]),
					new RankInfo(7, ["equip_17","equip_26","equip_21","equip_89","equip_85","equip_88"]),
					new RankInfo(8, ["equip_35","equip_17","equip_39","equip_24","equip_43","equip_89"])
				]
			),
			new CharacterRank(
				"chara_73",
				[
					new RankInfo(1, ["equip_134","equip_134","equip_136","equip_139","equip_142","equip_141"]),
					new RankInfo(2, ["equip_93","equip_92","equip_100","equip_105","equip_142","equip_141"]),
					new RankInfo(3, ["equip_62","equip_93","equip_101","equip_108","equip_114","equip_111"]),
					new RankInfo(4, ["equip_63","equip_62","equip_78","equip_78","equip_116","equip_112"]),
					new RankInfo(5, ["equip_61","equip_63","equip_71","equip_76","equip_87","equip_83"]),
					new RankInfo(6, ["equip_16","equip_61","equip_72","equip_79","equip_88","equip_84"]),
					new RankInfo(7, ["equip_17","equip_24","equip_21","equip_89","equip_61","equip_84"]),
					new RankInfo(8, ["equip_35","equip_17","equip_39","equip_24","equip_43","equip_89"])
				]
			),
			new CharacterRank(
				"chara_74",
				[
					new RankInfo(1, ["equip_134","equip_134","equip_136","equip_139","equip_142","equip_141"]),
					new RankInfo(2, ["equip_93","equip_92","equip_100","equip_105","equip_142","equip_142"]),
					new RankInfo(3, ["equip_62","equip_93","equip_101","equip_108","equip_114","equip_111"]),
					new RankInfo(4, ["equip_63","equip_62","equip_78","equip_78","equip_115","equip_116"]),
					new RankInfo(5, ["equip_61","equip_63","equip_71","equip_76","equip_87","equip_83"]),
					new RankInfo(6, ["equip_16","equip_61","equip_72","equip_79","equip_88","equip_88"]),
					new RankInfo(7, ["equip_17","equip_16","equip_21","equip_89","equip_89","equip_76"]),
					new RankInfo(8, ["equip_35","equip_17","equip_39","equip_24","equip_44","equip_89"])
				]
			),
			new CharacterRank(
				"chara_75",
				[
					new RankInfo(1, ["equip_134","equip_134","equip_136","equip_139","equip_142","equip_141"]),
					new RankInfo(2, ["equip_93","equip_92","equip_100","equip_105","equip_142","equip_141"]),
					new RankInfo(3, ["equip_62","equip_93","equip_101","equip_108","equip_114","equip_111"]),
					new RankInfo(4, ["equip_63","equip_62","equip_78","equip_78","equip_116","equip_112"]),
					new RankInfo(5, ["equip_61","equip_63","equip_71","equip_76","equip_87","equip_83"]),
					new RankInfo(6, ["equip_16","equip_61","equip_72","equip_79","equip_88","equip_84"]),
					new RankInfo(7, ["equip_17","equip_16","equip_21","equip_89","equip_89","equip_84"]),
					new RankInfo(8, ["equip_35","equip_17","equip_39","equip_24","equip_43","equip_89"])
				]
			),
			new CharacterRank(
				"chara_76",
				[
				
				]
			),
			new CharacterRank(
				"chara_77",
				[
				
				]
			)
		];

		return charRankData;
	}

	// charId: string
	static getCharRankByCharId(charId) {
		const charRankData = DataManager.getCharRanks();
		for (var charRank of charRankData) {
			if (charRank.charId == charId) {
				return charRank;
			}
		}
	}

	// charId: string
	// rank: integer
	static getCharRankByCharIdAndRank(charId, rank) {
		const charRankData = DataManager.getCharRanks();
		for (var charRank of charRankData) {
			if (charRank.charId == charId) {
				return charRank.getRankInfo(rank);
			}
		}
	}

	static getCharacters() {
		const characterData = [
			new Character("chara_1", "노조미", "static/images/icons/character/노조미.png", 160 ),
			new Character("chara_2", "타마키", "static/images/icons/character/타마키.png", 215 ),
			new Character("chara_3", "모니카", "static/images/icons/character/모니카.png", 410 ),
			new Character("chara_4", "미야코", "static/images/icons/character/미야코.png", 125 ),
			new Character("chara_5", "시오리", "static/images/icons/character/시오리.png", 710 ),
			new Character("chara_6", "리마", "static/images/icons/character/리마.png", 105 ),
			new Character("chara_7", "쿠우카", "static/images/icons/character/쿠우카.png", 130 ),
			new Character("chara_8", "쥰", "static/images/icons/character/쥰.png", 135 ),
			new Character("chara_9", "카오리", "static/images/icons/character/카오리.png", 145 ),
			new Character("chara_10", "신년 레이", "static/images/icons/character/레이(신).png", 153 ),
			new Character("chara_11", "페코린느", "static/images/icons/character/페코린느.png", 155 ),
			new Character("chara_12", "루카", "static/images/icons/character/루카.png", 158 ),
			new Character("chara_13", "무이미", "static/images/icons/character/무이미.png", 162 ),
			new Character("chara_14", "마코토", "static/images/icons/character/마코토.png", 165 ),
			new Character("chara_15", "신년 히요리", "static/images/icons/character/히요리(신).png", 170 ),
			new Character("chara_16", "아키노", "static/images/icons/character/아키노.png", 180 ),
			new Character("chara_17", "마츠리", "static/images/icons/character/마츠리.png", 185 ),
			new Character("chara_18", "발렌타인 에리코", "static/images/icons/character/에리코(발).png", 187 ),
			new Character("chara_19", "크리스마스 아야네", "static/images/icons/character/아야네(성).png", 190 ),
			new Character("chara_20", "츠무기", "static/images/icons/character/츠무기.png", 195 ),
			new Character("chara_21", "히요리", "static/images/icons/character/히요리.png", 200 ),
			new Character("chara_22", "미소기", "static/images/icons/character/미소기.png", 205 ),
			new Character("chara_23", "아야네", "static/images/icons/character/아야네.png", 210 ),
			new Character("chara_24", "토모", "static/images/icons/character/토모.png", 220 ),
			new Character("chara_25", "수영복 타마키", "static/images/icons/character/타마키(수).png", 225 ),
			new Character("chara_26", "에리코", "static/images/icons/character/에리코.png", 230 ),
			new Character("chara_27", "수영복 페코린느", "static/images/icons/character/페코린느(수).png", 235 ),
			new Character("chara_28", "쿠루미", "static/images/icons/character/쿠루미.png", 240 ),
			new Character("chara_29", "지타", "static/images/icons/character/지타.png", 245 ),
			new Character("chara_30", "레이", "static/images/icons/character/레이.png", 250 ),
			new Character("chara_31", "시즈루", "static/images/icons/character/시즈루.png", 285 ),
			new Character("chara_32", "크리스티나", "static/images/icons/character/크리스티나.png", 290 ),
			new Character("chara_33", "크리스마스 쿠루미", "static/images/icons/character/쿠루미(성).png", 295 ),
			new Character("chara_34", "미미", "static/images/icons/character/미미.png", 360 ),
			new Character("chara_35", "시노부", "static/images/icons/character/시노부.png", 365 ),
			new Character("chara_36", "발렌타인 시즈루", "static/images/icons/character/시즈루(발).png", 385 ),
			new Character("chara_37", "마히루", "static/images/icons/character/마히루.png", 395 ),
			new Character("chara_38", "유카리", "static/images/icons/character/유카리.png", 405 ),
			new Character("chara_39", "니논", "static/images/icons/character/니논.png", 415 ),
			new Character("chara_40", "미후유", "static/images/icons/character/미후유.png", 420 ),
			new Character("chara_41", "이리야", "static/images/icons/character/이리야.png", 425 ),
			new Character("chara_42", "사렌", "static/images/icons/character/사렌.png", 430 ),
			new Character("chara_43", "할로윈 시노부", "static/images/icons/character/시노부(할).png", 440 ),
			new Character("chara_44", "안나", "static/images/icons/character/안나.png", 440 ),
			new Character("chara_45", "수영복 미후유", "static/images/icons/character/미후유(수).png", 495 ),
			new Character("chara_46", "콧코로", "static/images/icons/character/콧코로.png", 500 ),
			new Character("chara_47", "아유미", "static/images/icons/character/아유미.png", 510 ),
			new Character("chara_48", "수영복 콧코로", "static/images/icons/character/콧코로(수).png", 535 ),
			new Character("chara_49", "린", "static/images/icons/character/린.png", 550 ),
			new Character("chara_50", "미츠키", "static/images/icons/character/미츠키.png", 565 ),
			new Character("chara_51", "아카리", "static/images/icons/character/아카리.png", 570 ),
			new Character("chara_52", "요리", "static/images/icons/character/요리.png", 575 ),
			new Character("chara_53", "할로윈 미야코", "static/images/icons/character/미야코(할).png", 590 ),
			new Character("chara_54", "아리사", "static/images/icons/character/아리사.png", 625 ),
			new Character("chara_55", "안", "static/images/icons/character/안.png", 630 ),
			new Character("chara_56", "루", "static/images/icons/character/루.png", 640 ),
			new Character("chara_57", "리노", "static/images/icons/character/리노.png", 700 ),
			new Character("chara_58", "스즈나", "static/images/icons/character/스즈나.png", 705 ),
			new Character("chara_59", "이오", "static/images/icons/character/이오.png", 715 ),
			new Character("chara_60", "스즈메", "static/images/icons/character/스즈메.png", 720 ),
			new Character("chara_61", "카스미", "static/images/icons/character/카스미.png", 730 ),
			new Character("chara_62", "미사토", "static/images/icons/character/미사토.png", 735 ),
			new Character("chara_63", "나나카", "static/images/icons/character/나나카.png", 740 ),
			new Character("chara_64", "신년 유이", "static/images/icons/character/유이(신).png", 745 ),
			new Character("chara_65", "캬루", "static/images/icons/character/캬루.png", 750 ),
			new Character("chara_66", "하츠네", "static/images/icons/character/하츠네.png", 755 ),
			new Character("chara_67", "미사키", "static/images/icons/character/미사키.png", 760 ),
			new Character("chara_68", "크리스마스 치카", "static/images/icons/character/치카(성).png", 770 ),
			new Character("chara_69", "수영복 스즈메", "static/images/icons/character/스즈메(수).png", 775 ),
			new Character("chara_70", "수영복 캬루", "static/images/icons/character/캬루(수).png", 780 ),
			new Character("chara_71", "아오이", "static/images/icons/character/아오이.png", 785 ),
			new Character("chara_72", "치카", "static/images/icons/character/치카.png", 790 ),
			new Character("chara_73", "마호", "static/images/icons/character/마호.png", 795 ),
			new Character("chara_74", "유이", "static/images/icons/character/유이.png", 800 ),
			new Character("chara_75", "유키", "static/images/icons/character/유키.png", 805 ),
			new Character("chara_76", "쿄우카", "static/images/icons/character/쿄우카.png", 810 ),
			new Character("chara_77", "할로윈 미사키", "static/images/icons/character/미사키(할).png", 815 )
		];

		return characterData;
	}

	// id: string
	static getCharacterById(id) {
		const characterData = DataManager.getCharacters();
		for (var char of characterData) {
			if (char.id == id) {
				return char;
			}
		}
	}

	static getEquipments() {
		const equipmentData = [
			new Equipment("equip_unknown", "?", "static/images/icons/equipment/unknown.png", undefined),
			new Equipment("equip_0", "엔젤 블레이드", "static/images/icons/equipment/0.png", undefined,
				[{"equipId": "equip_143", "count": 20}]),
			new Equipment("equip_1", "태양검", "static/images/icons/equipment/1.png", undefined,
				[{"equipId": "equip_144", "count": 20}]),
			new Equipment("equip_2", "요접의 도", "static/images/icons/equipment/2.png", undefined,
				[{"equipId": "equip_145", "count": 20}]),
			new Equipment("equip_3", "광휘의 검", "static/images/icons/equipment/3.png", undefined,
				[{"equipId": "equip_191", "count": 20},
				{"equipId": "equip_47", "count": 1}]),
			new Equipment("equip_4", "프레셔스 나이프", "static/images/icons/equipment/4.png", undefined,
				[{"equipId": "equip_192", "count": 20},
				{"equipId": "equip_47", "count": 1}]),
			new Equipment("equip_5", "프린세스 나이프", "static/images/icons/equipment/5.png", undefined,
				[{"equipId": "equip_146", "count": 20}]),
			new Equipment("equip_6", "화염의 건틀렛", "static/images/icons/equipment/6.png", undefined,
				[{"equipId": "equip_193", "count": 20},
				{"equipId": "equip_52", "count": 1},
				{"equipId": "equip_81", "count": 1}]),
			new Equipment("equip_7", "사자왕의 건틀렛", "static/images/icons/equipment/7.png", undefined,
				[{"equipId": "equip_147", "count": 20}]),
			new Equipment("equip_8", "뇌광궁", "static/images/icons/equipment/8.png", undefined,
				[{"equipId": "equip_194", "count": 20},
				{"equipId": "equip_86", "count": 1},
				{"equipId": "equip_54", "count": 1}]),
			new Equipment("equip_9", "엔젤 보우", "static/images/icons/equipment/9.png", undefined,
				[{"equipId": "equip_148", "count": 20}]),
			new Equipment("equip_10", "비룡창", "static/images/icons/equipment/10.png", undefined,
				[{"equipId": "equip_195", "count": 20},
				{"equipId": "equip_56", "count": 1},
				{"equipId": "equip_80", "count": 1}]),
			new Equipment("equip_11", "퀸즈 스피어", "static/images/icons/equipment/11.png", undefined,
				[{"equipId": "equip_149", "count": 20}]),
			new Equipment("equip_12", "자룡부", "static/images/icons/equipment/12.png", undefined,
				[{"equipId": "equip_150", "count": 20}]),
			new Equipment("equip_13", "헬파이어 액스", "static/images/icons/equipment/13.png", undefined,
				[{"equipId": "equip_196", "count": 20},
				{"equipId": "equip_82", "count": 1}]),
			new Equipment("equip_14", "퓨리 로드", "static/images/icons/equipment/14.png", undefined,
				[{"equipId": "equip_151", "count": 20}]),
			new Equipment("equip_15", "태양의 로드", "static/images/icons/equipment/15.png", undefined,
				[{"equipId": "equip_152", "count": 20}]),
			new Equipment("equip_16", "월화장", "static/images/icons/equipment/16.png", undefined,
				[{"equipId": "equip_197", "count": 20},
				{"equipId": "equip_61", "count": 1}]),
			new Equipment("equip_17", "생명의 로드", "static/images/icons/equipment/17.png", undefined,
				[{"equipId": "equip_153", "count": 20}]),
			new Equipment("equip_18", "인비저블 드레스", "static/images/icons/equipment/18.png", undefined,
				[{"equipId": "equip_154", "count": 20}]),
			new Equipment("equip_19", "엔젤 아머", "static/images/icons/equipment/19.png", undefined,
				[{"equipId": "equip_198", "count": 20},
				{"equipId": "equip_85", "count": 1},
				{"equipId": "equip_67", "count": 1}]),
			new Equipment("equip_20", "월하의 법의", "static/images/icons/equipment/20.png", undefined,
				[{"equipId": "equip_155", "count": 20}]),
			new Equipment("equip_21", "대마도사의 로브", "static/images/icons/equipment/21.png", undefined,
				[{"equipId": "equip_156", "count": 20}]),
			new Equipment("equip_22", "엠프레스 실드", "static/images/icons/equipment/22.png", undefined,
				[{"equipId": "equip_199", "count": 20},
				{"equipId": "equip_85", "count": 1},
				{"equipId": "equip_88", "count": 1}]),
			new Equipment("equip_23", "팔라딘 그리브", "static/images/icons/equipment/23.png", undefined,
				[{"equipId": "equip_200", "count": 20},
				{"equipId": "equip_74", "count": 1},
				{"equipId": "equip_80", "count": 1},
				{"equipId": "equip_83", "count": 1}]),
			new Equipment("equip_24", "위저드 부츠", "static/images/icons/equipment/24.png", undefined,
				[{"equipId": "equip_157", "count": 20}]),
			new Equipment("equip_25", "페더 왈츠", "static/images/icons/equipment/25.png", undefined,
				[{"equipId": "equip_201", "count": 20},
				{"equipId": "equip_85", "count": 1},
				{"equipId": "equip_107", "count": 1}]),
			new Equipment("equip_26", "위저드 후드", "static/images/icons/equipment/26.png", undefined,
				[{"equipId": "equip_202", "count": 20},
				{"equipId": "equip_89", "count": 1}]),
			new Equipment("equip_27", "아이스 클레이모어", "static/images/icons/equipment/27.png", undefined,
				[{"equipId": "equip_158", "count": 20}]),
			new Equipment("equip_28", "매신의 빛나는 검", "static/images/icons/equipment/28.png", undefined,
				[{"equipId": "equip_159", "count": 20}]),
			new Equipment("equip_29", "다크 매터 엣지", "static/images/icons/equipment/29.png", undefined,
				[{"equipId": "equip_160", "count": 20}]),
			new Equipment("equip_30", "블리자드 클로", "static/images/icons/equipment/30.png", undefined,
				[{"equipId": "equip_203", "count": 20},
				{"equipId": "equip_6", "count": 1},
				{"equipId": "equip_86", "count": 1}]),
			new Equipment("equip_31", "아르테미스 보우", "static/images/icons/equipment/31.png", undefined,
				[{"equipId": "equip_161", "count": 20}]),
			new Equipment("equip_32", "스톰 브링어", "static/images/icons/equipment/32.png", undefined,
				[{"equipId": "equip_204", "count": 20},
				{"equipId": "equip_10", "count": 1}]),
			new Equipment("equip_33", "여왕의 전투 도끼", "static/images/icons/equipment/33.png", undefined,
				[{"equipId": "equip_162", "count": 20}]),
			new Equipment("equip_34", "사법신의 석장", "static/images/icons/equipment/34.png", undefined,
				[{"equipId": "equip_163", "count": 20}]),
			new Equipment("equip_35", "피닉스 로드", "static/images/icons/equipment/35.png", undefined,
				[{"equipId": "equip_205", "count": 20},
				{"equipId": "equip_16", "count": 1},
				{"equipId": "equip_89", "count": 1},
				{"equipId": "equip_82", "count": 1}]),
			new Equipment("equip_36", "미스릴 플레이트", "static/images/icons/equipment/36.png", undefined,
				[{"equipId": "equip_206", "count": 20},
				{"equipId": "equip_65", "count": 1},
				{"equipId": "equip_73", "count": 1},
				{"equipId": "equip_81", "count": 1}]),
			new Equipment("equip_37", "버밀리온 메일", "static/images/icons/equipment/37.png", undefined,
				[{"equipId": "equip_207", "count": 20},
				{"equipId": "equip_66", "count": 1},
				{"equipId": "equip_56", "count": 1}]),
			new Equipment("equip_38", "은둔자의 의복", "static/images/icons/equipment/38.png", undefined,
				[{"equipId": "equip_208", "count": 20},
				{"equipId": "equip_51", "count": 1},
				{"equipId": "equip_80", "count": 1}]),
			new Equipment("equip_39", "성자의 로브", "static/images/icons/equipment/39.png", undefined,
				[{"equipId": "equip_209", "count": 20},
				{"equipId": "equip_89", "count": 1},
				{"equipId": "equip_87", "count": 1}]),
			new Equipment("equip_40", "엔젤 부츠", "static/images/icons/equipment/40.png", undefined,
				[{"equipId": "equip_210", "count": 20},
				{"equipId": "equip_84", "count": 1},
				{"equipId": "equip_47", "count": 1}]),
			new Equipment("equip_41", "법왕의 후드", "static/images/icons/equipment/41.png", undefined,
				[{"equipId": "equip_211", "count": 20},
				{"equipId": "equip_85", "count": 1},
				{"equipId": "equip_79", "count": 1},
				{"equipId": "equip_71", "count": 1}]),
			new Equipment("equip_42", "엘리멘탈 하트", "static/images/icons/equipment/42.png", undefined,
				[{"equipId": "equip_164", "count": 20}]),
			new Equipment("equip_43", "수호의 팔찌", "static/images/icons/equipment/43.png", undefined,
				[{"equipId": "equip_165", "count": 20}]),
			new Equipment("equip_44", "초승달의 한탄", "static/images/icons/equipment/44.png", undefined,
				[{"equipId": "equip_166", "count": 20}]),
			new Equipment("equip_45", "빛나는 검", "static/images/icons/equipment/45.png", undefined,
				[{"equipId": "equip_167", "count": 3}]),
			new Equipment("equip_46", "용무늬 검", "static/images/icons/equipment/46.png", undefined,
				[{"equipId": "equip_168", "count": 5}]),
			new Equipment("equip_47", "페더 블레이드", "static/images/icons/equipment/47.png", undefined,
				[{"equipId": "equip_169", "count": 5}]),
			new Equipment("equip_48", "월광도", "static/images/icons/equipment/48.png", undefined,
				[{"equipId": "equip_212", "count": 5},
				{"equipId": "equip_50", "count": 1}]),
			new Equipment("equip_49", "뇌신도", "static/images/icons/equipment/49.png", undefined,
				[{"equipId": "equip_213", "count": 5},
				{"equipId": "equip_46", "count": 1}]),
			new Equipment("equip_50", "플래티넘 나이프", "static/images/icons/equipment/50.png", undefined,
				[{"equipId": "equip_170", "count": 3}]),
			new Equipment("equip_51", "뱀파이어 대거", "static/images/icons/equipment/51.png", undefined,
				[{"equipId": "equip_214", "count": 5},
				{"equipId": "equip_81", "count": 1}]),
			new Equipment("equip_52", "드래곤즈 클로", "static/images/icons/equipment/52.png", undefined,
				[{"equipId": "equip_171", "count": 5}]),
			new Equipment("equip_53", "큐피드의 활", "static/images/icons/equipment/53.png", undefined,
				[{"equipId": "equip_172", "count": 5}]),
			new Equipment("equip_54", "데빌스 보우", "static/images/icons/equipment/54.png", undefined,
				[{"equipId": "equip_215", "count": 5},
				{"equipId": "equip_53", "count": 1}]),
			new Equipment("equip_55", "기사의 자랑", "static/images/icons/equipment/55.png", undefined,
				[{"equipId": "equip_216", "count": 3},
				{"equipId": "equip_124", "count": 1}]),
			new Equipment("equip_56", "앱솔루트 스피어", "static/images/icons/equipment/56.png", undefined,
				[{"equipId": "equip_173", "count": 5}]),
			new Equipment("equip_57", "블루 스피어 액스", "static/images/icons/equipment/57.png", undefined,
				[{"equipId": "equip_174", "count": 3}]),
			new Equipment("equip_58", "꽃의 전투 도끼", "static/images/icons/equipment/58.png", undefined,
				[{"equipId": "equip_217", "count": 5},
				{"equipId": "equip_57", "count": 1},
				{"equipId": "equip_118", "count": 1}]),
			new Equipment("equip_59", "번개의 도끼", "static/images/icons/equipment/59.png", undefined,
				[{"equipId": "equip_218", "count": 5},
				{"equipId": "equip_58", "count": 1}]),
			new Equipment("equip_60", "쏜블러드 로드", "static/images/icons/equipment/60.png", undefined,
				[{"equipId": "equip_175", "count": 3}]),
			new Equipment("equip_61", "데빌스 혼", "static/images/icons/equipment/61.png", undefined,
				[{"equipId": "equip_176", "count": 5}]),
			new Equipment("equip_62", "천구의 지팡이", "static/images/icons/equipment/62.png", undefined,
				[{"equipId": "equip_219", "count": 3},
				{"equipId": "equip_92", "count": 1}]),
			new Equipment("equip_63", "꽃봉오리 지팡이", "static/images/icons/equipment/63.png", undefined,
				[{"equipId": "equip_177", "count": 5}]),
			new Equipment("equip_64", "패션 아머", "static/images/icons/equipment/64.png", undefined,
				[{"equipId": "equip_220", "count": 5},
				{"equipId": "equip_95", "count": 1}]),
			new Equipment("equip_65", "배틀 드레스", "static/images/icons/equipment/65.png", undefined,
				[{"equipId": "equip_221", "count": 5},
				{"equipId": "equip_95", "count": 1},
				{"equipId": "equip_97", "count": 1}]),
			new Equipment("equip_66", "헤비 메탈 아머", "static/images/icons/equipment/66.png", undefined,
				[{"equipId": "equip_178", "count": 5}]),
			new Equipment("equip_67", "고져스 아머", "static/images/icons/equipment/67.png", undefined,
				[{"equipId": "equip_222", "count": 5},
				{"equipId": "equip_97", "count": 1}]),
			new Equipment("equip_68", "밀푀유 의복", "static/images/icons/equipment/68.png", undefined,
				[{"equipId": "equip_223", "count": 5},
				{"equipId": "equip_99", "count": 1}]),
			new Equipment("equip_69", "왕궁 의복", "static/images/icons/equipment/69.png", undefined,
				[{"equipId": "equip_179", "count": 5}]),
			new Equipment("equip_70", "코스모스 의복", "static/images/icons/equipment/70.png", undefined,
				[{"equipId": "equip_224", "count": 5},
				{"equipId": "equip_68", "count": 1},
				{"equipId": "equip_86", "count": 1}]),
			new Equipment("equip_71", "큐피드의 로브", "static/images/icons/equipment/71.png", undefined,
				[{"equipId": "equip_225", "count": 5},
				{"equipId": "equip_101", "count": 1}]),
			new Equipment("equip_72", "철학자의 로브", "static/images/icons/equipment/72.png", undefined,
				[{"equipId": "equip_180", "count": 5}]),
			new Equipment("equip_73", "가넷 실드", "static/images/icons/equipment/73.png", undefined,
				[{"equipId": "equip_181", "count": 5}]),
			new Equipment("equip_74", "닌자 신발", "static/images/icons/equipment/74.png", undefined,
				[{"equipId": "equip_182", "count": 5}]),
			new Equipment("equip_75", "펜서 부츠", "static/images/icons/equipment/75.png", undefined,
				[{"equipId": "equip_226", "count": 5},
				{"equipId": "equip_74", "count": 1}]),
			new Equipment("equip_76", "위치 팰리스 부츠", "static/images/icons/equipment/76.png", undefined,
				[{"equipId": "equip_227", "count": 5},
				{"equipId": "equip_116", "count": 1},
				{"equipId": "equip_104", "count": 1}]),
			new Equipment("equip_77", "드래곤 헤드", "static/images/icons/equipment/77.png", undefined,
				[{"equipId": "equip_228", "count": 5},
				{"equipId": "equip_97", "count": 1},
				{"equipId": "equip_107", "count": 1}]),
			new Equipment("equip_78", "위치 헤어 밴드", "static/images/icons/equipment/78.png", undefined,
				[{"equipId": "equip_183", "count": 5}]),
			new Equipment("equip_79", "위치 햇", "static/images/icons/equipment/79.png", undefined,
				[{"equipId": "equip_184", "count": 5}]),
			new Equipment("equip_80", "오팔 귀걸이", "static/images/icons/equipment/80.png", undefined,
				[{"equipId": "equip_185", "count": 5}]),
			new Equipment("equip_81", "그리핀의 날개 장식", "static/images/icons/equipment/81.png", undefined,
				[{"equipId": "equip_186", "count": 5}]),
			new Equipment("equip_82", "진홍색 다이아", "static/images/icons/equipment/82.png", undefined,
				[{"equipId": "equip_187", "count": 5}]),
			new Equipment("equip_83", "에메랄드 귀걸이", "static/images/icons/equipment/83.png", undefined,
				[{"equipId": "equip_188", "count": 5}]),
			new Equipment("equip_84", "팔각성 목걸이", "static/images/icons/equipment/84.png", undefined,
				[{"equipId": "equip_229", "count": 5},
				{"equipId": "equip_112", "count": 1}]),
			new Equipment("equip_85", "사자왕의 수호", "static/images/icons/equipment/85.png", undefined,
				[{"equipId": "equip_230", "count": 5},
				{"equipId": "equip_83", "count": 1}]),
			new Equipment("equip_86", "터키석 귀걸이", "static/images/icons/equipment/86.png", undefined,
				[{"equipId": "equip_189", "count": 5}]),
			new Equipment("equip_87", "진주 귀걸이", "static/images/icons/equipment/87.png", undefined,
				[{"equipId": "equip_231", "count": 5},
				{"equipId": "equip_116", "count": 1}]),
			new Equipment("equip_88", "소서러 아이글래스", "static/images/icons/equipment/88.png", undefined,
				[{"equipId": "equip_86", "count": 1},
				{"equipId": "equip_116", "count": 1}]),
			new Equipment("equip_89", "월계수의 슬픔", "static/images/icons/equipment/89.png", undefined,
				[{"equipId": "equip_190", "count": 5}]),
			new Equipment("equip_90", "그린 로드", "static/images/icons/equipment/90.png", undefined),
			new Equipment("equip_91", "리틀 드래곤 로드", "static/images/icons/equipment/91.png", undefined),
			new Equipment("equip_92", "만병통치 지팡이", "static/images/icons/equipment/92.png", undefined),
			new Equipment("equip_93", "유니콘의 자애", "static/images/icons/equipment/93.png", undefined),
			new Equipment("equip_94", "지혜의 옷", "static/images/icons/equipment/94.png", undefined),
			new Equipment("equip_95", "라이트 플레이트", "static/images/icons/equipment/95.png", undefined),
			new Equipment("equip_96", "스케일 메일", "static/images/icons/equipment/96.png", undefined),
			new Equipment("equip_97", "하이메탈 플레이트", "static/images/icons/equipment/97.png", undefined),
			new Equipment("equip_98", "민속 의복", "static/images/icons/equipment/98.png", undefined),
			new Equipment("equip_99", "닌자복", "static/images/icons/equipment/99.png", undefined),
			new Equipment("equip_100", "봄빛 로브", "static/images/icons/equipment/100.png", undefined),
			new Equipment("equip_101", "노르딕 로브", "static/images/icons/equipment/101.png", undefined),
			new Equipment("equip_102", "타워 실드", "static/images/icons/equipment/102.png", undefined),
			new Equipment("equip_103", "크라운 부츠", "static/images/icons/equipment/103.png", undefined),
			new Equipment("equip_104", "헌팅 부츠", "static/images/icons/equipment/104.png", undefined),
			new Equipment("equip_105", "위치 부츠", "static/images/icons/equipment/105.png", undefined),
			new Equipment("equip_106", "귀여운 카스케트", "static/images/icons/equipment/106.png", undefined),
			new Equipment("equip_107", "레기온 헬름", "static/images/icons/equipment/107.png", undefined),
			new Equipment("equip_108", "수행자의 후드", "static/images/icons/equipment/108.png", undefined),
			new Equipment("equip_109", "용기의 보주", "static/images/icons/equipment/109.png", undefined),
			new Equipment("equip_110", "스파이크 뱅글", "static/images/icons/equipment/110.png", undefined),
			new Equipment("equip_111", "자애의 보주", "static/images/icons/equipment/111.png", undefined),
			new Equipment("equip_112", "승리의 실팔찌", "static/images/icons/equipment/112.png", undefined),
			new Equipment("equip_113", "매직 아이글래스", "static/images/icons/equipment/113.png", undefined),
			new Equipment("equip_114", "지혜의 보주", "static/images/icons/equipment/114.png", undefined),
			new Equipment("equip_115", "매직 모노클", "static/images/icons/equipment/115.png", undefined),
			new Equipment("equip_116", "문양이 새겨진 팔찌", "static/images/icons/equipment/116.png", undefined),
			new Equipment("equip_117", "기어 블레이드", "static/images/icons/equipment/117.png", undefined),
			new Equipment("equip_118", "블루 블러드", "static/images/icons/equipment/118.png", undefined),
			new Equipment("equip_119", "오로라의 검", "static/images/icons/equipment/119.png", undefined),
			new Equipment("equip_120", "크레센트 소드", "static/images/icons/equipment/120.png", undefined),
			new Equipment("equip_121", "코만도 나이프", "static/images/icons/equipment/121.png", undefined),
			new Equipment("equip_122", "레더 너클", "static/images/icons/equipment/122.png", undefined),
			new Equipment("equip_123", "크리스탈 보우", "static/images/icons/equipment/123.png", undefined),
			new Equipment("equip_124", "트라이던트", "static/images/icons/equipment/124.png", undefined),
			new Equipment("equip_125", "플레임 스피어", "static/images/icons/equipment/125.png", undefined),
			new Equipment("equip_126", "메탈 액스", "static/images/icons/equipment/126.png", undefined),
			new Equipment("equip_127", "하이메탈 액스", "static/images/icons/equipment/127.png", undefined),
			new Equipment("equip_128", "아이언 블레이드", "static/images/icons/equipment/128.png", undefined),
			new Equipment("equip_129", "킬러 펜슬", "static/images/icons/equipment/129.png", undefined),
			new Equipment("equip_130", "우드 그립", "static/images/icons/equipment/130.png", undefined),
			new Equipment("equip_131", "사냥꾼의 활", "static/images/icons/equipment/131.png", undefined),
			new Equipment("equip_132", "강철의 창", "static/images/icons/equipment/132.png", undefined),
			new Equipment("equip_133", "한손 도끼", "static/images/icons/equipment/133.png", undefined),
			new Equipment("equip_134", "향나무 지팡이", "static/images/icons/equipment/134.png", undefined),
			new Equipment("equip_135", "가죽 멜빵바지", "static/images/icons/equipment/135.png", undefined),
			new Equipment("equip_136", "시작의 로브", "static/images/icons/equipment/136.png", undefined),
			new Equipment("equip_137", "나무 방패", "static/images/icons/equipment/137.png", undefined),
			new Equipment("equip_138", "가죽 부츠", "static/images/icons/equipment/138.png", undefined),
			new Equipment("equip_139", "세련된 베레모", "static/images/icons/equipment/139.png", undefined),
			new Equipment("equip_140", "의지의 브레이슬릿", "static/images/icons/equipment/140.png", undefined),
			new Equipment("equip_141", "부적 펜던트", "static/images/icons/equipment/141.png", undefined),
			new Equipment("equip_142", "기합의 브레이슬릿", "static/images/icons/equipment/142.png", undefined),
			new Equipment("equip_143", "엔젤 블레이드(조각)", "static/images/icons/equipment/143.png", undefined),
			new Equipment("equip_144", "태양검(조각)", "static/images/icons/equipment/144.png", undefined),
			new Equipment("equip_145", "요접의 도(조각)", "static/images/icons/equipment/145.png", undefined),
			new Equipment("equip_146", "프린세스 나이프(조각)", "static/images/icons/equipment/146.png", undefined),
			new Equipment("equip_147", "사자왕의 건틀렛(조각)", "static/images/icons/equipment/147.png", undefined),
			new Equipment("equip_148", "엔젤 보우(조각)", "static/images/icons/equipment/148.png", undefined),
			new Equipment("equip_149", "퀸즈 스피어(조각)", "static/images/icons/equipment/149.png", undefined),
			new Equipment("equip_150", "자룡부(조각)", "static/images/icons/equipment/150.png", undefined),
			new Equipment("equip_151", "퓨리 로드(조각)", "static/images/icons/equipment/151.png", undefined),
			new Equipment("equip_152", "태양의 로드(조각)", "static/images/icons/equipment/152.png", undefined),
			new Equipment("equip_153", "생명의 로드(조각)", "static/images/icons/equipment/153.png", undefined),
			new Equipment("equip_154", "인비저블 드레스(조각)", "static/images/icons/equipment/154.png", undefined),
			new Equipment("equip_155", "월하의 법의 (조각)", "static/images/icons/equipment/155.png", undefined),
			new Equipment("equip_156", "대마도사의 로브(조각)", "static/images/icons/equipment/156.png", undefined),
			new Equipment("equip_157", "위저드 부츠(조각)", "static/images/icons/equipment/157.png", undefined),
			new Equipment("equip_158", "아이스 클레이모어(조각)", "static/images/icons/equipment/158.png", undefined),
			new Equipment("equip_159", "독수리의 황검(조각)", "static/images/icons/equipment/159.png", undefined),
			new Equipment("equip_160", "다크 매터 엣지(조각)", "static/images/icons/equipment/160.png", undefined),
			new Equipment("equip_161", "아르테미스 보우(조각)", "static/images/icons/equipment/161.png", undefined),
			new Equipment("equip_162", "여왕의 전투도끼(조각)", "static/images/icons/equipment/162.png", undefined),
			new Equipment("equip_163", "사법신의 석장(조각)", "static/images/icons/equipment/163.png", undefined),
			new Equipment("equip_164", "엘리멘탈 하트(조각)", "static/images/icons/equipment/164.png", undefined),
			new Equipment("equip_165", "수호의 팔찌(조각)", "static/images/icons/equipment/165.png", undefined),
			new Equipment("equip_166", "초승달의 한탄(조각)", "static/images/icons/equipment/166.png", undefined),
			new Equipment("equip_167", "빛나는 검(조각)", "static/images/icons/equipment/167.png", undefined),
			new Equipment("equip_168", "용무늬 검(조각)", "static/images/icons/equipment/168.png", undefined),
			new Equipment("equip_169", "페더 블레이드(조각)", "static/images/icons/equipment/169.png", undefined),
			new Equipment("equip_170", "플래티넘 나이프(조각)", "static/images/icons/equipment/170.png", undefined),
			new Equipment("equip_171", "드래곤 클로(조각)", "static/images/icons/equipment/171.png", undefined),
			new Equipment("equip_172", "큐피드의 활(조각)", "static/images/icons/equipment/172.png", undefined),
			new Equipment("equip_173", "앱솔루트 스피어(조각)", "static/images/icons/equipment/173.png", undefined),
			new Equipment("equip_174", "블루 스피어 액스(조각)", "static/images/icons/equipment/174.png", undefined),
			new Equipment("equip_175", "쏜블러드 로드(조각)", "static/images/icons/equipment/175.png", undefined),
			new Equipment("equip_176", "데빌스 혼(조각)", "static/images/icons/equipment/176.png", undefined),
			new Equipment("equip_177", "꽃봉오리 지팡이(조각)", "static/images/icons/equipment/177.png", undefined),
			new Equipment("equip_178", "헤비 메탈 아머(조각)", "static/images/icons/equipment/178.png", undefined),
			new Equipment("equip_179", "왕궁의복(조각)", "static/images/icons/equipment/179.png", undefined),
			new Equipment("equip_180", "철학자의 로브(조각)", "static/images/icons/equipment/180.png", undefined),
			new Equipment("equip_181", "가넷 실드(조각)", "static/images/icons/equipment/181.png", undefined),
			new Equipment("equip_182", "닌자 신발(조각)", "static/images/icons/equipment/182.png", undefined),
			new Equipment("equip_183", "위치 카추샤(조각)", "static/images/icons/equipment/183.png", undefined),
			new Equipment("equip_184", "위치 햇(조각)", "static/images/icons/equipment/184.png", undefined),
			new Equipment("equip_185", "오팔 귀걸이(조각)", "static/images/icons/equipment/185.png", undefined),
			new Equipment("equip_186", "그리핀의 날개 장식(조각)", "static/images/icons/equipment/186.png", undefined),
			new Equipment("equip_187", "진홍색 다이아(조각)", "static/images/icons/equipment/187.png", undefined),
			new Equipment("equip_188", "에메랄드 귀걸이(조각)", "static/images/icons/equipment/188.png", undefined),
			new Equipment("equip_189", "터키석 귀걸이(조각)", "static/images/icons/equipment/189.png", undefined),
			new Equipment("equip_190", "월계수의 슬픔(조각)", "static/images/icons/equipment/190.png", undefined),
			new Equipment("equip_191", "광휘의 검 설계도", "static/images/icons/equipment/191.png", undefined),
			new Equipment("equip_192", "프레셔스 나이프 설계도", "static/images/icons/equipment/192.png", undefined),
			new Equipment("equip_193", "화염의 건틀렛 설계도", "static/images/icons/equipment/193.png", undefined),
			new Equipment("equip_194", "뇌광궁 설계도", "static/images/icons/equipment/194.png", undefined),
			new Equipment("equip_195", "비룡창 설계도", "static/images/icons/equipment/195.png", undefined),
			new Equipment("equip_196", "헬파이어 액스 설계도", "static/images/icons/equipment/196.png", undefined),
			new Equipment("equip_197", "월화장 설계도", "static/images/icons/equipment/197.png", undefined),
			new Equipment("equip_198", "엔젤 아머 설계도", "static/images/icons/equipment/198.png", undefined),
			new Equipment("equip_199", "엠프레스 실드 설계도", "static/images/icons/equipment/199.png", undefined),
			new Equipment("equip_200", "팔라딘 그리브 설계도", "static/images/icons/equipment/200.png", undefined),
			new Equipment("equip_201", "페더 왈츠 설계도", "static/images/icons/equipment/201.png", undefined),
			new Equipment("equip_202", "위저드 후드 설계도", "static/images/icons/equipment/202.png", undefined),
			new Equipment("equip_203", "블리자드 클로 설계도", "static/images/icons/equipment/203.png", undefined),
			new Equipment("equip_204", "스톰 브링어 설계도", "static/images/icons/equipment/204.png", undefined),
			new Equipment("equip_205", "피닉스 로드 설계도", "static/images/icons/equipment/205.png", undefined),
			new Equipment("equip_206", "미스릴 플레이트 설계도", "static/images/icons/equipment/206.png", undefined),
			new Equipment("equip_207", "버밀리온 메일 설계도", "static/images/icons/equipment/207.png", undefined),
			new Equipment("equip_208", "은둔자의 의복 설계도", "static/images/icons/equipment/208.png", undefined),
			new Equipment("equip_209", "성자의 로브 설계도", "static/images/icons/equipment/209.png", undefined),
			new Equipment("equip_210", "엔젤 부츠 설계도", "static/images/icons/equipment/210.png", undefined),
			new Equipment("equip_211", "법왕의 후드 설계도", "static/images/icons/equipment/211.png", undefined),
			new Equipment("equip_212", "월광도 설계도", "static/images/icons/equipment/212.png", undefined),
			new Equipment("equip_213", "뇌신도 설계도", "static/images/icons/equipment/213.png", undefined),
			new Equipment("equip_214", "뱀파이어 대거 설계도", "static/images/icons/equipment/214.png", undefined),
			new Equipment("equip_215", "데빌스 보우 설계도", "static/images/icons/equipment/215.png", undefined),
			new Equipment("equip_216", "기사의 자랑 설계도", "static/images/icons/equipment/216.png", undefined),
			new Equipment("equip_217", "꽃의 전투도끼 설계도", "static/images/icons/equipment/217.png", undefined),
			new Equipment("equip_218", "번개의 도끼 설계도", "static/images/icons/equipment/218.png", undefined),
			new Equipment("equip_219", "천구의 지팡이 설계도", "static/images/icons/equipment/219.png", undefined),
			new Equipment("equip_220", "패션 아머 설계도", "static/images/icons/equipment/220.png", undefined),
			new Equipment("equip_221", "배틀 드레스 설계도", "static/images/icons/equipment/221.png", undefined),
			new Equipment("equip_222", "고딕 아머 설계도", "static/images/icons/equipment/222.png", undefined),
			new Equipment("equip_223", "밀푀유 의복 설계도", "static/images/icons/equipment/223.png", undefined),
			new Equipment("equip_224", "코스모스의복 설계도", "static/images/icons/equipment/224.png", undefined),
			new Equipment("equip_225", "큐피드의 로브 설계도", "static/images/icons/equipment/225.png", undefined),
			new Equipment("equip_226", "펜서 부츠 설계도", "static/images/icons/equipment/226.png", undefined),
			new Equipment("equip_227", "위치 팰리스 부츠 설계도", "static/images/icons/equipment/227.png", undefined),
			new Equipment("equip_228", "드래곤 헤드 설계도", "static/images/icons/equipment/228.png", undefined),
			new Equipment("equip_229", "팔각성 목걸이 설계도", "static/images/icons/equipment/229.png", undefined),
			new Equipment("equip_230", "사자왕의 수호 설계도", "static/images/icons/equipment/230.png", undefined),
			new Equipment("equip_231", "진주 귀걸이 설계도", "static/images/icons/equipment/231.png", undefined),
			new Equipment("equip_232", "라이트 플레이트 설계도", "static/images/icons/equipment/232.png", undefined),
			new Equipment("equip_233", "스케일 메일 설계도", "static/images/icons/equipment/233.png", undefined),
			new Equipment("equip_234", "하이메탈 플레이트 설계도", "static/images/icons/equipment/234.png", undefined),
			new Equipment("equip_235", "민속 의복 설계도", "static/images/icons/equipment/235.png", undefined),
			new Equipment("equip_236", "닌자복 설계도", "static/images/icons/equipment/236.png", undefined),
			new Equipment("equip_237", "봄빛 로브 설계도", "static/images/icons/equipment/237.png", undefined),
			new Equipment("equip_238", "노르딕 로브 설계도", "static/images/icons/equipment/238.png", undefined),
			new Equipment("equip_239", "타워 실드 설계도", "static/images/icons/equipment/239.png", undefined),
			new Equipment("equip_240", "크라운 부츠 설계도", "static/images/icons/equipment/240.png", undefined),
			new Equipment("equip_241", "헌팅 부츠 설계도", "static/images/icons/equipment/241.png", undefined),
			new Equipment("equip_242", "귀여운 카스케트 설계도", "static/images/icons/equipment/242.png", undefined),
			new Equipment("equip_243", "레기온 헬름 설계도", "static/images/icons/equipment/243.png", undefined),
			new Equipment("equip_244", "수행자의 후드 설계도", "static/images/icons/equipment/244.png", undefined),
			new Equipment("equip_245", "매직 모노클 설계도", "static/images/icons/equipment/245.png", undefined),
			new Equipment("equip_246", "문양이 새겨진 팔찌 설계도", "static/images/icons/equipment/246.png", undefined)
		];

		return equipmentData;
	}

	// id: string
	static getEquipmentById(id) {
		const equipData = DataManager.getEquipments();
		for (var equip of equipData) {
			if (equip.id == id) {
				return equip;
			}
		}
	}

	// name: string
	static getEquipmentByName(name) {
		const equipData = DataManager.getEquipments();
		for (var equip of equipData) {
			var trim = equip.name.replace(/ /g, "");
			var trimName = name.replace(/ /g, "");
			if (trim.includes(trimName)) {
				return equip;
			}
		}
	}

	// name: string
	static getEquipmentsByName(name) {
		var res = [];
		const equipData = DataManager.getEquipments();
		for (var equip of equipData) {
			var trim = equip.name.replace(/ /g, "");
			var trimName = name.replace(/ /g, "");
			if (trim.includes(trimName)) {
				res.push(equip);
			}
		}
		return res;
	}

	// temporary function
	// names: array[string]
	static getEq(names, rank) {
		var res = [];
		var res_name = [];
		for (var name of names) {
			var eq = DataManager.getEquipmentByName(name);
			if (eq != undefined) {
				res.push(eq.id);
				res_name.push(eq.name);
			}
		}
		console.log(res_name);
		var r=res.map(r => `"${r}"`).join(",");
		return `new RankInfo(${rank}, [${r}])`;
		// return res;
	}

	// temporary function
	// function neq(names) {
	// 	var txt=[];
	// 	for (var i = 0; i < names.length; i+=6) {
	// 		var res = [];
	// 		for (var j = 0; j < 6; j++) {
	// 			res.push(names[i+j]);
	// 		}
	// 		txt.push(DataManager.getEq(res, parseInt(i/6)+1));
	// 	}
	// 	console.log(`${txt.join(",\n")}`);
	// }

	// when you need some rank equipment data, use this code
	// $('.ItemIconDiv img').map(function() { return $(this).attr('title'); });
}