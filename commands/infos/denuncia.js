const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'denunciar',
    aliases: ['reportar', 'report'],
    run: async (client, message, args) => {

        let canalenviardenuncia = db.get(`canaldenuncia_${message.guild.id}`)
        let canalreceberdenuncias = db.get(`canaldenunciasecebidas_${message.guild.id}`)

        let nid = new Discord.MessageEmbed()
        .setTitle('Nome/Id de Quem Deseja Denunciar!')
        .setColor('RANDOM')

        let motivo = new  Discord.MessageEmbed()
        .setTitle('Motivo da Denuncia')
        .setColor('RANDOM')

        let provas = new  Discord.MessageEmbed()
        .setTitle('Envie as Provas Da Denúncia Como Videos/Prints')
        .setColor('RANDOM')


        if(message.channel.id !== canalenviardenuncia) return message.reply("Não pode utilizar este comando neste chat!").then(msg => msg.delete({timeout: 5000}))
        message.author.send(nid).then(a => {
            let cp = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
            .on('collect', c => {
                const nid = c.content

                message.author.send(motivo).then(a => {
                    let p = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                    .on('collect', c => {
                        const motivo = c.content

                        message.author.send(provas).then(a => {
                            let o = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                .on('collect', c => {
                                    const provas = c.content
                                    message.delete()

                                    let denuncias = new Discord.MessageEmbed()
                                        .setColor('RANDOM')
                                        .setTitle('Obrigado Pela Ajuda!')
                                        .addField('Sua Denuncia foi enviada com sucesso aos Administradores!', message.author)
                                        .setTimestamp()
                                        .setFooter('Sistema Denuncia Exclusivo | KRBot')
                                        client.channels.cache.get(canalenviardenuncia).send(denuncias)

                                    let denuncia2 = new Discord.MessageEmbed()
                                        .setColor('ed0e0e')
                                        .setTitle('<a:sino:750873315090104321> | Nova Denúncia Registrada')
                                        .addField('<:homem:750873387412357221> | Autor:', message.author)
                                        .addField('<a:seta:750874935827890176> | Nome/Id Denunciado:', nid)
                                        .addField('<a:seta:750874935827890176> | Motivo Denuncia:', motivo)
                                        .addField('<a:seta:750874935827890176> | Provas:', provas)
                                        .setFooter('Sistema Denuncia Exclusivo | AthenRolePlay | By: Bzr#0561')
                                        .setTimestamp()
                                        client.channels.cache.get(canalreceberdenuncias).send(denuncia2)

    
                            })
                        })
                    })
                })
            })
        })
    }
}