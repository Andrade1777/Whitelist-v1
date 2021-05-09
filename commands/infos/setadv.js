const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'setarcanaladvertencia',
    aliases: [],
    run: (client, message, args) => {

        message.delete()
        let canaladv = message.mentions.channels.first()

    if (!args[0]) {

    if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Você não possui permissão para utilizar este comando!").then(msg => msg.delete({timeout: 5000}));
            if (!canaladv) return message.reply("Mencione o Canal que Deseja Setar!").then(msg => msg.delete({timeout: 5000}));

                } else if (args[0] + canaladv) {

        if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Você não possui permissão para utilizar este comando!").then(msg => msg.delete({timeout: 5000}));
            if (!canaladv) return message.reply("Mencione o Canal que Deseja Setar!").then(msg => msg.delete({timeout: 5000}));
                message.reply(`Canal setado com sucesso!\nCanal: <#${canaladv.id}>`)
                    db.set(`canaladv_${message.guild.id}`, canaladv.id)
        }
    }
}