const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'setaraviso',
    aliases: ['setadv', 'daraviso', 'daradv', 'setaradv', 'setaradvertencia'],
    run: async (client, message, args) => {

        let canladver = db.get(`canaladv_${message.guild.id}`)
        
        message.delete()
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply('Você não possui permissao para utilizar este comando!').then(msg => msg.delete({timeout: 5000}));
        }

        const user = message.mentions.members.first()

        if(!user) {
            return message.channel.send("Mencione o membro que deseja aplicar uma Advertencia! - setaraviso @mention <reason>").then(msg => msg.delete({timeout: 5000}));
        }
        
        if(message.mentions.users.first().bot) {
            return message.channel.send('Não e possivel setar advertência em BOTs!').then(msg => msg.delete({timeout: 5000}));
        }

        if(message.author.id === user.id) {
            return message.channel.send('Você não pode setar uma Advertência em si mesmo!').then(msg => msg.delete({timeout: 5000}));
        }

        const reason = args.slice(1).join(" ")

        if(!reason) {
            return message.channel.send("Forneça o motivo da Advertència! - setaraviso @mention <reason>").then(msg => msg.delete({timeout: 5000}));
        }

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

        if(warnings === 3) {
            return message.channel.send(`${message.mentions.user.first().username} Você atingiu seu limite de 3 Advertências!`)
        }

        const advv = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('<a:sirenred:756747514157203477> | Nova Advertência Registrada!')
        .addField('<a:seta:750779960104321109> | Usuario:', user)
        .addField('<a:seta:750779960104321109> | Advertido Por:', message.author)
        .addField('<a:seta:750779960104321109> | Motivo:', reason)

        if(warnings === null) {
            db.set(`warnings_${message.guild.id}_${user.id}`, 1)
            user.send(`Foi Aplicado uma Advertência em você em **${message.guild.name}** por ${reason}`)
            client.channels.cache.get(canladver).send(advv)
            await message.channel.send(`Você setou uma Advertência em **${message.mentions.users.first().username}** por ${reason}`)
        } else if(warnings !== null) {
             db.add(`warnings_${message.guild.id}_${user.id}`, 1)
            user.send(`Foi Aplicado uma Advertência em você em **${message.guild.name}** por ${reason}`)
           await message.channel.send(`Você setou uma Advertência em **${message.mentions.users.first().username}** por ${reason}`)
        }


    }
}