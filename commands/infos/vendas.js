const Discord = require('discord.js')

module.exports = {
    name: 'produto',
    aliases: ['anunciarprod', 'vender'],
    run: (client, message, args) => {

        let nomeprod = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:sino:750777682924666901> | Digite o Nome Do Produto!')

        let descprod = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:sino:750777682924666901> | Digite A Descrição do Produto!')

        let valorprod = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:sino:750777682924666901> | Digite o Valor Do Produto!')

        let demonstraprod = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:sino:750777682924666901> | Digite a Demonstração Do Produto!')

        let final = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:sino:750777682924666901> | Produto enviado com sucesso!')

        message.delete()
        message.author.send(nomeprod).then(a => {
            let cp = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
            .on('collect', c => {
                const produto = c.content

                message.author.send(descprod).then(b => {
                    let p = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                    .on('collect', c => {
                        const desc = c.content

                        message.author.send(valorprod).then(c => {
                            let cp = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                            .on('collect', c => {
                                const valor = c.content

                                message.author.send(demonstraprod).then(d => {
                                    let cp = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                    .on('collect', c => {
                                        const demons = c.content
                                        
                                        message.author.send(final)

                                        let vendasprod = new Discord.MessageEmbed()
                                        .setColor('#40fff9')
                                        .setTitle('<a:sino:750777682924666901> | Novo Produto!')
                                        .addField('<a:seta:750779960104321109> | Produto:', produto)
                                        .addField('<a:kk:750188345287508080> | Descrição:', desc)
                                        .addField('<:money:750785141487566868> | Preço:', valor)
                                        .addField('<a:certoazul:750188173296009248> | Demonstração:', demons)
                                        .setTimestamp()
                                        .setFooter('Sistema Produtos Exclusivo | RKBot | By: Bzr#0561')
                                        message.guild.channels.cache.get('751052581274517566').send(vendasprod)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
}