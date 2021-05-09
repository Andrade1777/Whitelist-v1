const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'kick',
    aliases: ['kickar'],
    run: async (client, message, args) => {

        message.delete()

        if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('Você não possui permissão para utilizar este Comando!').then(msg => msg.delete({timeout: 5000}));

        let membro = message.mentions.users.first();
        if(!membro) return message.reply('Você precisa mencionar o membro que deseja kickar do Servidor!').then(msg => msg.delete({timeout: 5000}));

        let member;

        try {
            member = await message.guild.members.fetch(membro);
        } catch(err) {
            member = null;
        }

        if(!member) return message.reply('Este usuario não esta neste Servidor!').then(msg => msg.delete({timeout: 5000}));

        let motivo = args.splice(1).join(" ");
        if(!motivo) return message.reply('Você precisa escrever o Motivo do Kick!').then(msg => msg.delete({timeout: 5000}));

        if(message.author.id === user.id) {
            return message.reply('Você não pode Kickar você mesmo!').then(msg => msg.delete({timeout: 5000}));
        }

        let canal = db.get(`kicks_${message.guild.id}`)

        let log = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Membro Kickado!')
        .addFields(
            { name: "Usuario", value: `${membro}`, inline: true},
            { name: "Motivo", value: `${motivo}`, inline: true},
            { name: "Kickado Por", value: `${message.author}`, inline: true}
        )
        .setFooter('Sistema Exclusivo Kick | KRBot | By: Bzr#0001')
        message.guild.channels.cache.get(canal).send(log)

        let usuariokicked = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`Você foi Kikado do ${message.guild.name}`)
        .setDescription(`Motivo: ${motivo}`)

        try {
            await membro.send(usuariokicked);
        } catch(err) {
            console.warn(err);
        }

        member.kick(motivo)

        message.channel.send(`O Usuario **${membro}** foi kickado por **${message.author.username}**\nMotivo: **${motivo}**`).then(msg => msg.delete({timeout: 50000}));
    }
}