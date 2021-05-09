const Discord = require('discord.js')

module.exports = {
    name: 'embeddonate',
    aliases: [],
    run: (client, message, args) => {

        let boost = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:sino:750777682924666901> KRBot - Boosting')
        .setDescription('<a:seta:750779960104321109> Sistema Impulso de Servidor KRBot:\n<a:certo:750188046103609435> | Vantagens:\n <a:kk:750188345287508080> | Tag KRBooster\n<a:kk:750188345287508080> | Um Sistema Exclusivo Do Modo Que Quiser Para Seu KRBot\n<a:kk:750188345287508080> | Sistemas Exclusivos KRBot Boost\n\n<a:x_:750188683893669909> | Observação:\n<a:x_:750188683893669909> | As Vantagens So Podem  Ser Resgatadas Enquanto Seu Boost Estiver Ativo!')
        .setImage(`https://imgur.com/a/ZYVYnyo`)
        .setFooter('Sistema Impulso Exclusivo | KRBot')
        message.channel.send(boost)
    }
}