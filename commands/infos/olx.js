const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'olx',
    aliases: ['anunciarolx', 'anunciarproduto'],
    run: (client, message, args) => {

        let canalenviar = db.get(`canal_${message.guild.id}`)

        let olxpv1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:sino:750777682924666901> | Digite oque deseja anunciar na olx!')

        let olxpv2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:sino:750777682924666901> | Digite a descrição do produto que deseja anunciar!')

        let olxpv3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Digite o preço do produto que deseja anunciar!')

        let olxpv4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:sino:750777682924666901> | Envie uma foto do produto(upada no imgur) que deseja anunciar!')

        message.delete()
        message.author.send(olxpv1).then(a => {
            let cp = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
            .on('collect', c => {
                const prod = c.content

                message.author.send(olxpv2).then(b => {
                    let p = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                    .on('collect', c => {
                        const descprod = c.content

                        message.author.send(olxpv3).then(c => {
                            let o = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                            .on('collect', c => {
                                const preçoprod  = c.content

                                message.author.send(olxpv4).then(d => {
                                    let g = message.author.dmChannel.createMessageCollector(x =>  x.author.id === message.author.id, {max:1})
                                    .on('collect', c => {
                                        const fotoprod = c.content

                                        let thanks = new Discord.MessageEmbed()
                                        .setColor('RANDOM')
                                        .setTitle('<:olx:751438104501420143> | Produto anunciado na olx com sucesso!')
                                        message.author.send(thanks)

                                        let vendasolx = new Discord.MessageEmbed()
                                        .setColor('#ffd014')
                                        .setTitle('<a:sino:750777682924666901> | Novo Anuncio OLX!')
                                        .addField('<a:setabolada:752100881746362438> | Anunciante', message.author)
                                        .addField('<a:seta:750779960104321109> | Produto Anunciado:', prod)
                                        .addField('<a:kk:750188345287508080> | Descrição do Produto', descprod)
                                        .addField('<:money:750785141487566868> | Preço do Produto:', preçoprod)
                                        .addField('<a:certoazul:750188173296009248> | Foto do Produto:', fotoprod)
                                        .setFooter('Sistema OLX Exclusivo | KRBot')
                                        client.channels.cache.get(canalenviar).send(vendasolx)
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