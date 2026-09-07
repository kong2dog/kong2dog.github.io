const e="chapter16",t="最终试炼：恶魔城",c={start:{text:`你集齐了七枚徽章：勇气、自由、智慧、力量、灵魂、生命、坚毅。
现在的你，终于有资格前往传说中的恶魔城。
恶魔城悬浮于高空，凭借强大的魔力永不坠落。`,choices:[{text:"前往恶魔城",nextId:"castle_entrance"}]},castle_entrance:{text:`你站在恶魔城的宏伟黑铁大门前。空气中弥漫着硫磺的味道。
一群小恶魔在城墙上盘旋，而在大门正中，一位全身漆黑的骑士拦住了去路。`,choices:[{text:"战斗！",nextId:"combat_entrance"}]},combat_entrance:{text:"黑骑士举起巨剑，小恶魔们也蜂拥而至。",type:"combat",enemyIds:["black_knight_001:25","imp_001:20","imp_001:20"],choices:[{text:"胜利",nextId:"hallway"},{text:"逃跑",nextId:"start"}]},hallway:{text:`击败了守门人，你进入了城堡大厅。大厅显得空旷而诡异。
角落里放着几个装饰华丽的宝箱，远处传来诡异的笑声。`,choices:[{text:"检查宝箱",nextId:"mimic_encounter"},{text:"无视宝箱，继续前进",nextId:"joker_encounter"}]},mimic_encounter:{text:"你刚触碰到宝箱，它突然长出了利齿！是宝箱怪！",type:"combat",enemyIds:["mimic_001:25","mimic_001:25"],choices:[{text:"胜利",nextId:"joker_encounter"}]},joker_encounter:{text:`一个穿着滑稽的小丑突然出现在你面前，手里把玩着几把飞刀。
“欢迎来到恶魔城！想要过去，得先陪我玩玩！”`,type:"combat",enemyIds:["joker_001:26"],choices:[{text:"胜利",nextId:"elemental_chamber"}]},elemental_chamber:{text:`你来到了元素回廊。这里充斥着狂暴的魔法能量。
雷、火、冰三位元素法师挡在了通往上层的阶梯前。`,choices:[{text:"准备迎战",nextId:"combat_mages"}]},combat_mages:{text:"三位法师同时开始吟唱咒语。",type:"combat",enemyIds:["fire_mage_001:28","ice_mage_001:28","thunder_mage_001:28"],choices:[{text:"胜利",nextId:"upper_chamber"}]},upper_chamber:{text:`通过了元素回廊，你来到了上层区域。这里的空气变得粉红而暧昧。
一位美丽的魅魔正坐在窗边，微笑着看着你。`,choices:[{text:"小心应对",nextId:"combat_succubus"}]},combat_succubus:{text:"“留下来陪我吧……”魅魔的声音充满了诱惑。",type:"combat",enemyIds:["succubus_001:29"],choices:[{text:"胜利",nextId:"throne_room_door"}]},throne_room_door:{text:`你终于来到了恶魔城的最顶端。巨大的王座大门就在眼前。
推开这扇门，就是最后的试炼了。`,choices:[{text:"推开大门",nextId:"boss_intro"}]},boss_intro:{text:`大门缓缓打开。王座之上，大恶魔正冷冷地注视着你。
“凡人，你能走到这里，确实出乎我的意料。但你的旅程到此为止了。”`,choices:[{text:"决一死战",nextId:"combat_boss"}]},combat_boss:{text:"大恶魔展开了巨大的双翼，混沌的能量在它手中聚集。",type:"combat",enemyIds:["great_demon_boss:30"],choices:[{text:"胜利",nextId:"ending"}]},ending:{text:`随着大恶魔的倒下，恶魔城开始剧烈震动。
你成功通过了最后的试炼，成为了真正的传说。

全部剧情结束。`,choices:[{text:"回顾旅程",nextId:"credits"}]},credits:{text:`感谢游玩！

Design & Dev: H5 Adventure Team`,choices:[{text:"回到首页",nextChapter:"chapter1",nextId:"start"}]}},n={id:e,title:t,nodes:c};export{n as default,e as id,c as nodes,t as title};
