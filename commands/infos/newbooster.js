const Discord = require('discord.js')

module.exports = {
    name: 'booster',
    aliases: [],
    run: (client, message, args) => {

        let pv1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:booster:753330155518296205> | Digite o Nick Do Usuario Que Deu Boost Ao Servidor!')

        let pv2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:booster:753330155518296205> | Digite Quantos Boost O Usuario Deu No Servidor!')

        message.delete()
        message.author.send(pv1).then(a => {
            let cp = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
            .on('collect', c => {
                const nick = c.content

                message.author.send(pv2).then(b => {
                    let p = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                    .on('collect', c => {
                        const quantia = c.content

                        let pv3 = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle('<a:booster:753330155518296205> | Novo Usuario Booster Setado!')
                        message.author.send(pv3)

                        let boostfin = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle('<a:booster:753330155518296205> | Novo Membro Booster KRBot!')
                        .addField('<a:seta:750779960104321109> | Nick Booster:', nick)
                        .addField('<a:seta:750779960104321109> | Boost Ativos:', quantia)
                        .setFooter(`Boost Enviado Por:`, nick)
                        message.guild.channels.cache.get('753330677704818758').send(boostfin)
                    })
                })
            })
        })
    }
}