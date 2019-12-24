const Discord = require('discord.js')
module.exports.run = async (botcyb, message, args, auth) => {
    let embedhelplog = new Discord.RichEmbed()
    .setTitle(`Commande help exécuté par ${auth.username} (${auth})`)
    .setColor("00FF00")
    .addField("Salon", `${message.channel.name}`)
    let embedhelp = new Discord.RichEmbed()
    .setTitle("Liste des commande")
    .setDescription("Pour voir la description d'une commande, utilise la commande /aide <VotreCommande> exemple /help ban (soon)")
    .setColor("FE0000")
    .addField("Modération", "/ban \n/kick \n/mute \n/warn \n/clear \n/modlogs \n/case \n/reason", true)
    .addField("Utilitaire", "/report", true)
    .addField("fun", "rien ici pour l'instant", true)
    .addField("Musique", "!play \n!skip", true)
    .addField("Administration", "/addrole \n/clearwarn", true)
    .setFooter("Une crocs")
    .setTimestamp()
  message.channel.send("crocs envoyé en privé");
  if(message.channel.id === "553345227684052992" || message.channel.id === "548181748572356628") {}else message.guild.channels.find("name", "crocs-logs").send(embedhelplog)
  
    auth.createDM().then(function (channelhelp) {
     return channelhelp.send(embedhelp);
    })
        return;
}
module.exports.help = {
    name: "/help"
}