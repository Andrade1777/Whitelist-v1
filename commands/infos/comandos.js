const Discord = require('discord.js')

module.exports = {
    name: 'comandos',
    aliases: [],
    run: async (client, message, args) => {
        
        const comandos = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setTitle('<a:sino:750777682924666901> | Lista de Comandos por Categorias:')
        .setDescription('Reagir de acordo com oque preocura!\n\n🔱 - Administrativos\n\n<:configuracoes:752105341721903105> - Configuração\n\n<a:fun:752105699462348860> | Diversão\n\n<:money:750785141487566868> - Donaters\n\n<a:kk:750188345287508080> - Me Convide!')
        .setTimestamp()
        .setFooter(`Lista comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({size: 32}))

        message.channel.send(comandos).then(message => {
            message.react('🔱').then(r => {
                message.react('📚').then(r => {
                    message.react('🎉').then(r => {
                        message.react('💰').then(r => {
                            message.react('📌').then(r => {
                            })
                        })
                    })
                })
            })

            const admFilter = (reaction, user) => reaction.emoji === '🔱' && user.id === message.author.id;
                    const configFilter = (reaction, user) => reaction.emoji === '📚' && user.id === message.author.id;
                const funFilter = (reaction, user) => reaction.emoji === '🎉' && user.id === message.author.id;
                    const donaterFilter = (reaction, user) => reaction.emoji === '💰' && user.id === message.author.id;
            const convideFilter = (reaction, user) => reaction.emoji === '📌' && user.id === message.author.id;

            const adm = message.channel.createMessageCollector(admFilter);
                    const config = message.channel.createMessageCollector(configFilter);
                const fun = message.channel.createMessageCollector(funFilter);
                    const donater = message.channel.createMessageCollector(donaterFilter);
            const convide = message.channel.createMessageCollector(convideFilter);

            adm.on('collect', r2 => {

                comandos.setTitle('Lista de Comandos Administração')
                comandos.setDescription("!ban @usuario motivo\nbani o usuario mencionado com um motivo\nExemplo: !ban @membro Desacatou o Servidor!\n\n!adv @usuario motivo\nda uma advertencia para o usuario marcada com um motivo\nExemplo: !adv @membro Fez Merda!\n\n!radv @usuario motivo\nremove as advertencias do usuario marcado com um motivo\nExemplo: !radv @membro Pediu desculpas!\n\n!limpar total mensagens\nlimpar o total de mensagens de um canal\nExemplo: !limpar 99")
                message.edit(comandos)


            })

            config.on('collect', r2 => {

                comandos.setTitle('Lista de Comandos Administração')
                comandos.setDescription("!ban @usuario motivo\nbani o usuario mencionado com um motivo\nExemplo: !ban @membro Desacatou o Servidor!\n\n!adv @usuario motivo\nda uma advertencia para o usuario marcada com um motivo\nExemplo: !adv @membro Fez Merda!\n\n!radv @usuario motivo\nremove as advertencias do usuario marcado com um motivo\nExemplo: !radv @membro Pediu desculpas!\n\n!limpar total mensagens\nlimpar o total de mensagens de um canal\nExemplo: !limpar 99")
                message.edit(comandos)

            })

            fun.on('collect', r2 => {

                comandos.setTitle('Lista de Comandos Administração')
                comandos.setDescription("!ban @usuario motivo\nbani o usuario mencionado com um motivo\nExemplo: !ban @membro Desacatou o Servidor!\n\n!adv @usuario motivo\nda uma advertencia para o usuario marcada com um motivo\nExemplo: !adv @membro Fez Merda!\n\n!radv @usuario motivo\nremove as advertencias do usuario marcado com um motivo\nExemplo: !radv @membro Pediu desculpas!\n\n!limpar total mensagens\nlimpar o total de mensagens de um canal\nExemplo: !limpar 99")
                message.edit(comandos)

            })

            donater.on('collect', r2 => {

                comandos.setTitle('Lista de Comandos Administração')
                comandos.setDescription("!ban @usuario motivo\nbani o usuario mencionado com um motivo\nExemplo: !ban @membro Desacatou o Servidor!\n\n!adv @usuario motivo\nda uma advertencia para o usuario marcada com um motivo\nExemplo: !adv @membro Fez Merda!\n\n!radv @usuario motivo\nremove as advertencias do usuario marcado com um motivo\nExemplo: !radv @membro Pediu desculpas!\n\n!limpar total mensagens\nlimpar o total de mensagens de um canal\nExemplo: !limpar 99")
                message.edit(comandos)


            })

            convide.on('collect', e2 => {

                comandos.setTitle('Lista de Comandos Administração')
                comandos.setDescription("!ban @usuario motivo\nbani o usuario mencionado com um motivo\nExemplo: !ban @membro Desacatou o Servidor!\n\n!adv @usuario motivo\nda uma advertencia para o usuario marcada com um motivo\nExemplo: !adv @membro Fez Merda!\n\n!radv @usuario motivo\nremove as advertencias do usuario marcado com um motivo\nExemplo: !radv @membro Pediu desculpas!\n\n!limpar total mensagens\nlimpar o total de mensagens de um canal\nExemplo: !limpar 99")
                message.edit(comandos)

            })
        })
    }
}