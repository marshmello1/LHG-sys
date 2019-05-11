
1.const Discord = require('discord.js');


2.const client = new Discord.Client();


3.var prefix = "L"


4.var adminprefix = '&'


5.const developers = ["449889801106096129"]


6. 


7.client.on('message', message => {


8.    var p = message.mentions.members.first();


9.    var reason = message.content.split(" ").slice(2).join(' ');


10.    var log = message.guild.channels.find('name', 'warns-log');


11.    if(message.content.startsWith(`${prefix}warn`)){


12.        if(!p) return message.reply(`**منشن الشخص اول**`);


13.        if(!reason) return message.reply(`**حط سبب**`);


14.        if(!p.bannable) return message.reply(`**مقدر اعطي وورن لشخص من الادارة**`);


15.        reason = reason.replace('1', "**كتابة الاوامر بالشات العام**");


16.        reason = reason.replace('2', "**بيع اشياء**");


17.        reason = reason.replace('3', "**التحذث عن السياسة**");


18.        reason = reason.replace('4', "**التحذث عن الدين **");


19.        reason = reason.replace('5', "**التحدث عن الطائفية**");


20.        reason = reason.replace('6', "**السبام**");


21.        reason = reason.replace('7', "**فتح تذكرة من دون سبب**");


22.        reason = reason.replace('8', "**العنصرية**");


23.        reason = reason.replace('9', "**عدم الاحترام**");


24.        reason = reason.replace('10', "**نشر بالعام**");


25.        var embed = new Discord.RichEmbed()


26.        .setAuthor(`تم التحذير`)


27.        .addField(`Name ♣`, `<@${p.id}>`)


28.        .addField(`By ♣`, `<@${message.author.id}>`)


29.        .addField(`Reason ♣`, reason)


30.        .setTimestamp()


31.        .setColor("WHITE")


32.        .setFooter(` `)


33.        message.channel.send(`${p} ${reason}`)


34.            message.delete();


35.        log.send({embed});


36.        warnRoles = ['Only Me']


37.    }


38.});


39.///////////


40.client.on('message', message => {


41.    var p = message.mentions.members.first();


42.    var reason = message.content.split(" ").slice(2).join(' ');


43.    var log = message.guild.channels.find('name', 'ban-log');


44.    if(message.content.startsWith(`${prefix}ban`)){


45.        if(!p) return message.reply(`**منشن الشخص**`);


46.        if(!reason) return message.reply(`**حط سبب**`);


47.        if(!p.bannable) return message.reply(`**م اقدر ابتد شخص من الستاف**`);


48.        reason = reason.replace('1', "**نشر في الخاص**");


49.        reason = reason.replace('2', "**اسم غير لائق**");


50.        reason = reason.replace('3', "**صوره غير لائقه**");


51.        reason = reason.replace('4', "**اسم غير لآئق**");


52.        reason = reason.replace('5', "**سب الاهل**");


53.        var embed = new Discord.RichEmbed()


54.        .setAuthor(`User Banned!`)


55.        .addField(`Name ♣`, `<@${p.id}>`)


56.        .addField(`By ♣`, `<@${message.author.id}>`)


57.        .addField(`Reason ♣`, reason)


58.        .setTimestamp()


59.        .setColor("BLACK")


60.        .setFooter(` `)


61.        p.ban();


62.            message.delete();


63.        log.send({embed});


64.        banRoles = ['Only Me']


65.    }


66.});


67.///////////////////////////


