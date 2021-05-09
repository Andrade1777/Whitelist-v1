const { DiscordAPIError } = require("discord.js");

module.exports = (client, message) => {
    if(message.author.bot) return;
    let prefix = '!'

    if(message.content.startsWith(`<@!${client.user.id}>`)) {
        return message.reply(`Utilize meu Prefix **!** com algum comando na frente!`)
    }

    if(message.channel.id === "" && !message.content.startsWith(prefix)) {
        message.delete()
        return message.reply("Este canal não foi feito para bate-papo, apenas para twits\n\n```Use:!twitter``` Mais informações em seu privado!").then(msg => msg.delete({timeout: 5000}));
    }


    if(message.channel.id === "751227420828500059" && !message.content.startsWith(prefix)) {
        message.delete()
        return message.reply("Este canal não foi feito para bate-papo, apenas para twits\n\n```Use:!whitelist``` Mais informações em seu privado!").then(msg => msg.delete({timeout: 5000}));
    }

    if(message.channel.id === "748744137485844520" && !message.content.startsWith(prefix)) {
        message.delete()
        return message.reply("Este canal não foi feito para bate-papo, apenas para avaliações\n\n```Use:!avaliar``` Mais informações em seu privado!").then(msg => msg.delete({timeout: 5000}));
    }

    if(message.channel.id === "750922124616532009" && !message.content.startsWith(prefix)) {
        message.delete()
        return message.reply("Este canal não foi feito para bate-papo, apenas para produtos\n\n```Use:!produto``` Mais informações em seu privado!").then(msg => msg.delete({timeout: 5000}));
    }

    if(message.channel.id === "748739582203527168" && !message.content.startsWith(prefix)) {
        message.delete()
        return message.reply("Este canal não foi feito para bate-papo, apenas para sugestões\n\n```Use:!sugestao```Mais informações em seu privado!").then(msg => msg.delete({timeout: 5000}));
    }

    if(message.channel.id === "" && !message.content.startsWith(prefix)) {
        message.delete()
        return message.reply("Este canal não foi feito para bate-papo, apenas para Denúncias\n\n```Use: !denunciar```Mais informações em seu privado!").then(msg => msg.delete({timeout: 5000}));
    }


    if(!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    
    let cmd = args.shift().toLowerCase()
    if(cmd.length === 0) return;
 
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd))
    if(command) command.run(client, message, args)
 
    if(!command) return message.reply(`Não encontrei o comando **${cmd}**.`).then(msg => msg.delete({timeout: 8000}))
}