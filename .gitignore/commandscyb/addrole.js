const Discord = require('discord.js')
module.exports.run = async (bot, message, args, auth) => {
    if(!message.member.hasPermission("MANAGE_ROLES")){
        return message.reply("tu n'as pas les permissions requis pour faire cette commande")
    }
let addroleUser = message.mentions.members.first();
 if(!addroleUser) {
     return message.reply ("Je n'arrive pas à trouvé cet utilisateur, tu t'es peut être trompé")
 }
 let paramsrole = message.content.split(" " + addroleUser + " ").slice(1);
     let addrole = paramsrole
     if(!addrole){
         return message.reply("tu n'as pas mis le grade a ajouté");
     }
     let addrole2 = message.guild.roles.find("name", `${addrole}`);
     if(!addrole2){
         return message.reply("je n'arrive pas à trouver ce role")
     }
     if(!addrole2 < message.author.roles){
         return message.reply("le roles que tu veux ajouté est plus grand que le tiens...")
     }
     addroleUser.addRole(addrole2)
     message.guild.channels.find("name", "crocs-logs").send(`${auth} a ajouté le role ${addrole2} à ${addroleUser}`)
}
module.exports.help = {
    name: "role"
}