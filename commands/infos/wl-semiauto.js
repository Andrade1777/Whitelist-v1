const Discord = require('discord.js')

module.exports = {
    name: 'whitelistauto',
    aliases: ['wl-automatica'],
    run: async (client, message, args) => {

        let iniciowl = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${message.guild.name}`)
        .setDescription(`Ola ${message.author},\n__Seja bem vindo ao nosso Sistema de WhiteList Exclusivo!\nPara iniciar a Whitelist digite aqui \`iniciar\`__`)
        .setFooter(` ⚬ KRBot ● Direitos Reservados ⚬`, client.user.displayAvatarURL({size:32}))
        .setTimestamp()

        let fail = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${message.guild.name}`)
        .setDescription('<a:x_:750188683893669909> WhiteList Cancelada\nVocê não Digitou `iniciar` <a:x_:750188683893669909>')

        let pg1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Digite Nome e Sobrenome de Seu Personagem!')

        let pg2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Digite Seu ID!')

        let guild = '748738217544515648'
        const channelc = await message.guild.channels.create(`whitelist-${message.author.username}`, {
            type: 'text',
            parent: '753338419727564851',
            permissionOverwrites:[
                {
                    allow: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY','EMBED_LINKS','ATTACH_FILES','SEND_MESSAGES'],
                    id: message.author.id
                },
                {
                    deny: 'VIEW_CHANNEL',
                    id: guild
                }
            ]
        });
            channelc.send(iniciowl).then(async a => {
                let aa = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                inicio.on('collect', () => {

                    if(inicio !== 'iniciar') return message.author.send(fail)

                    channelc.send(pg1).then(async b => {
                        let bb = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                        nome.on('collect', () => {

                            channelc.send(pg2).then(async c => {
                                let cc = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                id.on('collect', () => {

                                    if(isNaN(`${id.collected.first().content}`)) return message.author.send('falha')
                                    channelc.delete()
                                })
                            })
                        })
                    })
                })
            })
    }
}