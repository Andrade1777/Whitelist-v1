const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'avaliarstaff',
    aliases: [],
    run: async (client, message, args) => {

        let canalavaliacao = db.get(`canalav_${message.guild.id}`)

        if(message.channel.id !== canalavaliacao) return message.reply("Você não pode enviar uma sugestão neste canal!").then(msg => msg.delete({timeout: 5000}))

        let pv1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`<a:kk:750188345287508080> | Digite o Nick do Staff que Deseja Avaliar`)

        let pv2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`<a:kk:750188345287508080>  | Digite sua experiencia com o staff!`)

        let sucesso = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`<a:kk:750188345287508080>  | Avaliação Enviada Com Sucesso!`)

        message.delete()
        message.author.send(pv1).then(a => {
            let cp = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id,  {max:1})
            .on('collect', c => {
                const nick = c.content

                message.author.send(pv2).then(b => {
                    let p = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                    .on('collect', c => {
                        const exp = c.content

                        message.author.send(sucesso)

                        let avaliacao =  new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(`<a:sino:750777682924666901> | Nova Avaliação Recebida!`)
                        .addField(`<a:seta:750779960104321109> | Nick Staff Avaliado:`, nick)
                        .addField(`<a:kk:750188345287508080> | Avaliação:`, exp)
                        .setTimestamp()
                        .setFooter(`Avaliação Enviada Por: ${message.member.displayName}`, message.author.displayAvatarURL({size:32}))
                        client.channels.cache.get(canalavaliacao).send(avaliacao)
                    })
                })
            })
        })
    }
}