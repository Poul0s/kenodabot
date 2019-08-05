const Discord = require('discord.js')
const bot = new Discord.Client()
const ms = require ("ms");
const fs = require("fs")
var prefix = ("/")
bot.login(process.env.TOKEN)

bot.on("message", message => {
    if(message.channel.id === "548579157190115338") {
       if(message.content.startsWith("lu et approuvé")) {
           var role = message.guild.roles.find("name", "Membre")
           message.member.addRole(role)
           message.delete()
       }else message.delete()
    }else if(message.channel.id === "548883646426120192") {
        if(!message.author.id === "548865043572457481") {
            message.delete()
            console.log("test")
        }else return
    }else return;
})

bot.on("message", message => {
    if(message.guild.id === "600394400631095297") {
    if(message.author.id === "159985870458322944") {
    if(message.content.startsWith("GG")) {
        const member = message.mentions.members.first()
     let lvl_type1 = message.content.split(" " + member + ", you just advanced to level ").slice(1)
     let lvl = lvl_type1
     if(lvl === "5!") member.addRole(message.guild.roles.find("name", `astro débutant`))
     if(lvl === "10!") member.addRole(message.guild.roles.find("name", `astro confirmé`))
     if(lvl === "16!") member.addRole(message.guild.roles.find("name", `astro amateur`))
     if(lvl === "26!") member.addRole(message.guild.roles.find("name", `astro pro`))
    }
}}
})

bot.on("message", message => {
    if(message.content.startsWith(prefix + "warn")) {
        let warnRole = message.guild.roles.find("name", "PermWarn");
      if(message.member.roles.has(warnRole.id)) {
        const member = message.mentions.members.first();
        if (!member) return message.reply("Tu as oublié de mentionner une personne.");
        let params2 = message.content.split(" " + member + " ").slice(1);
        let raison = params2
        if(!raison) return message.reply("tu n'as pas mis de raison à ton warn");
        var auth = message.author
        var embedwarnPUBLIC = new Discord.RichEmbed()
    .setColor("RAMDOM")
    .setAuthor(auth.username, auth.displayAvatarURL)
    .setTitle("WARN")
    .addField(`${auth.username}(${auth.id}) warn ${member.user.username}(${member.id})`, `${raison}`)
    .setTimestamp()
    message.guild.channels.find(`name`, "kenodabot_logs").send(embedwarnPUBLIC);
    return;
      }else message.reply("tu n'as pas la permission pour warn.")
    }
})
bot.on("message", message => {
    if(message.content.startsWith(prefix + "mute")) {
    let muteRolee = message.guild.roles.find("name", "PermMute");
        if(!message.member.roles.has(muteRolee.id)) return message.reply("Tu n'as pas la permissions de mute.")
        let member = message.mentions.members.first();
        if(!member) return message.reply("tu n'as pas mentionné de personne valide");
        let muteRole = message.guild.roles.find("name", "Muted");
        let params = message.content.split(" ").slice(1);
        let time = params[1];
        if(!time) return message.reply("tu n'as pas spécifié de temps de mute.");
        let paramsm = message.content.split(" " + member + " " + time + " ").slice(1);
        let résonm = paramsm
        if(!résonm) return message.reply("tu n'as pas mis de réson à ton mute");
        member.addRole(muteRole.id);
        let authormute = message.author
        var embedmute = new Discord.RichEmbed()
        .setAuthor(authormute.username, authormute.displayAvatarURL)
        .setTitle("Mute")
        .addField(`${authormute.username}(${authormute.id}) mute ${member.user.username}(${member.id}) pendant ${ms(ms(time), {long: true})}`, résonm)
        .setTimestamp()
        message.guild.channels.find(`name`, "kenodabot_logs").send(embedmute);
        setTimeout(function() {
            member.removeRole(muteRole.id);
        }, ms(time));
    }
})
bot.on("message", message => {
    if(message.content.startsWith(prefix + "ban")){
        let banRole = message.guild.roles.find("name", "PermBan");
        if(!message.member.roles.has(banRole.id)) return message.reply("Tu n'as pas la permissions de ban.").catch(console.error);
        const banned = message.mentions.members.first();
        if (!banned) return message.reply("Tu as oublier de mentionner une personne.");
        let params2 = message.content.split(" " + banned + " ").slice(1);
        let réson = params2
        if(!réson) return message.reply("tu n'as pas mis de raison à ton ban");
        banned.ban().then(member => {
            let authorban = message.author
            var embedban = new Discord.RichEmbed()
            .setAuthor(authorban.username, authorban.displayAvatarURL)
            .setTitle("Ban")
            .addField(`${authorban.username}(${authorban.id}) ban ${banned.user.username}(${banned.id}) pendant permanent jusqu'à déban`, réson)
            .setTimestamp()
            message.guild.channels.find(`name`, "kenodabot_logs").send(embedban);
 
            member.createDM().then(function (channel2) {
                return channel2.send(`Tu as été bannis du serveur pour ${réson}`)
            });
        }).catch(console.error)
    }
})
/*bot.on("message", message => {
    if(message.content.startsWith(prefix + "tempban")) {
    let banRole = message.guild.roles.find("name", "PermBan");
        if(!message.member.roles.has(banRole.id)) return message.reply("Tu n'as pas la permissions de ban.")
        let member = message.mentions.members.first();
        if(!member) return message.reply("tu n'as pas mentionné de personne valide");
        let params = message.content.split(" ").slice(1);
        let time = params[1];
        if(!time) return message.reply("tu n'as pas spécifié de temps de ban.");
        let paramsm = message.content.split(" " + member + " " + time + " ").slice(1);
        let résonm = paramsm
        if(!résonm) return message.reply("tu n'as pas mis de réson à ton ban");
        member.ban().then(member => {
        let authorban = message.author
        var embedban = new Discord.RichEmbed()
        .setAuthor(authorban.username, authorban.displayAvatarURL)
        .setTitle("Ban")
        .addField(`${authorban.username}(${authorban.id}) ban ${member.user.username}(${member.id}) pendant ${ms(ms(time), {long: true})}`, résonm)
        .setTimestamp()
        message.guild.channels.find(`name`, "kenodabot_logs").send(embedban);
    })
        setTimeout(function() {
            member.unban().then(member => {
                var embedunban = new Discord.RichEmbed()
                .setTitle("unBan")
                .addField(`${member.user.username}(${member.id}) unban`, "temps de ban fini")
                .setTimestamp()
                message.guild.channels.find(`name`, "kenodabot_logs").send(embedunban);
            })
        }, ms(time));
    }
})*/

