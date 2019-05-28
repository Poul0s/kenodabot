const Discord = require('discord.js')
module.exports.run = async (botcyb, message, args, auth) => {
if(!message.member.hasPermissions("ADMINISTRATOR")) return message.reply("Désolé, tu n'a pas les permissions pour exécuté cette commande")
var user = message.content.mentions.first()
if(!user)return message.reply("Mauvaise utilisation, **/profile <@**(__id de la personne__)**>**")
var embed = new Discord.RichEmbed()
.setTitle(`Profile de ${user}`)
.addField("A rejoins le", `${user.JoinedAt}`, true)
.addField("En construction", "j'ai dit en construction !!!", true)
}
module.exports.help = {
    name: "/profle"
}