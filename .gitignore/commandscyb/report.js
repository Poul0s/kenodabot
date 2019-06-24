const Discord = require('discord.js')
module.exports.run = async (botcyb, message, args, auth) => {

    const reportmember = message.mentions.members.first();
    if (!reportmember) return message.reply("Tu n'as pas mentionner d'utilisateur.");
    let args1 = message.content.split(" " + reportmember + " ").slice(1);
    let args2 = args1
    if(!args2) return message.reply("tu n'as pas mis de raison pour ton avertissement");
    var auth = message.author
    let reportembed = new Discord.RichEmbed()
    .setTitle(`Report de <@${auth.id}>`)
    .setColor("FFFF00")
    .addField("Salon", `${message.channel.name}`, true)
    .addField("Utilisateur", `${reportmember}`, true)
    .addField("Raison", `͔${args2}`, true)
    message.guild.channels.find("name", "crocs-logs").send("<@&517053064792899584>")
    message.guild.channels.find("name", "crocs-logs").send(reportembed)
//      message.guild.channels.find("name", "crocs-logs").send(`${auth} a report ${reportmember} dans le channel ${message.channel.name}pour: ${args2} \n[mention: <@519186194886688779>]`)
    message.channel.send("Votre report a été signalé à l'équipe de modération, n'oublie pas de screen si jamais un modérateur te le demande \nTout abus de report est sanctionnable")
    
    return;
}
module.exports.help = {
    name: "/report"
}

