const Discord = require('discord.js')

module.exports = {
    name: 'denunciarbug',
    aliases: ['reportarbug', 'reportbug'],
    run: (client, message, args) => {

        let canalenviardenunciabug = db.get(`canalbug_${message.guild.id}`)
        let canalreceberdenunciasbug = db.get(`canalbugreceber_${message.guild.id}`)

        let bug = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:sino:750796642806005880> | Digite o bug que deseja reportar!')

        let provas = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:sino:750796642806005880> | Envie prints/videos que comprove que o bug realmente existe!')


        message.delete()
        message.author.send(bug).then(a => {
            let cp = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
            .on('collect', c => {
                const bugg = c.content

                message.delete()
                message.author.send(provas).then(b => {
                    let p = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                    .on('collect', b => {
                        const provas = c.content

                        let final = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle('<a:sino:750796642806005880> | Nossa equipe vai estar verificando o bug o mais rapido possivel. Obrigado!')
                            message.author.send(final)

                            let denuncias = new Discord.MessageEmbed()
                                        .setColor('RANDOM')
                                        .setTitle('Obrigado Pela Ajuda!')
                                        .addField('Sua Denuncia foi enviada com sucesso aos Administradores!', message.author)
                                        .setTimestamp()
                                        .setFooter('Sistema Denuncia Exclusivo | KRBot')
                                        client.channels.cache.get(canalenviardenunciabug).send(denuncias)

                        let reportbug = new Discord.MessageEmbed()
                                        .setColor('#random')
                                        .setTitle('<a:sino:750777682924666901> | Nova Denúncia Bug Recebida!')
                                        .addField('<a:seta:750779960104321109> | Denúncia:', bugg)
                                        .addField('<a:kk:750188345287508080> | Provas:', provas)
                                        .setTimestamp()
                                        .setFooter('Sistema Produtos Exclusivo | KRBot')
                                        message.guild.channels.cache.get(canalreceberdenunciasbug).send(reportbug)
                    })
                })
            })
        })
    }
}