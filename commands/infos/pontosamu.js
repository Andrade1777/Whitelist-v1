const Discord = require('discord.js')
const moment = require('moment')

module.exports = {
    name: 'baterponto',
    aliases: ['pontosamu'],
    run: async (client, message, args) => {

        let time1 = moment().format('LTS')

        const canal = message.member.voice.channel
        if(!canal) return message.channel.send('Você precisa estar Conectado em Um Canal de Voz do Samu para Bater seu Ponto!')

        let pv1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:certo2:771015658023419914> Bate-Ponto!')
        .addFields(
            { name: 'Nome Paramedico:', value: `>  ${message.author.username}`, inline: true },
            { name: 'Horario de Entrada:', value: `> ${time1}`, inline: true},
            { name: 'Horario de Saida:', value: `> Trabalhando...`, inline: true},
            { name: 'Canal do Serviço:', value: `> ${canal}`, inline: true}
        )
        .setImage('https://i.imgur.com/ho6n1c5.gif')
        const msgg = await message.channel.send(pv1)
    }
}