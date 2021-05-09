const Discord = require('discord.js')

module.exports = {
    name: 'embedtwt',
    aliases: [],
    run: async (client, message, args) => {
        
        const embedtwt = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('<:twt:751225027457712249> | Sistemas De Twitter | KRBot')
        .setDescription('<a:seta:750779960104321109> Para twittar Digite Aqui neste Canal:\n\n```!twitter```\n<a:certo:750188046103609435> E olhe seu privado!')
        .setFooter('Sistema Twitter Exclusivo | KRBot')
        message.channel.send(embedtwt)
    }
}