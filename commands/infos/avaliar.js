const Discord =  require('discord.js')

module.exports = {
    name: 'avaliar',
    aliases:  ['nota'],
    run: (client, message, args) =>  {

        message.delete()
        if(message.channel.id !== "748744137485844520") return message.reply("Você não pode enviar uma sugestão neste canal!").then(msg => msg.delete({timeout: 5000}))
        message.delete()
        let av = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:sino:750777682924666901> | Dê sua avaliação para o KRBot!')

        message.author.send(av).then(b => {
            let cp = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
            .on('collect', c => {
                const nota = c.content

                let thanks = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('<a:sino:750777682924666901> | Obrigado Por Nós Avaliar')

                message.author.send(thanks)

                let notaembed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('<a:sino:750777682924666901> | Nova Avaliação!')
                .addField('<a:seta:750779960104321109> | Avaliação:', nota)
                .addField('<:homem:750779704339857418> | Autor:',  message.author)
                message.guild.channels.cache.get('748744137485844520').send(notaembed)
            })
        })
    }
}