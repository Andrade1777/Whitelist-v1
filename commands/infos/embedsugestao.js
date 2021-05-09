const Discord = require('discord.js')

module.exports = {
    name: 'embedinfoideia',
    aliases: [],
    run: async (client, message, args) => {
        
        message.delete()
        const embedinfoid = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Sistemas De Sugestão | RKBot')
        .setDescription('<a:sino:750796642806005880> Para Fazer uma Sugestão Digite Aqui neste Canal:\n\n```!sugestao```\n<a:certo:750188046103609435> E digite sua sugestão!')
        .setFooter('Sistema Sugestão Exclusivo | RKBot | By: Bzr#0561')
        message.channel.send(embedinfoid)
    }
}