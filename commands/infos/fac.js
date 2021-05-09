const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'anunciarfac',
    aliases: ['facção', 'venderfac'],
    run: (client, message, args) => {

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Você não possui permissão para utilizar este Comando!').then(msg => msg.delete({timeout: 5000}));

        let canalfacçao = db.get(`canalfac_${message.guild.id}`)

        message.delete()
        let pv1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<:file:760810039128358942> | Digite o Nome da Facção que deseja Anunciar a Venda!')
        .setFooter('Sistema Exclusivo By: Bzr#0001')

        let pv2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Digite Oque a Facção contém!')
        .setFooter('Sistema Exclusivo By: Bzr#0001')

        let pv3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<:money:750785141487566868> | Digite o Preço que a Facção está a venda!')
        .setFooter('Sistema Exclusivo By: Bzr#0001')

        message.author.send(pv1).then(a => {
            let aa = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
            .on('collect', c => {
                const fac = c.content

                message.author.send(pv2).then(b => {
                    let bb = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                    .on('collect', c => {
                        const itens = c.content

                        message.author.send(pv3).then(c => {
                            let cc = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                            .on('collect', c => {
                                const preço = c.content

                                let sucesso = new Discord.MessageEmbed()
                                .setColor('RANDOM')    
                            .setTitle('<a:certo:750188046103609435> | Anuncio Facção Disponivel Enviado com Sucesso!')
                                message.author.send(sucesso)
                                    
                                let final = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('<a:sino:750777682924666901> | Nova Facção Disponivel')
                                .addFields(
                                    { name: '<:file:760810039128358942> Nome Facção', value: `> ${fac}`,},
                                    { name: '<a:kk:750188345287508080> Contém na Facção', value: `> ${itens}`},
                                    { name: '<:money:750785141487566868> Preço Facção', value: `> ${preço}`},
                                )
                                .setTimestamp()
                                .setFooter(`Anúncio Facção enviado Por: ${message.member.displayName}`, message.author.displayAvatarURL({size:32}))
                                message.guild.channels.cache.get(canalfacçao).send(final)
                            })
                        })
                    })
                })
            })
        })
    }
}