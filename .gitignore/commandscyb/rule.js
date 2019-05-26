const Discord = require('discord.js')
module.exports.run = async (botcyb, message, args, auth) => {


    
    let embedrule = new Discord.RichEmbed()
    .setTitle("Règlement")
    .addField("Article 1", "Toujours insulter mee6 quand il envoi un message de level up (règle non obligatoire, ne pas l'insulter lourdement, juste dire tg ou autre petite insulte comme ca)", true)
    .addField("Article 2", "Ne pas spam/flood le chat sous peine de warn au premier avertissement, de mute au second, de ban au troisième.", true)
    .addField("Article 3", "Ne pas envoyé de lien/d'image/gif autre part que dans les salon appropriés", true)
    .addField("Article 4", "Ne pas insulter un membre du serveur sous peine de warn au premier avertissement, de mute au second, de ban au troisième.", true)
    .addField("Article 5", "Pour les modérateur, toujour screen le message lors d'une infraction du règlement avant de le supprimer sous peine de warn au premier avertissement, de unrank au second.", true)
    .addField("Article 6.1", "Ne pas tenté de ping everyone sous peine d'un warn au premier avertissement, un mute au second puis un ban au troisième.", true)
    .addField("Article 6.2", "Ne pas ping cyber/poke pour une chose inutile sous peine d'un warn au premier avertissement, un mute au second puis un ban au troisième.", true)
    .addField("Article 6.3", "Ne pas ping cyber/poke puis supprimé le message sous peine de mute au premier avertissement ou ban si répétitif", true)
    .addField("Article 7", "Ne pas utiliser le débat pain au chocolat ou chocolatine dans le salon débat-nul sous peine d'un warn au premier avertissement de mute au second puis de ban au troisième.", true)
    .addField("Article 8", "Ne pas faire de demande de dons d'argent ou autre sous peine de mute au premier avertissement ou ban si répétitif", true)
    .setColor("#2BB257")
    .setFooter(`Modifié le 26/05/2019 à 18h25`)

    if(auth.id === "519186194886688779") {
    message.channel.send(embedrule)
    }else message.reply("Tu n'as pas les permissions pour faire cela").setTimeout(() => {
        message.delete()
    }, 2000);

}
module.exports.help = {
    name: "editrules"
}