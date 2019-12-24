const Discord = require('discord.js')
module.exports.run = async (botcyb, message, args, auth) => {
    
    auth.createDM().then(function (soon) {
     return soon.send("la commande /aide est en cours de développement par le plus beau des rebeu THUNLOS");
    })   
     var argss = args
     var desc = ""
        var util = ""
        var exutil = ""
        var permission = "Tout le monde à accès à cette commande"
     switch (argss) {
            case '/ban' :
           var desc = "La commande /ban permet d'interdire l'accès au serveur à un certain utilisateur pour une infraction qu'il a commise."
            var util = "La commande s'utilise avec le tag du membre à bannir suivi du temp (optionnel) en seconde(sec)/minute(min)/heure(h)/jour(d)/mois(m) et de la raison pour finir." 
            var exutil = "/ban <@276060004262477825> 10min mentheur (Koya sera banni durant 10 minute car c'est un mentheur. PS: la raison mentheur n'est pas une raison suffisante pour bannir un membre.) "
            var permission = "Utilisation seulement autorisé aux membres du staff ayant le grade modérateur ou plus."
            embred(desc, util, exutil, permission)
            break;
            default: auth.createDM().then(function (soo) { return soo.send("Utilise la commande /help pour voir la liste des commande que tu peux utilisé avec la commande /aide. Si vous trouvez une erreur, merci de contactez <@519186194886688779>") })
        }
       function embred(desc, util, exutil, permission) {
     var embedaide = new Discord.RichEmbed()
        .setTitle(`Commande ${argss}`)
        .setDescription(`Voici l'utilisation de la commande ${argss}`)
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
