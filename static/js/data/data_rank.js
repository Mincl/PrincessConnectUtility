class DataRank {
    // charId: string
    static getCharRankByCharId(charId) {
        const charRankData = DataRank.getCharRanks();
        for (var charRank of charRankData) {
            if (charRank.charId == charId) {
                return charRank;
            }
        }
    }

    // charId: string
    // rank: integer
    static getRankInfoByCharIdAndRank(charId, rank) {
        const charRankData = DataRank.getCharRanks();
        for (var charRank of charRankData) {
            if (charRank.charId == charId) {
                return charRank.getRankInfo(rank);
            }
        }
    }

    static getCharRanks() {
        if (DataRank.charRankData == undefined) {
            DataRank.charRankData = [
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
        }

        return DataRank.charRankData;
    }
}