68.client.on('message', message => {


69.    var argresult = message.content.split(` `).slice(1).join(' ');


70.      if (!developers.includes(message.author.id)) return;


71.      


72.  if (message.content.startsWith(adminprefix + 'pl')) {


73.    client.user.setGame(argresult);


74.      message.channel.send(`**✅   ${argresult}**`)


75.  } else 


76.     if (message.content === (adminprefix + "leave")) {


77.    message.guild.leave();        


78.  } else  


79.  if (message.content.startsWith(adminprefix + 'wt')) {


80.  client.user.setActivity(argresult, {type:'WATCHING'});


81.      message.channel.send(`**✅   ${argresult}**`)


82.  } else 


83.  if (message.content.startsWith(adminprefix + 'ls')) {


84.  client.user.setActivity(argresult , {type:'LISTENING'});


85.      message.channel.send(`**✅   ${argresult}**`)


86.  } else 


87.  if (message.content.startsWith(adminprefix + 'st')) {


88.    client.user.setGame(argresult, "https://www.twitch.tv/ii7m0dy");


89.      message.channel.send(`**✅**`)


90.  }


91.  if (message.content.startsWith(adminprefix + 'nam')) {


92.  client.user.setUsername(argresult).then


93.      message.channel.send(`Changing The Name To ..**${argresult}** `)


94.} else


95.if (message.content.startsWith(adminprefix + 'ava')) {


96.  client.user.setAvatar(argresult);


97.    message.channel.send(`Changing The Avatar To :**${argresult}** `);


98.}


99.});


100.///////////


101.client.on('message',async message => {


102.  var room;


103.  var title;


104.  var duration;


105.  var gMembers;


106.  var filter = m => m.author.id === message.author.id;


107.  if(message.content.startsWith(prefix + "giveaway")) {


108.     //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');


109.    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');


110.    message.channel.send(`:eight_pointed_black_star:| **من فضلك اكتب اسم الروم**`).then(msgg => {


111.      message.channel.awaitMessages(filter, {


112.        max: 1,


113.        time: 20000,


114.        errors: ['time']


115.      }).then(collected => {


116.        let room = message.guild.channels.find('name', collected.first().content);


117.        if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');


118.        room = collected.first().content;


119.        collected.first().delete();


120.        msgg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي بالدقائق , مثال : 60**').then(msg => {


121.          message.channel.awaitMessages(filter, {


122.            max: 1,


123.            time: 20000,


124.            errors: ['time']


125.          }).then(collected => {


126.            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');


127.            duration = collected.first().content * 60000;


128.            collected.first().delete();


129.            msgg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {


130.              message.channel.awaitMessages(filter, {


131.                max: 1,


132.                time: 20000,


133.                errors: ['time']


134.              }).then(collected => {


135.                title = collected.first().content;


136.                collected.first().delete();


137.                try {


138.                  let giveEmbed = new Discord.RichEmbed()


139.                  .setAuthor(message.guild.name, message.guild.iconURL)


140.                  .setTitle(title)


141.                  .setDescription(`المدة : ${duration / 60000} دقائق`)


142.                  .setFooter(message.author.username, message.author.avatarURL);


143.                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {


144.                     let re = m.react('💖');


145.                     setTimeout(() => {


146.                       let users = m.reactions.get("💖").users;


147.                       let list = users.array().filter(u => u.id !== m.author.id);


148.                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];


149.                         if(users.size === 1) gFilter = '**لم يتم التحديد**';


150.                       let endEmbed = new Discord.RichEmbed()


151.                       .setAuthor(message.author.username, message.author.avatarURL)


152.                       .setTitle(title)


153.                       .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)


154.                       .setFooter(message.guild.name, message.guild.iconURL);


155.                       m.edit(endEmbed);


156.                     },duration);


157.                   });


158.                  msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);


159.                } catch(e) {


160.                  msgg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);


161.                  console.log(e);


162.                }


163.              });


164.            });


165.          });


166.        });


167.      });


168.    });


169.  }


170.});


171.////////