bot.on("message", async message => {
    if(message.content.startsWith(prefix + "giveaway")){
        var messageArray = message.content.split(" ");
    var time;
    var gagnant;
        gagnant = Number(messageArray[1]);      
        if(!gagnant) return message.reply("**ERREUR**\n__MAUVAIS USAGE!__\n**Combien y aura-t-il de gagnants? **\n\nExemple d'utilisation:\n`r!giveaway 1 120 un superbe t-shirt!`");  // verification pour les gagnants
     if(isNaN(gagnant)) return message.reply("**ERREUR**\n__MAUVAIS USAGE!__\n**Combien y aura-t-il de gagnants? **\n\nExemple d'utilisation:\n`r!giveaway 1 120 un superbe t-shirt!`");
    
        time = Number(messageArray[2]);
        if(!time) return message.reply("**ERREUR**\n__MAUVAIS USAGE!__\nQuel est la durée de votre giveaway en seconde?\n\nExemple d'utilisation:\n`r!giveaway 1 120 un superbe t-shirt!`")
        if(isNaN(time)) return message.reply("**ERREUR**\n__MAUVAIS USAGE!__\nQuel est la durée de votre giveaway en seconde?\n\nExemple d'utilisation:\n`r!giveaway 1 120 un superbe t-shirt!`")  // verification pour le timer en seconde

    let pari = message.content.split(" " + gagnant + " " + time + " ").slice(1);
            var item = pari
            if(!item) return message.reply("**ERREUR**\n__MAUVAIS USAGE!__\n**Que voulez-vous faire gagner?**\n\nExemple d'utilisation:\n`r!giveaway 60 1 un superbe t-shirt!`");  // verification pour le prix (si rien ne se passe il va rien afficher)

          
            let member = message.author
            var embedgiveaway = new Discord.RichEmbed() //création de l'embed d'annonce du giveaway
            .setAuthor(member.username, member.displayAvatarURL)
            .setTitle(":tada: GIVEAWAY ! :tada:") 
            .addField("Prix:", `** ${item} **`)
            .addField("Nombre de gagnants :", `** ${gagnant} ** gagnant(s)`)
            .addField("Fin du Giveaway dans:", `**${time}** secondes`)
            .addField("Pour participer, réagissez avec :tada: !!", "** **")
            .setTimestamp()
            var embedgiveawaySent = await message.channel.send(embedgiveaway);
embedgiveawaySent.react("\uD83C\uDF89"); // un emoji :tada: en unicode

            setTimeout(function() {
              embedgiveawaySent.reactions.forEach(r=>r.remove(bot.user));
             var peopleReacted = embedgiveawaySent.reactions.get("\uD83C\uDF89").users.array(); // vérification des users dans la liste des réacts
              var winners = embedgiveawaySent.reactions.get("\uD83C\uDF89").count
             var inodex = Math.floor(Math.random() * peopleReacted.length); // tirage au sort
              
             var ggg = [];
             var gggmessage = "";  
             for (var i = 0; i < gagnant; i++){
            ggg.push(peopleReacted[inodex]);
            inodex = Math.floor(Math.random() * peopleReacted.length);
             }
             for (var i = 0; i < ggg.length; i++){
                 if (ggg[i].id === bot.user.id){
                 ggg.slice(i, 1);
                     continue;
                 }
               gggmessage += (ggg[i].toString() + " ");
             }
              
          
             var haveHas = "a";  // changement pour du pluriel si nécessaire
              var Win = "NOUVEAU GAGNANT"
             if (ggg.length == 1){
                 haveHas = " vient de gagner: ";
               var Win = "NOUVEAU GAGNANT";
             }else{
                 haveHas = " viennent de gagner: ";
              var Win = "NOUVEAUX GAGNANTS";
             }
             let gigg = ggg
             
             if(gagnant > winners) { // si il y a moins de participants que le nombre de winner
               message.channel.send("Malheureusement, pas assez de personne ont pu être sélectionné,\nVous avez demandé` " + gagnant + " `possibles gagnant(s) mais vous avez eu que `" + winners + "` participant(s)")
             return;
             }
             
             message.channel.send(":tada: " + Win + " ! :tada: \n\n" + gigg  + haveHas + " " + `${item}`); // anonce du gagnant
            }, time * 1000);
    
    
       setTimeout(function() { 
    embedgiveawaySent.reactions.forEach(r=>r.remove(bot.user));
    }, time * 950)
    }
})
/*bot.on("message", message => {
    if(message.content.startsWith(prefix + "stafflist")){
        let modtestrole = message.guild.roles.find("name", "Modo-Test");
        var modotest = message.guild.members.has(modtestrole.id)
        message.channel.send(modotest.map(e=>e.toString()).join(" "))
    }
})*/
bot.on("message", message => {
    if(message.content.startsWith(prefix + "help")){
        let userre = message.author
        let embed = new Discord.RichEmbed()
        .setTitle("Liste des commande")
        .setDescription("Pour voir la description d'une commande, utilise la commande /aide <VotreCommande> (soon)")
        .setColor("FE0000")
        .addField("Modération", "/ban \n/warn \n/mute", true)
        .addField("Utilitaire", "/giveaway", true)
        .addField("fun", "soon", true)
        .setTimestamp()
    message.channel.send("aide envoyé en privé");
        userre.createDM().then(function (channelhelp) {
         channelhelp.send(embed);
        })  
    }
})



