const Discord = require('discord.js')

module.exports = {
    name: 'novocliente',
    aliases: [],
    run: (client, message, args) => {

        const member = message.mentions.members.first()

        if(!member) {
            return message.channel.send('Você Precisa Mencionar o Novo Cliente!')
        }

        let nomesv = new Discord.MessageEmbed()
        .setTitle('Digite o Nome do Servidor do Cliente!')
        .setColor('RANDOM')

        let categoria = new Discord.MessageEmbed()
        .setTitle('Digite a Categoria do Cliente!')
        .setColor('RANDOM')

        message.author.send(nomesv).then(a => {
            let aa = message.author.dmChannel.createMessageCollector(x =>  x.author.id === message.author.id, {max:1})
            .on('collect', c => {
                const nomesv = c.content

                message.author.send(categoria).then(b => {
                    let bb = message.author.dmChannel.createMessageCollector(x  => x.author.id === message.author.id, {max:1})
                    .on('collect', c => {
                        const categoria = c.content

                        let sucesso = new  Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(`Você setou o ${member} como ${categoria} com sucesso!`)
                        message.author.send(sucesso)

                        let final = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(`> **Seu Servidor ${nomesv}\n Foi Setado como: ${categoria}**`)
                        .addField(`> __**Gratuitamente seu Servidor já tinha:**__\n<a:setabolada:752100881746362438> Sistema de **Moderação/Administração.**\n<a:setabolada:752100881746362438> Sistema de **Bem-vindo** entrada/saida com Cargo.\n<a:setabolada:752100881746362438> Sistema de **Bater-Ponto** (Policia-Samu-Mecanico).\n<a:setabolada:752100881746362438> Sistema de **Denúncias**.\n<a:setabolada:752100881746362438> Sistema de **Reportar-Bugs.**\n<a:setabolada:752100881746362438>Sistema de **Setagens.**\n<a:setabolada:752100881746362438> Sistema de **Sugestões**\n<a:setabolada:752100881746362438> Sistema de **Tinder & OLX.**\nSistema de **Anti-Invites** com canal para Divulgar.\n<a:setabolada:752100881746362438> Sistema de **Mensagens RolePlay** (/ilegal /twitter etc..)\n\n> __**Agora ele Possui mais isso:**__\n<a:seta:750779960104321109> **Sistema de Setar Vip pelo Discord in Game com 5 Opções de Vips**\n<a:seta:750779960104321109> **Direito a Utilização do Comando !criarsorteio (com ate 3 ganhadores)**\n<a:seta:750779960104321109> **Direito a Utilização do Comando !h**\n<a:seta:750779960104321109> **Direito a Alteração do Nome do BOT**\n<a:seta:750779960104321109> **Direito a Instalação do Sistema de Stream**\n<a:seta:750779960104321109> **Direito a Instalação do Sistema de WhiteList**\n <a:seta:750779960104321109> **Direito a Instalar o Sistema de Banco de Dados**\n<a:seta:750779960104321109> **Direito a Instalar os Futuros Sistemas para Doanters**\n<a:fun:752105699462348860> Direito a TAG no Servidor Oficial de Donater KRBot\n<a:fun:752105699462348860> Obrigado Pelo Apoio!`)
                        member.send(final)
                    })
                })
            })
        })
    }
}