172.client.on('message', async message => {


173. 


174.if(message.content.startsWith( prefix + 'invite')) {


175.        let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id;


176.        let Tag = message.mentions.users.first() ? message.mentions.users.first().tag : message.author.tag;


177.        let Username = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;


178.        let Avatar = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL;


179.       


180.        message.guild.fetchInvites().then(invs => {


181.            let member = client.guilds.get(message.guild.id).members.get(oi);


182.            let personalInvites = invs.filter(i => i.inviter.id === oi);


183.            let urll = invs.filter(i => i.inviter.id === oi);


184.            let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);


185.            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);


186.            let inviteCode = personalInvites.reduce((p, v) => v.code);


187.            let possibleInvites = [['Total de membros recrutados:']];


188.            possibleInvites.push([inviteCount, inviteCode]);


189.            let user = message.mentions.users.first() || message.author;


190.            let mem = message.guild.member(user);


191.            let millisJoined = new Date().getTime() - mem.joinedAt.getTime();


192.            let daysJoined = millisJoined / 1000 / 60 / 60 / 24;


193.           


194.            var inviteInfo = new Discord.RichEmbed()


195.            .setTitle(`:incoming_envelope: **[INVITE INFO]** ${Username}`)


196.            .setThumbnail(client.user.avatarURL)


197.            .addField('**الدعوات**', `**➥** [ شخص **${Number(inviteCount)}** ]`)


198.            .addField('**تم الانضمام للسيرفر من**', `**➥** [ يوم **${daysJoined.toFixed(0)}** ]`)


199.            .addField('**رابط دعوة الانضمام**', `**➥** [ **https://discord.gg/${inviteCode || 'Zm2U6we'}** ]`)


200.            .setColor('ORANGE')


201.            .setTimestamp()


202.            .setFooter(Tag, Avatar)


203.           


204.            message.channel.send(inviteInfo);


205.            });


206.    };


207.});


208.//////////////////////////////////


209.var config = {


210.  events: [


211.    {type: "CHANNEL_CREATE", logType: "CHANNEL_CREATE", limit: 4 , delay: 5000},


212.    {type: "CHANNEL_DELETE", logType: "CHANNEL_DELETE", limit: 4, delay: 5000},


213.    {type: "GUILD_MEMBER_REMOVE", logType: "MEMBER_KICK", limit: 4, delay: 5000},


214.    {type: "GUILD_BAN_ADD", logType: "MEMBER_BAN_ADD", limit: 4, delay: 5000},


215.    {type: "GUILD_ROLE_CREATE", logType: "ROLE_CREATE", limit: 5, delay: 5000},


216.    {type: "GUILD_ROLE_DELETE", logType: "ROLE_DELETE", limit: 4, delay: 5000},


217.  ]


218.}


219.client.on("error", (e) => console.error(e));


220.client.on("raw", (packet)=> {


221.  let {t, d} = packet, type = t, {guild_id} = data = d || {};


222.  if (type === "READY") {


223.    client.startedTimestamp = new Date().getTime();


224.    client.captures = [];


225.  }


226.  let event = config.events.find(anEvent => anEvent.type === type);


227.  if (!event) return;


228.  let guild = client.guilds.get(guild_id);


229.  if (!guild) return;


230.  guild.fetchAuditLogs({limit : 1, type: event.logType})


231.    .then(eventAudit => {


232.      let eventLog = eventAudit.entries.first();


233.      if (!eventLog) return;


234.      let executor = eventLog.executor;


235.      guild.fetchAuditLogs({type: event.logType, user: executor})


236.        .then((userAudit, index) => {


237.          let uses = 0;


238.          userAudit.entries.map(entry => {


239.            if (entry.createdTimestamp > client.startedTimestamp && !client.captures.includes(index)) uses += 1;


240.          });


241.          setTimeout(() => {


242.            client.captures[index] = index


243.          }, event.delay || 2000)


244.          if (uses >= event.limit) {


245.            client.emit("reachLimit", {


246.              user: userAudit.entries.first().executor,


247.              member: guild.members.get(executor.id),


248.              guild: guild,


249.              type: event.type,


250.            })


251.          }


252.        }).catch(console.error)


253.    }).catch(console.error)


254.});


