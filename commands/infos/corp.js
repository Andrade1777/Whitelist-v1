const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'anunciarcorp',
    aliases: ['vendercorp'],
    run: (client, message, args) => {

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Você não possui permissão para utilizar este Comando!').then(msg => msg.delete({timeout: 5000}));
        
        let canalcorporação = db.get(`canalcorp_${message.guild.id}`)

        message.delete()
        let pv1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<:file:760810039128358942> | Digite o Nome da Corporação que Deseja Anúnciar!')
        .setFooter('Sistema Exclusivo By: Bzr#0001 | KRBot')

        let pv2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Digite oque Contém na Corporação que deseja Anúnciar!')
        .setFooter('Sistema Exclusivo By: Bzr#0001 | KRBot')

        let pv3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<:money:750785141487566868> | Digite o Preço da Corporação que deseja Anúnciar!')
        .setFooter('Sistema Exclusivo By: Bzr#0001 | KRBot')

        message.author.send(pv1).then(a => {
            let aa = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
            .on('collect', c => {
                const nomecorp = c.content

                message.author.send(pv2).then(b => {
                    let bb = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                    .on('collect', c => {
                        const contemcorp = c.content

                        message.author.send(pv3).then(c => {
                            let cc = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                            .on('collect', c => {
                                const preçocorp = c.content

                                let sucesso = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle(`<a:certo:750188046103609435> | Anúncio da Corporação ${nomecorp} Anunciada com Sucesso!`)
                                .setFooter('Sistema Exclusivo By: Bzr#0001 | KRBot')
                                message.author.send(sucesso)

                                let final = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('<a:sino:750777682924666901> | Nova Corporação Disponivel!')
                                .addFields(
                                    { name: '<:file:760810039128358942> Nome Corporação', value: `> ${nomecorp}`,},
                                    { name: '<a:kk:750188345287508080> Contém na Corporação', value: `> ${contemcorp}`},
                                    { name: '<:money:750785141487566868> Preço Corporação', value: `> ${preçocorp}`},
                                )
                                .setTimestamp()
                                .setFooter(`Anúncio Corporação enviado Por: ${message.member.displayName}`, message.author.displayAvatarURL({size:32}))
                                message.guild.channels.cache.get(canalcorporação).send(final)
                            })
                        })
                    })
                })
            })
        })
    }
}