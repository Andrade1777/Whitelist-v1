const Discord =  require('discord.js')

module.exports = {
    name: 'anonimo',
    aliases:  ['deepweb'],
    run: (client, message, args) =>  {

        let canalil = db.get(`canalilegal_${message.guild.id}`)

        message.delete()
        if(message.channel.id !== "748742785670184981") return message.reply("Você não pode enviar uma mensagem anônima neste canal!").then(msg => msg.delete({timeout: 5000}))
        message.delete()
        let ilpv = new Discord.MessageEmbed()
        .setColor('black')
        .setTitle('<:anonimo:751427518690754580> | Digite oque deseja enviar como anônimo!')

        message.author.send(ilpv).then(b => {
            let cp = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
            .on('collect', c => {
                const illpv = c.content

                let sucesso = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('<:anonimo:751427518690754580> | Mensagem anônima enviada com sucesso!')

                message.author.send(sucesso)

                let ilch = new Discord.MessageEmbed()
                .setColor('black')
                .setTitle('<:anonimo:751427518690754580> | Nova mensagem anônima recebida!')
                .addField('<a:seta:750779960104321109> | Mensagem:', illpv)
                .setThumbnail('https://imgur.com/a/edom2m5')
                message.guild.channels.cache.get(canalil).send(ilch)
            })
        })
    }
}