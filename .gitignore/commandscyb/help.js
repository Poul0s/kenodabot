const Discord = require('discord.js')
module.exports.run = async (bot, message, args, auth) => {
    let embedhelplog = new Discord.RichEmbed()
    .setTitle(`Commande help exécuté par ${auth}`)
    .setColor("00FF00")
    .addField("Salon", `${message.channel.name}`)
    let embedhelp = new Discord.RichEmbed()
    .setTitle("Liste des commande")
    .setDescription("Pour voir la description d'une commande, utilise la commande /aide <VotreCommande> exemple /help ban (soon)")
    .setColor("FE0000")
    .addField("Modération", "/ban \n/kick \n/mute \n/clear \n/modlogs", true)
    .addField("Utilitaire", "/help \n/report", true)
    .addField("fun", "rien ici pour l'instant", true)
    .addField("Musique", "!play \n!skip", true)
    .addField("Administration", "/stop", true)
    .setFooter("Une crocs")
    .setTimestamp()
  message.channel.send("crocs envoyé en privé");
  message.guild.channels.find("name", "crocs-logs").send(embedhelplog)
    auth.createDM().then(function (channelhelp) {
     return channelhelp.send(embedhelp);
    })
        return;
}
module.exports.help = {
    name: "help"
}