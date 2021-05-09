const Discord = require('discord.js')

module.exports = {
    nae: 'avisar',
    aliases: [],
    run: (client, message, args) => {

        let pv1 = new Discord.MessageEmbed()
        .setTitle('<a:sino:750777682924666901> | Digite o Titulo do Anuncio!')

        let pv2 = new Discord.MessageEmbed()
        .setTitle('<a:sino:750777682924666901> | Digite o Conteúdo do Anuncio!')

        let pv3 = new Discord.MessageEmbed()
        .setTitle('<a:sino:750777682924666901> | Mencione o canal que deseja enviar o anuncio!')

        let user = message.mentions.channels.first() || client.channels.cache.get(args[0]);
        if (!user) {
            return message.reply('Lembre-se de mencionar o canal que deseja enviar um anuncio!').then(msg => msg.delete({timeout: 5000}))

            message.delete()
            message.channel.send(pv1).then(a => {
                let cp = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                .on('collect', c =>  {
                    const titulo = c.content

                    message.channel.send(pv2).then(b => {
                        let p = message.channel.createMessageCollector(x =>  x.author.id === message.author.id, {max:1})
                        .on('collect', c => {
                            const conteudo =  c.content

                            message.channel.send(pv3).then(c => {
                                let o = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                .on('collect', c => {
                                    const channel = c.content
                                })
                            })

                            let aviso = new Discord.MessageEmbed()
                            .setTitle(`<a:sino:750777682924666901> | ${titulo}`)
                            .addField(`<a:seta:750874935827890176> | ${conteudo}`)
                            .setTimestamp()
                            .setFooter(`Anuncio enviado por ${message.member.displayName}`, message.author.displayAvatarURL({size: 32}))
                            message.guild.channels.cache.get('748741142312386580').send(aviso)
                        })
                    })
                })
            })

        }
    }
}