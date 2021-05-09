const Discord = require('discord.js')

module.exports = {
    name: 'embedbug',
    aliases: [],
    run: async (client, message, args) => {
        
        message.delete()
        const embeddbug = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Sistemas De Denúncia De Bugs | KRBot')
        .setDescription('<a:sino:750777682924666901> Para Fazer uma Denúncia De Bug Digite Aqui neste Canal:\n\n```!denunciarbug```\n<a:certo:750188046103609435> E olhe seu privado!')
        .setFooter('Sistema Sugestão Exclusivo | KRBot | By: Bzr#0561')
        message.channel.send(embeddbug)
    }
}