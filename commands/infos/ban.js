const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'ban',
    aliases: ['banir'],
    run: async (client, message, args) => {

        message.delete()

        if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Você não possui permissão para utilizar este Comando!').then(msg => msg.delete({timeout: 50000}));

        let membro = message.mentions.users.first();
        if(!membro) return message.reply('Você precisa mencionar o membro que deseja banir do Servidor!').then(msg => msg.delete({timeout: 50000}));

        let member;

        try {
            member = await message.guild.members.fetch(membro);
        } catch(err) {
            member = null;
        }

        if(!member) return message.reply('Este usuario não esta neste Servidor!').then(msg => msg.delete({timeout: 50000}));

        let motivo = args.splice(1).join(" ");
        if(!motivo) return message.reply('Você precisa escrever o Motivo do Kick!').then(msg => msg.delete({timeout: 50000}));

        let canalban = db.get(`banimentos_${message.guild.id}`)

        let log = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('<a:sirenred:756747514157203477> Novo Banimento Registrado!<a:sirenred:756747514157203477> ')
        .addFields(
            { name: "__Usuario:__", value: `${membro}`},
            { name: "__Banido Por:__", value: `${message.author}`},
            { name: "__Motivo:__", value: `${motivo}`}
        )
        .setImage('https://i.imgur.com/8p1sFbm.gif')
        .setFooter('Sistema Exclusivo Banimento | KRBot | By: Bzr#0001')
        message.guild.channels.cache.get(canalban).send(log)

        let chat = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('<a:sirenred:756747514157203477> Novo Usuario Banido!<a:sirenred:756747514157203477>')
        .setDescription(`**Nome:** ${membro}\n**Banido Por:** ${message.author}\n**Motivo:** ${motivo} `)

        let usuariokicked = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`Você foi Banido do ${message.guild.name}!`)
        .setDescription(`Motivo: ${motivo}`)

        try {
            await membro.send(usuariokicked);
        } catch(err) {
            console.warn(err);
        }

        member.ban(motivo)

        message.channel.send(chat).then(msg => msg.delete({timeout: 50000}));
    }
}