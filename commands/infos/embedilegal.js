const Discord = require('discord.js')

module.exports = {
    name: 'embedil',
    aliases: [],
    run: async (client, message, args) => {
        
        const embedan = new Discord.MessageEmbed()
        .setColor('BLACK')
        .setTitle('<:anonimo:751427518690754580> | Sistemas De Mensagem Anônima | KRBot')
        .setDescription('<a:seta:750779960104321109> Para enviar uma mensagem anônima Digite Aqui neste Canal:\n\n```!anonimo```\n<a:certo:750188046103609435> E olhe seu privado!')
        .setFooter('Sistema Mensagem Anônima Exclusivo | KRBot')
        message.channel.send(embedan)
    }
}