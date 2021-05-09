const Discord = require('discord.js')

module.exports = {
    name: 'cprodutos',
    aliases: [''],
    run: (client, message, args) => {

        if(!args[0]) return message.channel.send('Digite o Nome do Produto que Deseja colocar para Venda!')
        if(!args[1]) return message.channel.send('Digite o Valor do Produto que Deseja colocar para Venda!')
        if(!args[2]) return message.channel.send('Digite o Valor do Produto em Pontos que Deseja colocar para Venda!')

        if(isNaN(args[1])) return message.channel.send('O Valor so Pode ser setado por Números!')

        let confirme = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Confirme os `DADOS` de seu Produto Abaixo:')
        .setDescription('`Os dados abaixo estão corretos?`')
        .addFields(
            { name: 'Nome do Produto:', value: `> ${args[0]}`},
            { name: 'Valor do Produto:', value: `> ${args[1]}`},
            { name: 'Valor em Pontos:', value: `> ${args[2]}`}
        )
        message.channel.send(confirme)
    }
}