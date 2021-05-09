const Discord = require('discord.js')

module.exports = {
    name: 'embedwl',
    aliases: [],
    run: async (client, message, args) => {
        
        const embedtwt = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setTitle('<a:sino:750777682924666901> | Sistemas De WhiteList | KRBot')
        .setDescription('<a:seta:750779960104321109> Para iniciar sua whitelist Digite Aqui neste Canal:\n\n```!whitelist```\n<a:certo:750188046103609435> E olhe seu privado!')
        .setFooter('Sistema WhiteList Exclusivo | KRBot')
        message.channel.send(embedtwt)
    }
}