const Discord = require('discord.js')

module.exports = {
    name: 'whitelist',
    aliases: ['wl'],
    run: (client, message, args) => {

        let membro = message.author

        let perg1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Qual o nome e sobrenome de seu personagem?')

        let perg2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Ok, agora nos informe seu ID')

        let perg3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Oque Significa Amor a Vida?')

        let perg4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Oque Significa RDM?')

        let perg5 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Oque Significa VDM?')
        
        let perg6 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Oque é Combat-Logging?')

        let perg7 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Oque é Meta-Gaming?')

        let perg8 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Se um bandido apontasse a arma na sua cabeça para te assaltar, o que você faria?')

        let perg9 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Oque é Power-Gaming?')

        let perg10 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Caso você presencie uma situação de ANTI-RP, o que você faria?')
        
        let perg11 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Você está em uma safezone e alguém lhe assalta, o que você faria?')

        let perg12 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Você está andando pela rua. De repente, um bandido te assalta, você reage e é morto o quê você faria após isso?')

        let perg13 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Quais são as Safes-Zones da cidade?')

        let perg14 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Em qual condição é permitido reagir a um assalto?')

        message.delete()
        message.author.send(perg1).then(a => {
            let cp = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
            .on('collect', c => {
                const nome = c.content

                message.author.send(perg2).then(a => {
                    let p = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                    .on('collect', c => {
                        const id = c.content

                        message.author.send(perg3).then(c => {
                            let o = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                            .on('collect', c => {
                                const amorvida = c.content

                                message.author.send(perg4).then(d => {
                                    let q = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                    .on('collect', c => {
                                        const rdm  = c.content

                                        message.author.send(perg5).then(e => {
                                            let r = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                            .on('collect', c =>  {
                                                const vdm = c.content

                                                message.author.send(perg6).then(f =>  {
                                                    let s = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                    .on('collect', c => {
                                                        const cl = c.content

                                                        message.author.send(perg7).then(g => {
                                                            let t = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                            .on('collect', c => {
                                                                const mg = c.content

                                                                message.author.send(perg8).then(h => {
                                                                    let u  =  message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                    .on('collect', c => {
                                                                        const band = c.content

                                                                        message.author.send(perg9).then(i  => {
                                                                            let v = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                            .on('collect', c  => {
                                                                                const pg = c.content

                                                                                message.author.send(perg10).then(j => {
                                                                                    let w = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                    .on('collect', c => {
                                                                                        const antrp = c.content

                                                                                        message.author.send(perg11).then(k => {
                                                                                            let xx  = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                            .on('collect', c => {
                                                                                                const safea = c.content

                                                                                                message.author.send(perg12).then(l => {
                                                                                                    let y = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                    .on('collect', c => {
                                                                                                        const morto = c.content

                                                                                                        message.author.send(perg13).then(r => {
                                                                                                            let yy = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                            .on('collect', c => {
                                                                                                                const safessv = c.content

                                                                                                                message.author.send(perg14).then(r => {
                                                                                                                    let yyy = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                                    .on('collect', c => {
                                                                                                                        const reagir = c.content

                                                                                                                        let enviado = new Discord.MessageEmbed()
                                                                                                                        .setColor('RANDOM')
                                                                                                                        .setTitle(`<a:kk:750188345287508080> | Ola ${message.author.username}, sua whitelist foi enviada com sucesso!`)
                                                                                                                        .setDescription('<a:certo:750188046103609435> | Agora so aguardar um Administrador verificar sua whitelist!')
                                                                                                                        .setFooter('Sistema Whitelist Exclusivo | KRBot | By: Bzr#0001')
                                                                                                                        message.author.send(enviado)

                                                                                                                        let whitelist = new Discord.MessageEmbed()
                                                                                                                        .setColor('RANDOM')
                                                                                                                        .setTitle(`<a:sino:750777682924666901> | Nova WhiteList de ${message.author.username}`)
                                                                                                                        .addField('<a:seta:750779960104321109> | Nome do Personagem:', nome)
                                                                                                                        .addField('<a:seta:750779960104321109> | ID:', id)
                                                                                                                        .addField('<a:seta:750779960104321109> | O que significa Amor a Vida:', amorvida)
                                                                                                                        .addField('<a:seta:750779960104321109> | O que significa RDM:', rdm)
                                                                                                                        .addField('<a:seta:750779960104321109> | O que significa VDM:', vdm)
                                                                                                                        .addField('<a:seta:750779960104321109> | O que significa Combat-Logging:', cl)
                                                                                                                        .addField('<a:seta:750779960104321109> | O que significa Meta-Gaming', mg)
                                                                                                                        .addField('<a:seta:750779960104321109> | Se um bandido apontasse a arma na sua cabeça para te assaltar, o que você faria:', band)
                                                                                                                        .addField('<a:seta:750779960104321109> | Oque e Power-Gaming:', pg)
                                                                                                                        .addField('<a:seta:750779960104321109> | Caso você presencie uma situação de ANTI-RP, o que você faria:', antrp)
                                                                                                                        .addField('<a:seta:750779960104321109> | Você está em uma safezone e alguém lhe assalta, o que você faria:', safea)
                                                                                                                        .addField('<a:seta:750779960104321109> | Você está andando pela rua. De repente, um bandido te assalta, você reage e é morto o quê você faria após isso:', morto)
                                                                                                                        .addField('<a:seta:750779960104321109> | Quais são as Safes-Zones da cidade:', safessv)
                                                                                                                        .addField('<a:seta:750779960104321109> | Em qual condição é permitido reagir a um assalto:', reagir)
                                                                                                                        .setTimestamp()
                                                                                                                        .setFooter('Sistema WhiteList Exclusivo | KRBot')
                                                                                                                        message.guild.channels.cache.get('752092601636618353').send(whitelist).then(msg => {
                                                                                                                            msg.react('750188046103609435').then(r => {
                                                                                                                                msg.react('750188046103609435').then(r => {

                                                                                                                                    const aprovarFilter = (reaction, user) => reaction.emoji.name === '750188046103609435';
                                                                                                                                        const reprovarFilter = (reaction, user) => reaction.emoji.name === '750188046103609435';

                                                                                                                                        const aprovar = message.createReactionCollector(aprovarFilter);
                                                                                                                                            const reprovar = message.createReactionCollector(reprovarFilter);

                                                                                                                                                aprovar.on('collect', r2 => {

                                                                                                                                                    const aprovadoss = new Discord.MessageEmbed()
                                                                                                                                                    .setColor('GREEN')
                                                                                                                                                    .setTitle('<:logok:756221635001974897> | KRBot')
                                                                                                                                                    .addField('<a:certo:750188046103609435> Novo Usuario Aprovado!\nUsuario:', message.author)
                                                                                                                                                    .addField('<a:certo:750188046103609435> | Personagem', nome)
                                                                                                                                                    .addField('<a:certo:750188046103609435> | ID No Jogo', id)
                                                                                                                                                    message.guild.channels.cache.get('748742403904635020').send(aprovadoss)

                                                                                                                                                    membro.send('você foi aprovado!')
                                                                                                                                                })
                                                                                                                                
                                                                                                                                })
                                                                                                                            })
                                                                                                                        })   
                                                                                                                    })
                                                                                                                })
                                                                                                            })
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
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