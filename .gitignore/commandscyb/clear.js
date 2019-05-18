const Discord = require('discord.js')
module.exports.run = async (bot, message, args, auth) => {
    if(message.member.hasPermission("MANAGE_MESSAGES")){
        message.channel.fetchMessages()
            
            let list = message.content.split(" ").slice(1)
      message.channel.bulkDelete(list[0]).catch(console.error).then(message.guild.channels.find("name", "crocs-logs").send(`{auth.username} a supprimé ${list[0]} avec la commande /clear`))
      message.delete()
    }else message.reply("désolé mais tu n'a pas accès a cette commande")
}
module.exports.help = {
    name: "clear"
}
