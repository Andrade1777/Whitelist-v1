const Discord = require('discord.js')

module.exports = {
    name: 'whitelist-x1',
    aliases: [''],
    run: (client, message, args) => {

        let inii = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${message.guild.name}`)
        .setDescription('Sistema de WhiteList X1 Scootz NOOB\nPara iniciar sua WhiteList digite `iniciar`')

        let fail = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${message.guild.name}`)
        .setDescription('<a:x_:750188683893669909> WhiteList Cancelada\nVocê não Digitou `iniciar` <a:x_:750188683893669909>')

        let pg1 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('<a:kk:750188345287508080> Digite seu ID Apresentado no Jogo!')
        .setFooter('⚬ Sistema By: Bzr#0001 ● Direitos Reservados ⚬')

        let pg2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Digite o Nome e Sobrenome de Seu Personagem!')
        .setFooter('⚬ Sistema By: Bzr#0001 ● Direitos Reservados ⚬')

        let pg3 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('<a:kk:750188345287508080> Digite o  Significado de VDM!')
        .setFooter('⚬ Sistema By: Bzr#0001 ● Direitos Reservados ⚬')

        let pg4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Digite o Significado de RDM!')
        .setFooter('⚬ Sistema By: Bzr#0001 ● Direitos Reservados ⚬')

        let pg5 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Digite o Significado de Combat-Looging!')
        .setFooter('⚬ Sistema By: Bzr#0001 ● Direitos Reservados ⚬')

        let pg6 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Digite o Significado de Power-Gaming!')
        .setFooter('⚬ Sistema By: Bzr#0001 ● Direitos Reservados ⚬')

        let pg7 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Digite o Siginficiado de Meta-Gaming!')
        .setFooter('⚬ Sistema By: Bzr#0001 ● Direitos Reservados ⚬')

        message.author.send(inii).then(p => {
            let pp = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
            .on('collect', c => {
                const inicioo = c.content
            })
        })

        message.author.send(pg1).then(a => {
            let aa = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
            .on("collect", c => {
                const pgg1 = c.content

                message.author.send(pg2).then(b => {
                    let bb = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                    .on('collect', c => {
                        const pgg2 = c.content

                        message.author.send(pg3).then(c => {
                            let cc = message.author.dmChannel.createMessageCollector(x => x.author.id === messsage.author.id, {max:1})
                            .on('collect', c => {
                                const pgg3 = c.content

                                message.author.send(pv4).then(d => {
                                    let dd = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                    .on('collect', c => {
                                        const pgg4 = c.content

                                        message.author.send(pv5).then(e => {
                                            let ee = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                            .on('collect', c => {
                                                const pgg5 = c.content

                                                message.author.send(pv6).then(f => {
                                                    let ff = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                    .on('collect', c => {
                                                        const pgg6 = c.content

                                                        message.author.send(pv7).then(g => {
                                                            let gg = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                            .on('collect', c => {
                                                                const pgg7 = c.content
                                                            })
                                                        })
                                                    })
                                                })

                                                if(inicioo !== 'iniciar') return message.author.send(fail)
                                                

                                                let finalll = new Discord.MessageEmbed()
                                                .setColor('RANDOM')
                                                .setTitle(`Nova WhiteList Recebida de ${message.author.username}`)
                                                .addFields(
                                                    { name: 'ID Do Usuario:', value: pgg1, inline: true },
                                                    { name: 'Nome do Personagem:', value: pgg2, inline: true },
                                                    { name: 'Significado de VDM:', value: pgg3, inline: true},
                                                    { name: 'Significado de RDM:', value: pgg4, inline: true},
                                                    { name: 'Significado de Combat-Logging:', value: pgg5, inline: true},
                                                    { name: 'Significado de Power-Gaming:', value: pgg6, inline: true},
                                                    { name: 'Significado de Meta-Gaming:', value: pgg7, inline: true}
                                                )
                                                message.guild.channels.cache.get('753338731464884394').send(finalll)
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
}