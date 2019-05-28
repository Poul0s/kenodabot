const Discord = require('discord.js')
module.exports.run = async (botcyb, message, args, auth) => {
    if(message.member.hasPermission("MANAGE_MESSAGES")){
        message.channel.fetchMessages()
            
            let list = message.content.split(" ").slice(1)
  if(list) {   message.channel.bulkDelete(list[0]).catch(console.error).then(message.guild.channels.find("name", "crocs-logs").send(`${auth.username} a supprimé ${list[0]} messages avec la commande /clear`))
      message.delete() }else message.reply("merci de bien vouloir indiqué le nombre de message a supprimé")
    }else message.reply("désolé mais tu n'a pas accès a cette commande")
}
module.exports.help = {
    name: "/clear"
}