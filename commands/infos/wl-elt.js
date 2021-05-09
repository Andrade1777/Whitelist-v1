const Discord = require('discord.js')

module.exports = {
    name: 'whitelist-elite',
    aliases: ['wl-elt'],
    run: (client, message, args) => {

        let pg1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Digite o Nome do Seu Personagem!')

        let pg2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Seu ID ?')

        let pg3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Conta um pouco da história do seu personagem.')

        let pg4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('O que é Amor a vida ?')

        let pg5 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('O que é CombatLoggin ?')

        let pg6 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('O que é MetaGaming ?')

        let pg7 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('O que é PowerGaming ?')

        let pg8 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Quais são as áreas verdes (safe) ?')

        let pg9 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Caso você sofra um ato de ANTI-RP, o que você faria ?')

        let pg10 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Caso você seja morto por uma pessoa, o que você faria ?')

        let pg11 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('O que é VDM ?')

        let pg12 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('O que é RDM ?')

        let pg13 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('O que é ANTI-RP ?')

        let pg14 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Caso você capota o carro em fuga da polícia, o que você faria ?')

        let pg15 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Você está de acordo com regras ?')

        message.author.send(pg1).then(a => {
            let aa = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
            .on('collect', c => {
                const nome = c.content
            })
        })
    }
}