255.client.on("reachLimit", (limit)=> {


256.  let log = limit.guild.channels.find( channel => channel.name === "security-log");


257.  log.send(limit.user.username+"\** سيرفر بيتهكر ! ** ");


258.  limit.guild.owner.send(limit.user.username+"\** سيرفرك بيتهكر ! ** ")


259.  limit.member.roles.map(role => {


260.    limit.member.removeRole(role.id)


261.    .catch(log.send)


262.  });


263.});


264.///////


265.client.on('message', message => {


266.    if(message.content.startsWith(prefix + 'new')) {


267.        let args = message.content.split(' ').slice(1).join(' ');


268.        let support = message.guild.roles.find("name","Support Team");


269.        let ticketsStation = message.guild.channels.find("name", "TICKETS.");


270.        if(!args) {


271.            return message.channel.send('**المرجو كتآبة موضوع للتذكرة**');


272.        };


273.                if(!support) {


274.                    return message.channel.send('** من فضلك قم بإنشاء رتبة اسمها `Support Team` **');


275.                };


276.            if(!ticketsStation) {


277.                message.guild.createChannel("TICKETS.", "category");


278.            };


279.                message.guild.createChannel(`ticket-${message.author.username}`, "text").then(ticket => {


280.                    message.delete()


281.                        message.channel.send(`Your ticket has been created. [ ${ticket} ]`);


282.                    ticket.setParent(ticketsStation);


283.                    ticketsStation.setPosition(1);


284.                        ticket.overwritePermissions(message.guild.id, {


285.                            SEND_MESSAGES: false,


286.                            READ_MESSAGES: false


287.                        });


288.                            ticket.overwritePermissions(support.id, {


289.                                SEND_MESSAGES: true,


290.                                READ_MESSAGES: true


291.                            });


292.                                ticket.overwritePermissions(message.author.id, {


293.                                    SEND_MESSAGES: true,


294.                                    READ_MESSAGES: true


295.                                });


296.                    let embed = new Discord.RichEmbed()


297.                                .setTitle('**New Ticket.**')


298.                                .setColor("RANDOM")


299.                                .setThumbnail(`${message.author.avatarURL}`)


300.                                .addField('Subject', args)


301.                                .addField('Author', message.author)


302.                                .addField('Channel', `<#${message.channel.id}>`);


303. 


304.                                ticket.sendEmbed(embed);


305.                }) .catch();


306.    }


307.    if(message.content.startsWith(prefix + 'close')) {


308.            if(!message.member.hasPermission("ADMINISTRATOR")) return;


309.        if(!message.channel.name.startsWith("ticket")) {


310.            return;


311.        };  


312.                let embed = new Discord.RichEmbed()


313.                    .setAuthor("أعد الامر ، لديك 20 ثآنية")


314.                    .setColor("RANDOM");


315.                    message.channel.sendEmbed(embed) .then(codes => {


316. 


317.                   


318.                        const filter = msg => msg.content.startsWith(prefix + 'close');


319.                        message.channel.awaitMessages(response => response.content === prefix + 'close', {


320.                            max: 1,


321.                            time: 20000,


322.                            errors: ['time']


323.                        })


324.                        .then((collect) => {


325.                            message.channel.delete();


326.                        }) .catch(() => {


327.                            codes.delete()


328.                                .then(message.channel.send('**تم إلغاء العملية**')) .then((c) => {


329.                                    c.delete(4000);


330.                                })


331.                                   


332.                           


333.                        })


334. 


335. 


336.                    })


337. 


338. 


339.           


340.    }


341.});


342.//////


343.client.on("guildMemberAdd", member => {


344.  client.channels.find('id', '563863609441124363').send(` **Welcome To __Te__st Server**  `)


345.}); 


346./////////


347.client.login('NTc2NjgzMDAyODkzOTU5MTY5.XNaEGw.-qFZIC6_TCKNJETX-aa91v2GCWA');