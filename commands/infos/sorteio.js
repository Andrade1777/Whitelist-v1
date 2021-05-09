const Discord = require('discord.js')

module.exports = {
    name: 'sorteio',
    aliases: [],
    run: async (client, message, args) => {


        if(!message.member.hasPermission('ADMINISTRATOR')) return;

        var regra = /^[0-9]+$/;
        if (!args[0].match(regra)) return;
        if (args[0] < 1) return;
        let owner = message.author;
        let timer = args[0]
        args.shift()
        let premio = args.join(" ")
        if (premio == "") return;


        let embed = new Discord.MessageEmbed()
        .setAuthor(owner.tag, owner.displayAvatarURL({ format: 'png' }))
        .setColor('RANDOM')
        .setDescription('Reaja a essa mensagem com 🎁 para participar do Sorteio!')
        .addFields(
            { name: "Autor do Sorteio", value: `${owner}`, inline: true},
            { name: "Prêmio", value: `${premio}`, inline: true},
            { name: "Tempo Restante", value: `${timer}min`, inline: true}
        )
        .setThumbnail(owner.displayAvatarURL({ format: 'png' }))
        .setTitle('Novo Sorteio!!')
        .setFooter(` ⚬ KRBot ● Direitos Reservados ⚬`, client.user.displayAvatarURL({size:32}))
        let message1 = await message.channel.send(embed)
        let reactions = ['🎁']
        let participantes = []
        await message1.react(reactions[0])
        const filter = (reaction) => reactions.includes(reaction.emoji.name);
        const collector = message1.createReactionCollector(filter, {time: timer * 1000 * 60, dispose: true})

        collector.on('collect', async (emoji, user) => {
            switch (emoji._emoji.name) {
                case reactions[0]:
                participantes.push(user.id)
                break;
            default:
                break;
            }
        })

        collector.on('dispose', async (emoji, user) => {
            switch (emoji._emoji.name) {
                case reactions[0]:
                    let index = participantes.indexOf(user.id)
                    if (index > -1) {
                        participantes.splice(index, 1)
                    }
                    break;
                default:
                    break;
            }
        })

        collector.on('end', async  (emoji, user) => {
            if (!participantes.length == 0) {
                let n = Math.floor(Math.random() * (participantes.length))
                let winnerID = participantes[n]
                let winner = await message.guild.members.fetch(winnerID)
                let endmessage =  new Discord.MessageEmbed()
                .setAuthor(winner.user.tag, winner.user.displayAvatarURL({ format: 'png'}))
                .setColor('RANDOM')
                .setDescription(`Vencedor do Sorteio: ${winner.user.tag}`)
                .addFields(
                    { name: "Autor do Sorteio", value: `${owner}`, inline: true},
                    { name: "Prêmio:", value: `${premio}`, inline: true},
                    { name: "Ganhador:", value: `${winner.user}`, inline: true},
                    { name: "Total Participantes:", value: `${participantes.length}`, inline: true}
                )
                .setThumbnail(winner.user.displayAvatarURL({ format: 'png' }))
                .setTitle('Sorteio Encerrado!!')
                .setFooter(` ⚬ KRBot ● Direitos Reservados ⚬`, client.user.displayAvatarURL({size:32}))
                await message.channel.send(winner.user, endmessage)
                message.delete();
            } else {
                let endmessage = new Discord.MessageEmbed()
                .setAuthor(owner.tag, owner.displayAvatarURL({ format: 'png' }))
                .setColor('RANDOM')
                .setDescription(`Não teve participantes no Sorteio. :(`)
                .addFields(
                    { name: "Autor do Sorteio:", value: `${owner}`, inline: true},
                    { name: "Prêmio:", value: `${premio}`, inline: true},
                    { name: "Ganhador:", value: `Não Teve`, inline: true}
                )
                .setThumbnail(owner.displayAvatarURL({ format: 'png' }))
                .setTitle('Sorteio Encerrado!!')
                .setFooter(` ⚬ KRBot ● Direitos Reservados ⚬`, client.user.displayAvatarURL({size:32}))
                await message.channel.send(endmessage)
                message.delete()
            }
        })
    }
}