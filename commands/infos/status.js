const Discord = require('discord.js')
const Gamedig = require('gamedig')

module.exports = {
    name: 'status',
    aliases: [],
    run: async (client, message, args) => {

        Gamedig.query({
            type: 'mtasa', // multi theft auto
            host: '149.56.41.54',  // ip do servidor
            port: '22133', // porta do servidor
        }).then((state) => {
            if (state['raw']['numplayers'] === 0) {
                let embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Multi Theft Auto')
                .setDescription(state['name'])
                .addField('Status:', '✅', true)
                .addField('Jogadores:', state['raw']['numplayers'] + ' de ' + state['maxplayers'], true)
                .setThumbnail(`https://cdn.discordapp.com/emojis/712705728313557092.gif?v=1`)
                message.channel.send(embed)
            } else {
                let embed = new Discord.Message()
                .setColor('#0099ff')
                .setTitle('Multi Theft Auto')
                .setDescription(state['name'])
                .addField('Status:', '✅', true)
                .addField('Jogadores:', state['raw']['numplayers'] + ' de ' + state['maxplayers'], true)
                .addField('Mapa:', state['map'], true)
                .addField('Versão:', state['raw']['version'], true)
                .addField('tipo:', state['raw']['gametype'], true)
                .addField('Endereço:', state['connect'], true)
                .setThumbnail(`https://cdn.discordapp.com/emojis/712705728313557092.gif?v=1`)
                    message.channel.send(embed)
            }
        }).catch((error) => {
let embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Multi Theft Auto')
            .setDescription('Servidor esta Offline ou Não existe!')
            .addField('Status:', '🚫')
            .setThumbnail(`https://cdn.discordapp.com/emojis/712706638699692034.gif?v=1`)
            message.channel.send(embed)
        })
    }
}