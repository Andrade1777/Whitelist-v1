const Discord = require('discord.js')

module.exports = {
    name: 'embedprodutoinfo',
    aliases: [],
    run: async (client, message, args) => {
        
        const embednewbooster = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:booster:753330155518296205> Sistemas Membros Boosters | KRBot')
        .setDescription('<a:sino:750873315090104321> Para Anunciar um Novo Membro Booster Digite Aqui neste Canal:\n\n```!booster```\n<a:certo:750873425207230545> mais informações em seu privado!')
        .setFooter('Sistema Booster Exclusivo | KRBot | By: Bzr#0561')
        message.channel.send(embednewbooster)
    }
}