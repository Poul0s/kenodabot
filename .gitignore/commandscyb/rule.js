const Discord = require('discord.js')
module.exports.run = async (botcyb, message, args, auth) => {


    
    let embedrule = new Discord.RichEmbed()
    .setTitle("Règlement")
    .setDescription("Sanctions:\n Première fois : Warn\n Deuxième fois : Mute\n Troisième fois : Ban\n Les sanctions sont appliquées de cette manière si aucune autre manière n'est indiquée sur la règle.")
    .addField("Article 1", "Toujours insulter le bot Mee6 quand il envoie un message de level (Règle non obligatoire, pas de grosses insultes, juste un 'tg' suffit).", true)
    .addField("Article 2", "Ne pas spam/flood le chat.", true)
    .addField("Article 3", "Toute image/gif/fichier audio sont à mettre dans #💾fichiers-audios-vidéos💾 , sauf les photos de vous qui vont dans #🤳trombinoscope🤳 .", true)
    .addField("Article 4", "Ne pas insulter quiconque.", true)
    .addField("Article 5", "Ne pas essayer de ping everyone/here.", true)
    .addField("Article 6.0", "Ne pas ping Cyber et PokeDraco pour des choses inutiles.", true)
    .addField("Article 6.1", "Si vous mentionnez Cyber ou PokeDraco pour rien, ne supprimez pas le message sous peine de mute, et ban si répétitif.", true)
    .addField("Article 7", "Le débat 'Pain au chocolat/Chocolatine' est interdit.", true)
    .addField("Article 8", "Les demandes de dont sont interdites (IG ou IRL) sous peine d'un mute, et ban si répétitif.", true)
    .addField("Article 9.0", "Toute menace de Hack est sévèrement sanctionnée par un ban.", true)
    .addField("Article 9.1", "Toute tentative de raid le serveur est strictement interdite et est sévèrement sanctionnée par un ban.", true)
    .addField("Article 10", "Toute publicité pour des serveurs reward est interdite", true)
    .setColor("#2BB257")
    .setFooter(`Cordialement. \nLe staff de la CrocsArmy. \nModifié le 10/08/2019 à 21h30`)

    if(auth.id === "519186194886688779") {
    message.channel.send(embedrule)
    }

}
module.exports.help = {
    name: "/editrules"
}
