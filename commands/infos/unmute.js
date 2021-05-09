const Discord = require('discord.js')

module.exprots = {
    name: 'desmutar',
    aliases: ['unmute', 'desilenciar'],
    run: (client, message, args) => {

        if(!message.member.hasPermission('MANAGE_ROLE')) {
            return message.channel.send('Você não possui permissão de utilizar este Comando!')
        }

        if(!message.guild.me.hasPermission('MANAGE_ROLES')) {
            return message.channel.send('Não tenho permissão para gerenciar Cargos.')
        }
        
        const user = message.mentions.members.first();

        if(!user) {
            return message.channel.send('Mencione o Membro que Deseja desmutar!'
            );
        }

        let muterole = message.guild.roles.cache.find(x => x.name === 'Mutado')

        if(user.roles.cache.has(muterole)) {
            return message.channel.send('Este Usuario Não está Mutado!')
        }

        user.roles.remove(muterole)

        await message.channel.send(`__**${message.mentions.users.first().username}**__ foi desmutado!`)

        user.send(`Você foi desmutado do servidor - __**${message.guild.name}**__`)
    }
}