//***************************************************************************************************************************************************************************\\



const botcyb = new Discord.Client()
botcyb.login(process.env.TOKENCYB)
botcyb.commandscyb = new Discord.Collection();
var prefixcyb = ("/")
fs.readdir("./commandscyb/", (err, files) => {
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Je ne trouve pas les commandes");
      return;
    }
    jsfile.forEach((f, i) =>{
      let props = require(`./commandscyb/${f}`);
      console.log(`${f} à bien été chargé`);
      botcyb.commandscyb.set(props.help.name, props);
    });
  });
  botcyb.on("message", async message => {
    let auth = message.author
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = message.content.split(" ").slice(1);
    let commandfile = botcyb.commandscyb.get(cmd/*.slice(prefixcyb.length)*/);
    if(commandfile) commandfile.run(botcyb,message,args,auth);
});


botcyb.on("message", message => {
    var blackembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("commande impossible à effectuer!")
  .addField("vous ne pouvez pas exécuté de message ici car vous n'êtes pas autorisé à utilisé le bot dans ce serveur là, pour plsu d'information, veuillez contacté thunlos", "****", true)
  .setImage("http://www.parisenligne.com/wp-content/imgs/image-liste-noire-70.jpg")
   if(message.content.startsWith(prefixcyb)) {
    if(message.guild.id === "517032764571385857") {
    }else if(message.guild.id === "540175708840787997"){
    }else{
        message.delete()
        return message.channel.send(blackembed)
    }}})

