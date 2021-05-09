const Discord = require('discord.js')

module.exports = {
    name: 'embedavaliar',
    aliases: [],
    run: async (client, message, args) => {
        
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você não possui permissão para utilizar este comando!").then(msg => msg.delete({timeout: 5000}));

        message.delete()
        const avaliarstaff = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Sistema De Avaliar Staff | KRBot')
        .setDescription('<a:sino:750777682924666901> Para Fazer uma Avaliação Digite Aqui neste Canal:\n\n```!avaliarstaff```\n<a:certo:750188046103609435> E olhe seu privado!')
        .setFooter('Sistema Avaliar Staff Exclusivo | KRBot | By: Bzr#0001')
        message.channel.send(avaliarstaff)
    }
}