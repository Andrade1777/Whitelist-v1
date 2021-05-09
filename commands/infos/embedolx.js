const Discord = require('discord.js')

module.exports = {
    name: 'embedolx',
    aliases: [],
    run: async (client, message, args) => {
        
        message.delete()
        const embedolx = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Sistema De OLX | RKBot')
        .setDescription('<a:sino:750777682924666901> Para anunciar um produto Digite Aqui neste Canal:\n\n```!olx```\n<a:certo:750188046103609435> E olhe seu privado!')
        .setFooter('Sistema OLX Exclusivo | RKBot | By: Bzr#0561')
        message.channel.send(embedolx)
    }
}