const Discord = require('discord.js')

module.exports = {
    name: 'embednota',
    aliases: [],
    run: async (client, message, args) => {
        
        const embednota = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Sistemas De Avaliação | KRBot')
        .setDescription('<a:sino:750777682924666901> Para Fazer uma avaliação Digite Aqui neste Canal:\n\n```!avaliar```\n<a:certo:750188046103609435> E olhe seu privado!')
        .setFooter('Sistema Sugestão Exclusivo | KRBot | By: Bzr#0561')
        message.channel.send(embednota)
    }
}