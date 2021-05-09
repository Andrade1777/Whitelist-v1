const pagination = require('discord.js-pagination')

const Discord = require('discord.js')

module.exports = {
    name: 'comandos',
    aliases: ['ajuda', 'help', 'commands', 'comando'],
    run: async (client, message, args) => {

        const comandosgeral = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setTitle('<a:sino:750777682924666901> | Lista de Comandos por Categorias:')
        .setDescription('Reagir de acordo com oque preocura!\n\n🔱 - Administrativos\n\n<:configuracoes:752105341721903105> - Configuração\n\n<a:fun:752105699462348860> | Diversão\n\n<:money:750785141487566868> - Donaters\n\n<a:kk:750188345287508080> - Me Convide!')
        .setTimestamp()
        .setFooter(`Lista comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({size: 32}))

        const Administrativoscmds = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setTitle('<:mod:757304937934749767> Comandos Administrativos')
        .setDescription('Abaixo você consegue ver Todos os Comandos Administrativos do KRBot')
        .addFields(
            { name: "!banir @membro motivo", value: "`Comando utilizado para Banir membros de seu Servidor!`" },
            { name: "!kick @membro motivo", value: "`Comando utilizado para Kickar membros de seu Servidor!`"},
            { name: "!setadv @membro motivo", value: "`Comando utilizado para Setar Advertencias em Membros!`"},
            { name: "!radv @membro motivo", value: "`Comando utilizado para Retirar Advertencias de Membros!`"},
            { name: "!advs @membro", value: "`Comando utilizado para Ver todas Advertencias de um Membro!`"},
            { name: "!mute @membro motivo", value: "`Comando utilizado para Silenciar/Mutar Membros!`"},
            { name: "!unmute @membro ", value: "`Comando utilizado para Desmutar um Membro Silenciado!`"},
            { name: "!anuncio #canal conteudo", value: "`Comando utilizado para enviar Anúncios no canal Mencionado!`"}
        )
        .setTimestamp()
        .setFooter(` ⚬ KRBot ● Direitos Reservados ⚬`, client.user.displayAvatarURL({size:32}))

        const configuracoescmd = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setTitle('<:configuracoes:752105341721903105> Comandos Configurações')
        .setDescription('Abaixo você consegue ver Todos os Comandos de Configurações do KRBot')
        .addFields(
            { name: '!setarcanalbanimentos #canal', value: '`Comando utilizado para Setar o Canal onde anúncia um Membro Banido!`'},
            { name: '!setarcanaltwitter #canal', value: '`Comando utilizado para Setar o Canal do Twitter!`' },
            { name: '!setarcanalavaliacao #canal', value: '`Comando utilizado para Setar o Canal de Avaliações de Administradores!`' },
            { name: '!setarcanaldenuncia #canal', value: '`Comando utilizado para Setar o Canal de Enviar Denúncias!`' },
            { name: '!setarcanaldenunciasrecebidas #canal', value: '`Comando utilizado para Setar o Canal de Denúncias Recebidas!`' },
            { name: '!setarcanaldenunciabug #canal', value: '`Comando utilizado para Setar o Canal de Denúncias de Bugs!`' },
            { name: '!setarcanaldenunciabugrecebidas #canal', value: '`Comando utilizado para Setar o Canal de Denúncias de Bugs Recebidas!`' },
            { name: '!setarcanalolx #canal', value: '`Comando utilizado para Setar o Canal da OLX!`' },
            { name: '!setarcanalilegal #canal', value: '`Comando utilizado para Setar o Canal Anônimo(Ilegal)!`' },
            { name: '!embedtwt', value: '`Utilize este comando no canal que Você setou como Twitter!`' },
            { name: '!embedolx', value: '`Utilize este comando no canal que Você setou como OLX!`' },
            { name: '!embedil', value: '`Utilize este comando no canal que Você setou como Ilegal(Anônimo)!`' },
            { name: '!embeddenuncia', value: '`Utilize este comando no canal que Você setou como Denúncias!`' },
            { name: '!embedbug', value: '`Utilize este comando no canal que Você setou como Denúncias de Bugs!`' },
            { name: '!embedavaliar', value: '`Utilize este comando no canal que Você setou como Avaliação de Administradores!`' },
        )
        .setTimestamp()
        .setFooter(` ⚬ KRBot ● Direitos Reservados ⚬`, client.user.displayAvatarURL({size:32}))

        const pages = [
            comandosgeral,
            Administrativoscmds,
            configuracoescmd
        ]

        const emojiList = ["767728436659093525", "767728537578504212"]

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}