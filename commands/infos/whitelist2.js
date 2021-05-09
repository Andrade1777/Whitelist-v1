const Discord  = reuqire('discord.js')

module.exports = {
    name: 'whitelist2',
    aliases:  [''],
    run: async (client, message, args) => {

        message.delete()

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
            let inicio = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max:1, time: 60000})
            inicio.on('collect', () => {
                if(inicio !== 'iniciar') return channelc.send(fail)
            })
        })
    }
}