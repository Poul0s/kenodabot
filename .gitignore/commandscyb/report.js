const Discord = require('discord.js')
module.exports.run = async (botcyb, message, args, auth) => {

    const reportmember = message.mentions.members.first();
    if (!reportmember) return message.reply("Tu n'as pas mentionner d'utilisateur.");
    let args10 = message.content.split(" " + reportmember + " ").slice(1);
    let args11 = args10
    if(!args11) return message.reply("tu n'as pas mis de raison pour ton avertissement");
    var auth = message.author
    let reportembed = new Discord.RichEmbed()
    .setTitle(`Report de ${auth.username} (${auth.id})`)
    .setColor("FFFF00")
    .addField("Salon", `${message.channel.name}`, true)
    .addField("Utilisateur", `${reportmember} (${reportmember})`, true)
    .addField("Raison", `${args11}`, true)
    message.guild.channels.find("name", "crocs-logs").send("<@&517053064792899584>")
    var sen = await message.guild.channels.find("name", "crocs-logs").send(reportembed)
    message.channel.send("Votre report a été signalé à l'équipe de modération, n'oublie pas de screen si jamais un modérateur te le demande \nTout abus de report est sanctionnable")
    sen.react("\u2705").catch(console.error())
    sen.react("\u274e").catch(console.error())
    return;
}
module.exports.help = {
    name: "/report"
}
/*
let catégorie = ['spam', 'flood', 'insulte', '']
*/