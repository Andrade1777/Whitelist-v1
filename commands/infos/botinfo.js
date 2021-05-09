const { MessageEmbed, Message } = require('discord.js')

module.exports = {
    name: 'botinfo',
    aliases: ['infosbot'],
    run:  async (client, message, args) => {

        message.delete()
        const embed = new MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTitle('<:logok:756221635001974897> | Informações KRBot Premium')
        .setColor('RANDOM')
        .addFields(
            { name: '🌐 | Servidores Conectados', value: `${client.guilds.cache.size} Servidores!`},
            { name: '💻 | Canais Conectados', value: `${client.channels.cache.size} Canais!`},
        )
        .setTimestamp()
        .setFooter(`Comando Solicitado Por: ${message.member.displayName}`, message.author.displayAvatarURL({size:32}))

        await message.channel.send(embed).then(msg => msg.delete({timeout: 30000}));
    }
}