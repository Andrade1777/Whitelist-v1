const Discord = require('discord.js')

module.exports = {
    name: 'instagram',
    aliases: [],
    run: (client, message, args) => {

        let pv1 = new Discord.MessageEmbed()
        .setColor('#bb4eed')
        .setTitle('Digite o Titulo de Sua Publicação!')

        let pv2 = new Discord.MessageEmbed()
        .setColor('#bb4eed')
        .setTitle('Digite a Descrição de Sua Publicação!')

        let pv3 = new Discord.MessageEmbed()
        .setColor('#bb4eed')
        .setTitle('Envie A Foto que Deseja Publicar!')

        message.delete()
        message.author.send(pv1).then(a => {
            let aa = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
            .on('collect', c => {
                const titulo = c.content

                message.author.send(pv2).then(b => {
                    let bb = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                    .on('collect', c => {
                        const desc = c.content

                        message.author.send(pv3).then(c => {
                            let cc = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                            .on('collect', c => {
                                const foto = c.content

                                const isntafin = new Discord.MessageEmbed()
                                .setColor('#bb4eed')
                                .setTitle('<:insta:752251311990374551> | Nova Publicação no Instagram!')
                                .addField('')
                            })
                        })
                    })
                })
            })
        })
    }
}