botcyb.on("message", message => {
var auth = message.author

   /* if(message.content.startsWith(prefixcyb + "help")){
        let args1 = message.contentslice(1);
        if(!args1) {
        var auth = message.author
        let embedhelp = new Discord.RichEmbed()
        .setTitle("Liste des commande")
        .setDescription("Pour voir la description d'une commande, utilise la commande /help <VotreCommande> exemple /help ban")
        .setColor("FE0000")
        .addField("Modération", "/ban \n/kick \n/mute \n/report \n/modlogs", true)
        .addField("Utilitaire", "/help", true)
        .addField("fun", "", true)
        .addField("Musique", "!play \n!skip", true)
        .setFooter("Une crocs")
        .setTimestamp()
    message.channel.send("crocs envoyé en privé");
        auth.createDM().then(function (channelhelp) {
         return channelhelp.send(embedhelp);
        })
            return;
        }else{
            if(args1 === " /help") message.reply("Permet de voir la liste des commandes ou de voir leur descriptions en remplacent le deuxième /help que ta mit :wink:.")
            if(args1 === " /ban") message.reply("Permet de bannir un membre temporairement ou définitivement, commande de dynobot.")
            if(args1 === " /kick") message.reply("Permet d'expulsé un membre du serveur, commande par dynobot.")
            if(args1 === " /mute") message.reply("Permet de rendre un membre muet temporaire ment ou définitivement, commande de dynobot.")
            if(args1 === " /report") message.reply("Permet de report un utilisateur a l'équipe de modération en cas d'infractions au règlement, n'oubliez pas le screen.")
            if(args1 === " /") message.reply("le préfix")
            if(args1 === " /modlogs") message.reply("Permet de voir toute les sanctions d'un joueur, commande de dynobot")
            if(args1 === " !play") message.reply("Permet de faire joué une musique ou une video dans un salon vocal, commande de rythm")
            if(args1 === " !skip") message.reply("Permet de passé a la musique suivante dans la liste des musique, commande de rythm")
        }
    }
    */
    if(message.content.startsWith(prefixcyb + "stop")) {
 if(message.member.hasPermission("ADMINISTRATOR")) {
message.reply("D'accord je suis ne train de m'eteindre, n'oublie pas de me rallumer :'(")
botcyb.destroy()
process.exit(60000)
}else message.reply("désolé mais tu n'a pas le droit d'utilisé cette commande") 
}
       
})

botcyb.on('message', async message =>  {
    var auth = message.author
    let blacklist2 = ['<@293857217365540895>'];

    let pingbl = false;
    for (var i in blacklist2) {
        if (message.content.toLowerCase().includes(blacklist2[i].toLowerCase())) pingbl = true;
    }
    if(pingbl) {
        let embedping = new Discord.RichEmbed()
        .setTitle("Ping cyber")
        .setColor("FE0000")
        .addField(`salon`, `${message.channel.name}`, true)
        .addField("Auteur", `${auth}`)
    message.guild.channels.find("name", "crocs-logs").send(embedping)
    message.guild.channels.find("name", "crocs-logs").send("<@&517053064792899584>")
    }
})

botcyb.on('message', async message =>  {
    if(message.channel.name === "🔵pub-discord🔵") {
    }else{
        if(message.member.hasPermission("ADMINISTRATOR")) {}else{

        
    var auth = message.author
    let blacklist2 = ['discord.gg/'];

    let pingbl = false;
    for (var i in blacklist2) {
        if (message.content.toLowerCase().includes(blacklist2[i].toLowerCase())) pingbl = true;
    }
    if(pingbl) {
    message.guild.channels.find("name", "crocs-logs").send(`${auth} a envoyé un lien discord dans ${message.channel.name} (<@&517053064792899584>))`)
    }
}
}
})

botcyb.on("ready", ready => {
   botcyb.guilds.find("id","540175708840787997").channels.find("id", "571996266104619008").send("Je viens de me relancé")
})
 botcyb.on("guildMemberRemove", member => {
    let list = botcyb.guilds.find("id","517032764571385857").memberCount
    console.log(list)
    let list2 = (`Utilisateur total: ${list}`)
    botcyb.guilds.find("id","517032764571385857").channels.find("id", "580093284211228681").edit({name: list2})
 })

 botcyb.on("guildMemberAdd", member => {
    let list = botcyb.guilds.find("id","517032764571385857").memberCount
    console.log(list)
    let list2 = (`Utilisateur total: ${list}`)
    botcyb.guilds.find("id","517032764571385857").channels.find("id", "580093284211228681").edit({name: list2})
})


 