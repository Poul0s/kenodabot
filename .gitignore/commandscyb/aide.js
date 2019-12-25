const Discord = require('discord.js')
module.exports.run = async (botcyb, message, args, auth) => {
     var desc = ""
        var util = ""
        var exutil = ""
        var permission = "Tout le monde à accès à cette commande"
        var argss = `${args}`


        message.channel.send("aide envoyé en privé")
        let embedhelplog = new Discord.RichEmbed()
    .setTitle(`Commande aide exécuté par ${auth.username} (${auth})`)
    .setColor("00FF00")
    .addField("Salon", `${message.channel.name}`)


    if(message.channel.id === "553345227684052992" || message.channel.id === "548181748572356628") {}else {
       var sen = await message.guild.channels.find("name", "crocs-logs").send(embedhelplog)
       sen.react("\u2705").catch(console.error())
       sen.react("\u274e").catch(console.error())
    }
     switch (argss) {
            case `/ban`:
            case `ban`:
           var desc = "La commande /ban permet d'interdire l'accès au serveur à un certain utilisateur pour une infraction qu'il a commise."
            var util = "La commande s'utilise avec le tag du membre à bannir suivi du temp (optionnel) en seconde(sec)/minute(min)/heure(h)/jour(d)/mois(m) et de la raison pour finir." 
            var exutil = "/ban <@276060004262477825> 10min mentheur (Koya sera banni durant 10 minute car c'est un mentheur. PS: la raison mentheur n'est pas une raison suffisante pour bannir un membre.) "
            var permission = "Utilisation seulement autorisé aux membres du staff ayant le grade modérateur ou plus."
            embred(desc, util, exutil, permission)
            break;


            case `/kick`:
            case `kick`:
                var desc = "La commande /kick permet d'expulsé un certain membre du serveur pour une infraction qu'il a commise."
                var util = "La commande s'utilise avec le tag du membre à expulsé suivi de la raison." 
                var exutil = "/kick <@330407299606904844> pseudo incorrect (Kit_de_tchoin sera expulsé avec la raison pseudo incorrect.)."
                var permission = "Utilisation seulement autorisé aux membres du staff ayant le grade modérateur-test ou plus."
                embred(desc, util, exutil, permission)
            break;


            case `/mute`:
            case `mute`:
           var desc = "La commande /mute permet d'interdire l'autorisation de parler à un certain membre du serveur pour une infraction qu'il a commise."
            var util = "La commande s'utilise avec le tag du membre à mute suivi du temp (optionnel) en seconde(sec)/minute(min)/heure(h)/jour(d)/mois(m) et de la raison pour finir." 
            var exutil = "/ban <@276060004262477825> 2h insultes à répétition (Koya sera mute durant 2 heure car il a insulter à répétition.) "
            var permission = "Utilisation seulement autorisé aux membres du staff ayant le grade modérateur ou plus."
            embred(desc, util, exutil, permission)
            break;

            case `/warn`:
            case `warn`:
                var desc = "La commande /warn permet de mettre un avertissement à un certain membre pour une infraction qu'il a commise."
                var util = "La commande s'utilise avec le tag du membre à avertir suivi de la raison." 
                var exutil = "/warn <@330407299606904844> pseudo incorrect (Kit_de_tchoin sera averti pour son pseudo  incorrect.)."
                var permission = "Utilisation seulement autorisé aux membres du staff ayant le grade modérateur-test ou plus."
                embred(desc, util, exutil, permission)
            break;

            
            case `/clear`:
            case `clear`:
            var desc = "La commande /clear permet d'effacer un certain nombre de message en une seul fois."
            var util = "La commande s'utilise avec le nombre de message à supprimé."
            var exutil = "/clear 56 (Le bot effacera 56 message dans le salon)."
            var permission = "Utilisation seulement autorisé aux membres du staff ayant le grade modo-test ou plus."
         embred(desc, util, exutil, permission)
         break;

            
         case `/modlogs`:
         case `modlogs`:
         var desc = "La commande /modlogs permet de voir les logs d'infraction d'un utilisateur."
         var util = "La commande s'utilise avec le tag du membre."
         var exutil = "/modlogs <@519186194886688779> (Le bot va vous montrer toute les infraction de thunlos"
         var permission = "Utilisation seulement autorisé aux membre du staff ayant le grade Modérateur ou plus."
      embred(desc, util, exutil, permission)
      break;


         case `/case`:
         case `case`:
         var desc = "La commande /case permet de voir la raison et les detail d'une infraction"
         var util = "La commande s'utilise avec l'id de l'infraction."
         var exutil = "/case 816 (Sur cette infraction nous pouvont voir un merveilleuse admin qui s'est trompé de salon et qui a décider de s'auto warn)."
         var permission = "Utilisation seulement autorisé aux membre du staff ayant le grade Modérateur ou plus."
   embred(desc, util, exutil, permission)
   break;


         case `/reason`:
         case `reason`:
         var desc = "La commande /reason permet de changer la raison d'une infraction"
         var util = "La commande s'utilise avec l'id de l'infraction suivi de la nouvelle raison à appliqué"
         var exutil = "/reason 816 mauvais admin (avec cette commande nous changeons la raison 'Mauvais salon' en 'mauvais admin')"
         var permission = "Utilisation seulement autorisé aux membre du staff ayant le grade Modérateur ou plus."
    embred(desc, util, exutil, permission)
    break;

    case `/report`:
            case `report`:
            var desc = "La commande /report permet d'avertir le staff d'un membre qui a commis une infraction."
            var util = "La commande s'utilise avec le tag du membre ayant commis l'infraction suivit de la raison."
            var exutil = "/report <@330407299606904844> son pseudo est incorrect (<@330407299606904844> va être report au staff pour son pseudo)"
         // var permission = ""
         embred(desc, util, exutil, permission)
         break;


         case `!play`:
            case `play`:
            var desc = "La commande !play permet de jouer une musique ou de l'ajouter dans la file d'attente si une musique est déjà en cours de lecture(La commande est a exécuter seulement si vous êtes dans le salon vocal musique."
            var util = "La commande s'utilise avec le nom de la musique ou le lien youtube."
            var exutil = "!p https://www.youtube.com/watch?v=H_rZMgS5nE4"
         // var permission = ""
         embred(desc, util, exutil, permission)
         break;

         case `!skip`:
            case `skip`:
            var desc = "La commande !skip permet de passer à la musique suivante qui est dans la file d'attente des musique"
            var util = "La commande s'utilise seulement avec !skip"
            var exutil = "!skip"
         // var permission = ""
         embred(desc, util, exutil, permission)
         break;

         case `/addrole`:
            case `addrole`:
            var desc = "La commande /addrole permet d'ajouter un role à un membre."
            var util = "La commande s'utilise avec le tag du membre suivi du nom du role."
            var exutil = "/addrole <@519186194886688779> [Bg] (Cela va ajouter le role BG à thunlos)"
            var permission = "L'utilisation de la commande require la permission MANAGE_ROLE."
         embred(desc, util, exutil, permission)
         break;


         case `/clearwarn`:
            case `clearwarn`:
            var desc = "La commande /clearwarn permet d'enlever tout les avertissement d'un membre du serveur."
            var util = "La commande s'utilise avec le tag du membre."
            var exutil = "/clearwarn <@519186194886688779>"
            var permission = "L'utilisation de cette commande require le grade Admibistrateur ou plus."
         embred(desc, util, exutil, permission)
         break;


       /*  t        case `/`:
            case ``:
            var desc = ""
            var util = ""
            var exutil = ""
         // var permission = ""
         embred(desc, util, exutil, permission)
         break; */


            default: auth.createDM().then(function (soo) { return soo.send("Mauvaise syntaxe. Utilise la commande /help pour voir la liste des commande que tu peux utilisé avec la commande /aide (Exemple /aide report). Si vous trouvez une erreur, merci de contactez <@519186194886688779>") })
        }
       function embred(desc, util, exutil, permission) {
     var embedaide = new Discord.RichEmbed()
        .setTitle(`Commande ${args}`)
        .setDescription(`Voici l'utilisation de la commande ${args}`)
        .setColor("FE0000")
        .addField("Description", desc, true)
        .addField("Utilisation", util, true)
        .addField("Exemple d'utilisation", exutil, true)
        .addField("Permission requise", permission, true)
        .setFooter("Une crocs")
        .setTimestamp()
        auth.createDM().then(function (msg) {
            return msg.send(embedaide)
        })
    }

        return;
}
module.exports.help = {
    name: "/aide"
}
