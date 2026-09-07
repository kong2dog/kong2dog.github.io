const e="chapter2",t="初遇炎龙",n={start:{text:"告别了村民，你怀揣着成为最强猎人的梦想，踏上了前往镇上猎人公会的旅程。",choices:[{text:"继续赶路",next:"bump_soldier"}]},bump_soldier:{text:`你低着头赶路，心里盘算着未来的计划，没注意看路，“砰”的一声撞到了一个人。
对方是一个满身铠甲的士兵，被你撞得踉跄了一下。`,choices:[{text:"抬头看去",next:"soldier_scold"}]},soldier_scold:{text:`士兵怒目圆睁，呵斥道：“走路不长眼睛吗！没看到我们在执行公务吗？滚开！”
你注意到周围还有好几个全副武装的士兵。`,choices:[{text:"道歉并离开",next:"curiosity"}]},curiosity:{text:"你虽然离开了，但心里很好奇这么多士兵在荒郊野外干什么。于是你悄悄跟在了他们后面。",choices:[{text:"偷听谈话",next:"eavesdrop"}]},eavesdrop:{text:`士兵们并没有发现你，你听到其中一人低声说：“听说这一带有人看到了炎龙，无论如何，我们一定要抓到它！”
接着他们朝着西边的森林搜寻过去。`,choices:[{text:"炎龙？！",next:"forest_noise"}]},forest_noise:{text:"就在这时，你注意到身后的密林深处传来了异样的声响。",choices:[{text:"躲进草丛查看",next:"witness_battle"}]},witness_battle:{text:`你偷偷躲在草丛后，眼前的景象让你震惊！
一个贵族打扮的年轻人正与一条巨大的红龙对峙！
那年轻人身边还跟着一只散发着电光的雷猫，正与炎龙打得有来有回。`,choices:[{text:"观察战斗",next:"battle_scene"}]},battle_scene:{text:`炎龙猛地喷出一股炽热的火焰，贵族年轻人举起盾牌死死抵挡。
雷猫趁机化作一道闪电，在龙鳞上留下一道焦痕。`,choices:[{text:"冲上去帮忙！",next:"combat_dragon"}]},combat_dragon:{text:`你看准时机，大吼一声冲了上去！
“我也来帮忙！”`,type:"combat",canFlee:!1,enemyIds:["dragon_fire_001:50"],next:"fainted",failureNext:"fainted"},fainted:{text:`你刚冲上去没几个回合，炎龙一记“神龙摆尾”重重地扫在你身上。
你只觉得眼前一黑，瞬间失去了知觉...`,choices:[{text:"......",next:"wake_up"}]},wake_up:{text:`不知过了多久，你缓缓醒来。
炎龙早已不见踪影，只有那个贵族男子满身是伤地坐在你身边。`,choices:[{text:"挣扎着坐起",next:"noble_scold"}]},noble_scold:{text:`贵族男子冷冷地看了你一眼：“我说你啊，凭你也敢对抗龙？你们之间的实力差距太大了。你只是自取灭亡。”
他站起身，拍了拍身上的尘土：“走吧，雷猫，龙朝着那个方向跑了。”`,choices:[{text:"我不甘心...",next:"not_reconciled"}]},not_reconciled:{text:"你看着他离去的背影，虚弱地喃喃自语：“我...我败了吗？”",choices:[{text:"就在这时...",next:"soldiers_arrive"}]},soldiers_arrive:{text:`之前的士兵们被战斗的动静吸引了过来，正好撞见了躺在地上的你。
“怎么又是你？你在这里干什么，还不快滚！”
说完，他们不分青红皂白地劈头盖脸围殴了你一顿。`,choices:[{text:"忍受痛苦",next:"soldiers_leave"}]},soldiers_leave:{text:`发泄完后，士兵们四处张望。
“龙肯定还在这附近，这里土地都被烧焦了！”
“往那边看看！”
士兵们朝着贵族男子离开的方向追去，只留下你一个人浑身是伤地躺在原地。`,choices:[{text:"进入下一章",nextChapter:"chapter3"}]}},s={id:e,title:t,nodes:n};export{s as default,e as id,n as nodes,t as title};
