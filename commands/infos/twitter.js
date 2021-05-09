const Discord =  require('discord.js')

module.exports = {
    name: 'twitter',
    aliases:  ['twittar', 'twit'],
    run: (client, message, args) =>  {

        let canalenviartwt = db.get(`canaltwt_${message.guild.id}`)

        message.delete()
        if(message.channel.id !== "751227420828500059") return message.reply("Você não pode enviar uma sugestão neste canal!").then(msg => msg.delete({timeout: 5000}))
        message.delete()
        let twtpv = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<:twt:751225027457712249> | Digite oque deseja twittar!')

        message.author.send(twtpv).then(b => {
            let cp = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
            .on('collect', c => {
                const twtpv = c.content

                let sucesso = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('<a:sino:750777682924666901> | Twit enviado com sucesso!')

                message.author.send(sucesso)

                let twtch = new Discord.MessageEmbed()
                .setColor('blue')
                .setTitle('<:twt:751225027457712249> | Novo Twit Recebido!')
                .addField('<a:seta:750779960104321109> | **Twit:**', twtpv)
                .addField('<:homem:750779704339857418> | Autor:',  message.author)
                .setThumbnail('https://imgur.com/a/mWLT0iF')
                message.guild.channels.cache.get(canalenviartwt).send(twtch)
            })
        })
    }
}