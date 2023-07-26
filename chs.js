/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    " \n        Idle Combat": "\n 放置战斗",
    " \n        Idle Repair": "\n 放置修复",
    "- A battle once started can't be stopped until 1 bot is disabled.": "- 战斗一旦开始就无法停止，直到 1 个机器人被禁用。",
    "- An item will be randomly picked from the crates that you gain after it's full.": "- 装满后，将从您获得的板条箱中随机挑选一个物品。",
    "- Try training against an": "- 尝试针对",
    "- You can only store a limited amount of loot in your": "- 你只能储存有限数量的战利品",
    "- You can try out gear and stat point combinations all you want on your": "- 你可以在你的电脑上尝试你想要的装备和统计点组合",
    "- you get stat points every time you level up to spend in": "- 每次升级时您都会获得统计点以进行消费",
    "- You lose all the installed gear of your": "- 您丢失了所有已安装的装备",
    "- Your": "- 你的",
    ": More accuracy and dodge.": "：更高的精确度和闪避。",
    ": More damage.": ": 伤害更大。",
    ": More experience.": ": 更多经验。",
    ": More HP.": "：更多生命值。",
    "Active bot": "活跃机器人",
    "Constitution": "体质",
    "Dexterity": "敏捷",
    "Experience:": "经验：",
    "Fight": "战斗",
    "Hammerspace": "背包",
    "Hammerspace:": "背包：",
    "has fixed stats and you'll lose the installed items when switching it out with something new (when not in combat).": "具有固定的统计数据，当您将其更换为新的东西时（不在战斗中），您将丢失已安装的物品。",
    "Have fun! There's no \"right\" way to play, so play however you want. :)": "玩得开心！ 没有“正确”的玩法，所以想怎么玩就怎么玩。 :)",
    "Hello there and welcome to Unboxing!": "您好，欢迎来到 开箱放置！",
    "Infant": "婴儿",
    "Intelligence": "智力",
    "It looks like you are new, so here are some tips:": "看来您是新人，所以这里有一些提示：",
    "Level:": "等级：",
    "on your prototype.": "在你的原型上。",
    "or two and gather some experience and loot chests.": "或两个并收集一些经验和战利品箱。",
    "Please construct a bot in": "请构建一个机器人",
    "Please select an enemy to fight from the list of": "请从列表中选择一个要战斗的敌人",
    "Pre-order Edition": "预购版",
    "Prototype": "原型",
    "Strength": "力量",
    "This is (roughly) what the stats do:": "这（大致）是统计数据的作用：",
    "to fight": "去战斗",
    "training bots": "训练机器人",
    "Training bots": "训练机器人",
    "Trainmate": "火车伙伴",
    "Tutorial": "教程",
    "until you use construct it.": "直到你使用构造它。",
    "Warehouse:": "仓库：",
    "Welcome to Unboxing! (0.2.0)": "欢迎来到开箱放置！ (0.2.0)",
    "when it's hp reaches 0.": "当生命值达到 0 时。",
    "your workshop": "你的作坊",
    "Your Workshop": "您的作坊",
    " prototype": "原型",
    "(Chest)": "（胸甲）",
    "(Feet)": "（脚部）",
    "(Head)": "（头部）",
    "(Legs)": "（腿部）",
    "(Weapon)": "（武器）",
    "Absorb": "吸收",
    "Actions": "行动",
    "Amethyst Beholder Eye of Faith": "紫水晶旁观者信仰之眼",
    "Armor": "盔甲",
    "Attack:": "攻击：",
    "Awaiting Opponent": "等待对手",
    "Big Generic Crate": "大通用板条箱",
    "Chest": "胸部",
    "Constitution:": "宪法：",
    "Construct": "构造",
    "Crate": "箱子",
    "Cryptstalker Headpiece of the Somber Keeper": "阴郁守护者的地穴追猎者头饰",
    "Current bot": "当前机器人",
    "Damage": "伤害",
    "Defense:": "防御：",
    "DexReq": "敏捷要求",
    "Dexterity:": "敏捷：",
    "Dodge": "躲闪",
    "Dreamwalker Legguards of Illusory Burdens": "梦行者虚幻负担护腿",
    "Feet": "脚部",
    "Fighting": "战斗",
    "Frenzied Staff of Alacrity": "疯狂的敏捷法杖",
    "Frostwoven Boots of Victory": "霜纹胜利之靴",
    "Gearscore": "装备评分",
    "Generic crate": "通用板条箱",
    "Hammerspace is empty": "背包是空的",
    "Hateful Gladiator's Staff of Transformed Bone Cudgel of Insanity": "憎恨角斗士的变形狂骨棍",
    "Head": "头部",
    "Health:": "生命值：",
    "Here, have a(n) Big Generic Crate": "在这里，有一个大通用板条箱",
    "Here, have a(n) Generic crate": "在这里，有一个通用板条箱",
    "Hit": "命中",
    "Hood of Primal Gladiator's Plate Helm": "原祖角斗士的板甲头盔兜帽",
    "Hp": "生命值",
    "Idle": "空闲",
    "Intelligence:": "智力：",
    "Last Attack:": "最近攻击：",
    "Legs": "腿部",
    "Missed": "未命中",
    "Mouth of the Faithful": "忠实者之口",
    "Name": "名称",
    "New Crate in your Hammerspace": "背包 中的新箱子",
    "No Chest installed": "未装备胸甲",
    "No elements found. Consider changing the search query.": "没有找到元素。 考虑更改搜索查询。",
    "No Feet installed": "未装备脚部",
    "No Head installed": "未装备头部",
    "No Legs installed": "未装备腿部",
    "No Weapon installed": "未装备武器",
    "Open": "打开",
    "Please construct your prototype bot first to use it in a fight": "请先构建您的原型机器人以在战斗中使用它",
    "Rarity": "稀有度",
    "Remove": "移除",
    "Remove all remaining items": "删除所有剩余物品",
    "Replace": "替换",
    "Satin Leggings of Murderous Intent": "杀意绸缎护腿",
    "Sempiternal Staff of Elune": "艾露恩永恒法杖",
    "Statpoints": "属性点",
    "Stats": "属性",
    "Status:": "状态：",
    "Strength:": "力量：",
    "StrReq": "请求请求",
    "Throw it all away": "扔了这一切",
    "Type": "类型",
    "Warehouse": "仓库",
    "Warmongering Aspirant's Dreadplate Chestpiece of Triumph": "好战候选者的恐怖板甲凯旋护胸",
    "Warning: You lose the currently equipped item when replacing it on an active bot!": "警告：在活动机器人上更换当前装备的物品时，您会丢失它！",
    "Weapon": "武器",
    "Workshop": "作坊",
    "Your bot": "你的机器人",
    "Your warehouse is empty": "你的仓库是空的",
    "Blood-Caked Stompers of the Grieving Soul Moccasins": "悲伤灵魂沾血莫卡辛鞋",
    "Chestguard of Ravaged Leather Tunic": "破损皮革外套胸甲",
    "Frostwolf Scout's Boots of Tracking Boots of the Lingering Vortex": "霜狼斥候的追踪之靴 徘徊漩涡之靴",
    "Replica Knight-Lieutenant's Satin Treads of Alacrity": "仿制的骑士中尉的欢欣丝质便鞋",
    "Rocket Boots of Oceanic Fury": "海洋之怒火箭靴",
    "Soul-Wand of the Phoenix King": "凤凰王灵魂之杖",
    "Swamplight Scepter of Akil'amon": "阿基拉蒙的沼泽光权杖",
    "Windrunner's Legguards of Durable Pants of Conquest": "耐用征服裤的风行者护腿",
    "Disabled": "已禁用",
    "Frostwolf Boot Knife of Prismatic Focus Staff": "棱镜焦点法杖的霜狼引导刀",
    "Prideful Gladiator's Greaves of the Illidari Crusade": "伊利达雷远征的骄矜角斗士护腿",
    "Swiftstride Boots of Living Scale": "生命鳞片的迅步之靴",
    "Chagan's Cheery Chopper": "查干的欢乐砍刀",
    "Helcular's Other Rod of Klaxxi'vess": "赫尔库拉的另一根卡拉克西维斯之杖",
    "Smashing Breastplate of Toxic Injections": "粉碎的注毒胸甲",
    "Amethyst Beholder Eye of Faith (Good)": "紫水晶旁观者信仰之眼（优秀）",
    "Amethyst Beholder Eye of Faith (Good) 1.2 armor": "紫水晶旁观者信仰之眼（优秀）1.2 护甲",
    "Arcanist's Wand of the Shadow": "奥术师的暗影魔杖",
    "Black Knight's War Hammer of Old Blunderbuss": "老铳黑骑士战锤",
    "Conjurer's Slippers of Alacrity": "咒法师的敏捷便鞋",
    "Farwatch Hide Jerkin of the Furious Gladiator's Satin Tunic": "远望者 狂怒角斗士的皮外衣",
    "Frostwolf Boot Knife of Prismatic Focus Staff (Great)": "棱镜焦点法杖的霜狼引导刀（杰出）",
    "Hardened Leather Boots of Broken Reliance": "破碎信赖的硬化皮靴",
    "Hardened Leather Boots of Broken Reliance (Good)": "破碎信赖的硬化皮靴（优秀）",
    "Hekatic Slippers of Alacrity": "狂暴便鞋",
    "Primal Gladiator's Baton of the Damned": "原祖角斗士的诅咒之杖",
    "Ribsteel Footguards of the Iron Cleated Warboots": "铁蹄战靴的肋钢护足",
    "Sentinel Trousers of Conquest": "征服哨兵长裤",
    "Smashing Breastplate of Toxic Injections (Normal)": "粉碎注射毒胸甲（普通）",
    "Swamplight Scepter of Akil'amon (Normal)": "阿基拉蒙的沼泽光权杖（普通）",
    "Wallwatcher Legguards of Dying Light": "消逝的光芒护墙者护腿",
    "Warmongering Aspirant's Dreadplate Chestpiece of Triumph (Normal)": "好战候选者的恐怖板甲凯旋胸甲（普通）",
    "Warmongering Gladiator's Dragonhide Helm of the Highborne": "好战角斗士的龙皮上层精灵头盔",
    "Zaxxis Boots of Cruelty": "扎克西斯残酷之靴",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Great": "杰出",
    "Normal": "普通",
    "Good": "优秀",
    "Amazing": "史诗",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',

    'i': 'i',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Required Strength: ": "要求力量：",
    "Required Dexterity: ": "要求敏捷：",
    "(Lvl ": "(等级 ",
    "Frostwolf Scout's Boots of Tracking Boots of the Lingering Vortex": "霜狼侦察兵的追踪之靴 滞留漩涡之靴",
    "Conqueror's Worldbreaker Hauberk of the Prehistoric Marauder": "征服者的破世者史前掠夺者锁甲",
    "Hateful Gladiator's Staff of Transformed Bone Cudgel of Insanity (Amazing)": "憎恨角斗士的变形狂骨棍 (史诗)",
    "Sentinel Trousers of Conquest (Poor)": "征服哨兵长裤（垃圾）",
    "(Prototype: ": "(原型: ",
    "Barbed Spear of Light": "带刺的光之矛",
    "Brutal Possessor": "残酷的占有者",
    "Faded Forest Prowler's Helm of Salvation": "褪色的森林徘徊者的拯救头盔",
    "Illidari-Bane Mageblade of the Eclipse": "伊利达雷祸根 日蚀法师之刃",
    "Prideful Gladiator's Ornamented Legplates of the Bloodless Knight": "骄矜角斗士的无血骑士的雕饰板甲腿甲",
    "Spiked Chain Armor": "尖刺链甲",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    " (Poor)": " (垃圾)",
    " (Amazing)": "（史诗）",
    " (Good)": " (优秀)",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+) \- ([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) Defense$/, '$1 防御'],
    [/^([\d\.]+) defense$/, '$1 防御'],
    [/^([\d\.]+) \- ([\d\.]+) dmg$/, '$1 \- $2 伤害'],
    [/^ ([\d\.]+) \- ([\d\.]+) dmg$/, '$1 \- $2 伤害'],
    [/^ ([\d\.]+) armor$/, '$1 护甲'],
    [/^([\d\.]+) armor$/, '$1 护甲'],
    [/^([\d\.]+) dmg$/, '$1 伤害'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\(min ([\d\.,]+) Dex\)$/, '\(最少 $1 敏捷\)'],
    [/^\(min ([\d\.,]+) Str\)$/, '\(最少 $1 力量\)'],
    [/^Lvl ([\d\.,]+)$/, '等级 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);