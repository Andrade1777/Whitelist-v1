const db = require('quick.db')

module.exports = {
    name: 'removeraviso',
    aliases: ['radv'],
    run: async (client, message, args) => {

        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send('Você não possui permissão para utilizar este comando!')
        }

        const user = message.mentions.members.first()

        if(!user) {
            return message.channel.send('Mencione a pessoa que deseja retirar as advertências!')
        }

        if(message.mentions.users.first().bot) {
            return message.channel.send("BOTs não possuem avisos!")
        }

        if(message.author.id === user.id) {
            return message.channel.send("Você não possui permissão para retirar suas advertências!")
        }

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

        if(warnings === null) {
            return message.channel.send(`${message.mentions.users.first().username} não possui nenhuma advertência!`)
        }

        db.delete(`warnings_${message.guild.id}_${user.id}`)
        user.send(`Todas suas advertências foram retiradas por ${message.author.username} de ${message.guild.name}`)
        await message.channel.send(`Retirada todas advertências de ${message.mentions.users.first().username}`)



    }
}