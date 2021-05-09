const Discord = require('discord.js')

module.exports = {
    name: 'novocliente',
    aliases: [],
    run: (client, message, args) => {

        const membro = message.mentions.members.first()

        if(!membro)  {
            return message.channel.send('Mencione o membro que Deseja setar como Cliente!')
        }

        const nomeservidor = args.slice(1).join(" ")

        if(!nomedoservidor) {
            return message.channel.send('Você precisa inserir o nome do Servidor do Cliente!')
        }

        let final = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(`> **Seu Servidor ${nomeservidor}\n Foi Setado como: Donater**`)
                        .addField(`> __**Gratuitamente seu Servidor já tinha:**__\n<a:setabolada:752100881746362438> Sistema de **Moderação/Administração.**\n<a:setabolada:752100881746362438> Sistema de **Bem-vindo** entrada/saida com Cargo.\n<a:setabolada:752100881746362438> Sistema de **Bater-Ponto** (Policia-Samu-Mecanico).\n<a:setabolada:752100881746362438> Sistema de **Denúncias**.\n<a:setabolada:752100881746362438> Sistema de **Reportar-Bugs.**\n<a:setabolada:752100881746362438>Sistema de **Setagens.**\n<a:setabolada:752100881746362438> Sistema de **Sugestões**\n<a:setabolada:752100881746362438> Sistema de **Tinder & OLX.**\nSistema de **Anti-Invites** com canal para Divulgar.\n<a:setabolada:752100881746362438> Sistema de **Mensagens RolePlay** (/ilegal /twitter etc..)\n\n> __**Agora ele Possui mais isso:**__\n<a:seta:750779960104321109> **Sistema de Setar Vip pelo Discord in Game com 5 Opções de Vips**\n<a:seta:750779960104321109> **Direito a Utilização do Comando !criarsorteio (com ate 3 ganhadores)**\n<a:seta:750779960104321109> **Direito a Utilização do Comando !h**\n<a:seta:750779960104321109> **Direito a Alteração do Nome do BOT**\n<a:seta:750779960104321109> **Direito a Instalação do Sistema de Stream**\n<a:seta:750779960104321109> **Direito a Instalação do Sistema de WhiteList**\n <a:seta:750779960104321109> **Direito a Instalar o Sistema de Banco de Dados**\n<a:seta:750779960104321109> **Direito a Instalar os Futuros Sistemas para Doanters**\n<a:fun:752105699462348860> Direito a TAG no Servidor Oficial de ⚒️ ➛ ⌜KRBot Premium⌟\n<a:fun:752105699462348860> Obrigado Pelo Apoio!`)
                        membro.send(nomeservidor)
    }
}