const Discord = require('discord.js')

module.exports  =  {
    name: 'mutar',
    aliases: ['silenciar', 'mute'],
    run: async (client, message, args) => {

        if(!message.member.hasPermission('MANAGE_ROLE')) {
            return message.channel.send('Você não possui permissão de utilizar este Comando!')
        }

        if(!message.guild.me.hasPermission('MANAGE_ROLES')) {
            return message.channel.send('Não tenho permissão para gerenciar Cargos.')
        }
        
        const user = message.mentions.members.first();

        if(!user) {
            return message.channel.send('Mencione o Usuario que Desejar Mutar!')
        }
        
        if(user.id === message.author.id) {
            return message.channel.send('Você não pode Mutar você mesmo! -_-')
        }

        let motivo = args.splice(1).join(" ")

        if(!motivo) {
            return message.channel.send('Digite o Motivo que Deseja Mutar este Membro!')
        }

        if(message.mentions.users.first().bot) {
            return message.channel.send('Não e possivel silenciar `BOTs`!').then(msg => msg.delete({timeout: 5000}));
        }

        //Hora de Tirar o Cargo de Mutado

        let muterole = message.guild.roles.cache.find(x => x.name === 'Mutado')

        if(!muterole) {
            return message.channel.send('Não consegui encontrar o cargo `Mutado`, Por gentileza, Crie-o')
        }

        if(user.roles.cache.has(muterole)) {
            return message.channel.send('Este usuario ja esta Mutado!')
        }


        user.roles.add(muterole)

        await message.channel.send(`Você mutou **${message.mentions.users.first().username}** Por \`${motivo}\``)

        user.send(`Você foi Mutado do Servidor - __**${message.guild.name}**__\n__**Mutado Por:**__ \`${message.author.username}\`\n__**Motivo:**__ \`${motivo}\``)
    }
}