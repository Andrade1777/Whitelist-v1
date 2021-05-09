const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'setarcanalfacção',
    aliases: [],
    run: (client, message, args) => {

        message.delete()
        let canalfac = message.mentions.channels.first()

    if (!args[0]) {

    if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Você não possui permissão para utilizar este comando!").then(msg => msg.delete({timeout: 5000}));
            if (!canalfac) return message.reply("Mencione o Canal que Deseja Setar!").then(msg => msg.delete({timeout: 5000}));

                } else if (args[0] + canalfac) {

        if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Você não possui permissão para utilizar este comando!").then(msg => msg.delete({timeout: 5000}));
            if (!canalfac) return message.reply("Mencione o Canal que Deseja Setar!").then(msg => msg.delete({timeout: 5000}));
                message.reply(`Canal setado com sucesso!\nCanal: <#${canalfac.id}>`)
                    db.set(`canalfac_${message.guild.id}`, canalfac.id)
        }
    }
}