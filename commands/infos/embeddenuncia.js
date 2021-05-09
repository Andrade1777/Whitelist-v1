const Discord = require('discord.js')

module.exports = {
    name: 'embeddenuncia',
    aliases: [],
    run: async (client, message, args) => {
        
        message.delete()
        const embeddenuncia = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Sistema De Denúncia | RKBot')
        .setDescription('<a:sino:750777682924666901> Para Fazer uma Denúncia Digite Aqui neste Canal:\n\n```!denunciar```\n<a:certo:750188046103609435> E olhe seu privado!')
        .setFooter('Sistema Sugestão Exclusivo | RKBot | By: Bzr#0561')
        message.channel.send(embeddenuncia)
    }
}