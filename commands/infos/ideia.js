const Discord = require('discord.js')

module.exports  = {
    name: 'sugestao',
    aliases: ['ideia', 'opniao', 'sugerir'],
    run: async (client, message, args)  => {
        message.delete();
        const content = args.join(" ");

        if (!args[0]) {
            return message.channel.send(`${message.author}, Escreva a sugestão apos o comando!`)
        } else if (content.length > 1000)  {
            return message.channel.send(`${message.author}, Forneça uma sugestão de no máximo 1000 caracteres!`)
        } else {
            var canal = message.guild.channels.cache.find(ch => ch.id === "748739582203527168")
            if(message.channel.id !== "748739582203527168") return message.reply("Você não pode enviar uma sugestão neste canal!").then(msg => msg.delete({timeout: 5000}))
            const msg = await canal.send(
                new Discord.MessageEmbed()
                .setColor("#7bfa61")
                .setTitle("<a:sino:750873315090104321> | Nova Sugestão")
                .addField("<:homem:750779704339857418> | Autor:", message.author)
                .addField("<a:seta:750779960104321109> | Sugestão", content)
                .setFooter("Sistema Sugestão Exclusivo | KRBot | By: Bzr#0001")
                .setTimestamp()
            );
            await message.channel.send(`${message.author} A Sugestão foi enviada com sucesso!`).then(msg => msg.delete({timeout: 5000}))

            let sucesso = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('<a:sino:750873315090104321> | Sugestão enviada com Sucesso!')
            .setDescription('Obrigado por nos enviar uma sugestao!')
            message.author.send(sucesso)

            const emojis = ["750188046103609435", "750188683893669909"];

            for (const i in emojis) {
                await msg.react(emojis[i])

                let sucesso = new Discord.MessageEmbed()
                .setColor("#54ffb8")
                .setTitle('Sugestão enviada com sucesso!')
                .addField("Sua sugestão foi enviada para Votação, Obrigado!")
                .setFooter('Sistema Sugestão | KRBot | By: Bzr#0001')
            }
        }
    }
}