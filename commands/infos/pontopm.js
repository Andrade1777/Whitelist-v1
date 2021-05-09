const Discord = require('discord.js')
const moment = require('moment')

module.exports = {
    name: 'baterponto',
    aliases: ['ponto', 'iniciarptr'],
    run: async (client, message, args) => {

        message.delete()

        let time1 = moment().format('LTS');

        let time2 = moment().format('h:mm:ss a');

        const canal = message.member.voice.channel
        if(!canal) return message.channel.send('Você precisa estar Conectado em um Canal de Voz para Bater seu Ponto!')

        let pv1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:certo2:771015658023419914> Bate-Ponto!')
        .addFields(
            { name: 'Nome Policial:', value: `>  ${message.author.username}`, inline: true },
            { name: 'Horario de Entrada:', value: `> ${time1}`, inline: true},
            { name: 'Horario de Saida:', value: `> Trabalhando...`, inline: true},
            { name: 'Canal da Patrulha:', value: `> ${canal}`, inline: true}
        )
        .setImage('https://i.imgur.com/F4PqMJA.gif')
        const msgg = await message.channel.send(pv1)


        let pv2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`<a:sirene4:771019237425807391> **Ola** Policial ${message.author.username},\n\nVocê acaba de Bater o Ponto e **Entrar em seu Serviço!**`)
        .setFooter('Sistema de Ponto Exclusivo | COE | By: Bzr#0001')
        .setThumbnail('https://i.imgur.com/F4PqMJA.gif')

        message.author.send(pv2)
    }
}