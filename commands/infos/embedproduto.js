const Discord = require('discord.js')

module.exports = {
    name: 'embedprodutoinfo',
    aliases: [],
    run: async (client, message, args) => {
        
        const embedprodinfo = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750873663808602123> Sistemas De Vendas | AthenRolePlay')
        .setDescription('<a:sino:750873315090104321> Para Fazer uma Venda Digite Aqui neste Canal:\n\n```!produto```\n<a:certo:750873425207230545> mais informações em seu privado!')
        .setFooter('Sistema Sugestão Exclusivo | AthenRolePlay | By: Bzr#0561')
        message.channel.send(embedprodinfo)
    }
}