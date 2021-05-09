const Discord = require('discord.js')
const momento = require('moment')

module.exports = {
    name: 'ponto',
    alaises: [''],
    run: async (client, message, args) => {

let days = 0
let week = 0
let uptime = ``;
let totalseconds = (client.uptime / 1000)
let hours = Math.floor(totalseconds / 3600)
totalseconds %= 3600
let minutes = Math.floor(totalseconds / 60)
let seconds = Math.floor(totalseconds % 60)

if (hours > 23) {
  days = days + 1
  hours = 0
}

if (week) {
  uptime += `${week} week, `
}

if (minutes > 60) {
  minutes = 0
}

const canal = message.member.voice.channel
if(!canal) return message.channel.send('Você precisa estar Conectado em Algum canal de Voz para Criar uma Sala!')

uptime += `${hours} Horas, ${minutes} Minutos e ${seconds} Segundos`

let pv1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Bater-Ponto!')
        .addFields(
            { name: 'Nome do Policial:', value: `>  ${message.author}`, inline: true },
            { name: 'Horario de Entrada:', value: `> ${uptime}`, inline: true},
            //{ name: 'Horario de Saida:', value: `> ${time2}`, inline: true},
            { name: 'Canal da Patrulha:', value: `> ${canal}`, inline: true}
        )
        .setImage('https://i.imgur.com/z9jU88z.gif')
        message.channel.send(pv1)

    }
}