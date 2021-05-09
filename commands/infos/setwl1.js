const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'setarcanaldenunciasrecebidas',
    aliases: [],
    run: (client, message, args) => {

        message.delete()
        let perguntawl1 = args.slice(1).join(" ")

    if (!args[0]) {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você não possui permissão para utilizar este comando!").then(msg => msg.delete({timeout: 5000}));
            if (!perguntawl1) return message.reply("Digite a Pergunta que Deseja setar Como 01 da WhiteList!").then(msg => msg.delete({timeout: 5000}));

                } else if (args[0] + perguntawl1) {

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você não possui permissão para utilizar este comando!").then(msg => msg.delete({timeout: 5000}));
            if (!perguntawl1) return message.reply("Digite a Pergunta que Deseja setar Como 01 da WhiteList!").then(msg => msg.delete({timeout: 5000}));
                message.reply(`Pergunta 01 WhiteList setado com sucesso!\nPergunta 01: <${perguntawl1}>`)
                    db.set(`perguntawl1_${message.guild.id}`)
        }
    }
}