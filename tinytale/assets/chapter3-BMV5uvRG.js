const e="chapter3",t="猎人公会",c={start:{text:`你一瘸一拐地走着，终于在天黑前赶到了镇上的猎人公会。
推开厚重的大门，一股热浪夹杂着酒气扑面而来。`,choices:[{text:"走进公会",next:"guild_scene"}]},guild_scene:{text:`公会里热闹非凡，精灵在优雅地擦拭弓箭，矮人举着比头还大的酒杯痛饮，兽人们正在掰手腕。
这时，原本喧闹的大厅因为你的出现安静了一瞬，所有人的目光都集中在你这个浑身是伤的新人身上。`,choices:[{text:"环顾四周",next:"mockery"}]},mockery:{text:`“还不快滚！”不知是谁喊了一句。
“这里可不是你这种弱鸡该来的地方！”嘲笑声此起彼伏。`,choices:[{text:"大声反驳",next:"shout"}]},shout:{text:`你深吸一口气，鼓起最后的勇气大喊：
“我是来成为猎人的！”
声音在空旷的大厅里回荡。`,choices:[{text:"......",next:"orc_challenge"}]},orc_challenge:{text:`这时，一个满身肌肉的蛮横兽人推开人群站了出来，居高临下地看着你：
“凭你也配！”
说完，他挥舞着拳头冲了过来！`,choices:[{text:"迎战！",next:"combat_orc"}]},combat_orc:{text:"你强忍着伤痛，站立不倒。",type:"combat",canFlee:!1,enemyIds:["orc_001:5"],next:"victory_orc"},victory_orc:{text:`经过一番苦战，你终于抓住了兽人的破绽，将他击倒在地。
你大口喘着粗气，周围一片死寂。`,choices:[{text:"擦去嘴角的血迹",next:"master_appear"}]},master_appear:{text:`“够了！”
一个苍老却威严的声音响起。猎人公会的会长——一个精神矍铄的老头走了出来，叫停了这场打斗。
他上下打量了你一番，眼中闪过一丝赞赏。`,choices:[{text:"看着会长",next:"ask_name"}]},ask_name:{text:"会长走到你面前，问道：“小子，身手不错。你叫什么名字？”",type:"input",inputType:"text",placeholder:"输入你的名字",next:"declare_dream"},declare_dream:{text:`会长点了点头。你看着他的眼睛，坚定地说道：
“我要成为世界第一的怪物猎人！”`,choices:[{text:"......",next:"master_gift"}]},master_gift:{text:`会长听后哈哈大笑：“小子，你很有趣，我记住你了。”
他从怀里掏出一本厚重的书和几个球体递给你。
“这是魔法图鉴，有了这个你就可以学习魔法，这也是你级别的凭证。还有这五个捕兽笼，可以驯服魔物。”`,choices:[{text:"接过物品",next:"master_encouragement"}]},master_encouragement:{text:`你双手接过了会长递来的沉甸甸的装备。
会长看着你，眼神中带着期许：“你现在是一名猎人了，希望你不要让我失望。”`,choices:[{text:"郑重点头",next:"oath",effects:{addItem:[{id:"magic_guide",count:1},{id:"monster_ball",count:5}],learnClassSkills:!0}}]},oath:{text:`你郑重地接下魔法图鉴与捕兽笼，心里暗自发誓：“一定要成为最厉害的怪物猎人。”
【获得物品：魔法图鉴】
【获得物品：捕兽笼 x5】`,choices:[{text:"聆听教诲",next:"master_mission"}]},master_mission:{text:`会长接着说：“作为新手猎人，是要去挑战世界各地的强大猎人并得到他们的认可，这样你就有资格参加最后的猎人大赛。”
他拍了拍你的肩膀：“去吧，去证明你有成为真正怪物猎人的实力。”`,choices:[{text:"出发！",next:"chapter_end"}]},chapter_end:{text:`带着会长的期望和新的装备，你迈出了公会大门。真正的冒险，现在才刚刚开始。

-- 第三章 完 --`,choices:[{text:"进入下一章",nextChapter:"chapter4"}]}},n={id:e,title:t,nodes:c};export{n as default,e as id,c as nodes,t as title};
