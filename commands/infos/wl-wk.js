const Discord = require('discord.js')

module.exports = {
    name: 'whitelist-bnl',
    aliases: ['wl-bnl'],
    run: (client, message, args) => {

        let iniciowl = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`🚀・Brasil New Life - Roleplay`)
        .setDescription(`Ola ${message.author},\n__Seja bem vindo ao nosso Sistema de WhiteList Exclusivo!\nPara iniciar a Whitelist digite aqui \`iniciar\`__`)
        .setFooter(` ⚬ KRBot ● Direitos Reservados ⚬`, client.user.displayAvatarURL({size:32}))
        .setTimestamp()

        let fail = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${message.guild.name}`)
        .setDescription('<a:x_:750188683893669909> WhiteList Cancelada\nVocê não Digitou `iniciar` <a:x_:750188683893669909>')

        let pg1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Qual seu Nome na Vida Real?')
        .setFooter('Sistema Whitelist Exclusivo | KRBot | By: Bzr#0001')

        let pg2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Qual sua Idade?')
        .setFooter('Sistema Whitelist Exclusivo | KRBot | By: Bzr#0001')

        let pg3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Qual seu Serial apresentado no Jogo?')
        .setFooter('Sistema Whitelist Exclusivo | KRBot | By: Bzr#0001')

        let pg4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Qual o seu objetivo em nossa Cidade?')
        .setFooter('Sistema Whitelist Exclusivo | KRBot | By: Bzr#0001')

        let pg5 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> A quanto tempo você joga Roleplay?')
        .setFooter('Sistema Whitelist Exclusivo | KRBot | By: Bzr#0001')

        let pg6 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Você terá responsabilidade e comprometimento com o nosso servidor?')
        .setFooter('Sistema Whitelist Exclusivo | KRBot | By: Bzr#0001')

        let pg7 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Oque é RDM? (Random Deathmatch)')
        .setFooter('Sistema Whitelist Exclusivo | KRBot | By: Bzr#0001')

        let pg8 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Oque é VDM? (Vehicle Deathmatch)')
        .setFooter('Sistema Whitelist Exclusivo | KRBot | By: Bzr#0001')

        let pg9 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Oque é PG? (Power Gaming)')
        .setFooter('Sistema Whitelist Exclusivo | KRBot | By: Bzr#0001')

        let pg10 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Oque é Meta Gaming?')
        .setFooter('Sistema Whitelist Exclusivo | KRBot | By: Bzr#0001')

        let pg11 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Oque é Dark RP?')
        .setFooter('Sistema Whitelist Exclusivo | KRBot | By: Bzr#0001')

        let pg12 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Oque é CL? (COMBAT LOGGIN)')
        .setFooter('Sistema Whitelist Exclusivo | KRBot | By: Bzr#0001')

        let pg13 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Oque é Valor a Vida?')
        .setFooter('Sistema Whitelist Exclusivo | KRBot | By: Bzr#0001')

        let pg14 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Oque é Revenge Kill?')
        .setFooter('Sistema Whitelist Exclusivo | KRBot | By: Bzr#0001')

        let pg15 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Você é abordado por 2 caras armados com as armas apontadas na sua cabeça, o que você faria?')
        .setFooter('Sistema Whitelist Exclusivo | KRBot | By: Bzr#0001')

        let pg16 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Você esta sendo abordado pela policia/bandido e eles não disseram que cortaram sua comunicação, o que você faria?')
        .setFooter('Sistema Whitelist Exclusivo | KRBot | By: Bzr#0001')

        let pg17 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Você esta assistindo um streamer e o mesmo esta planejando um roubo ao banco, o que você faria?')
        .setFooter('Sistema Whitelist Exclusivo | KRBot | By: Bzr#0001')

        let pg18 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Caso você presencie uma situação de ANTI-RP, o que você faz?')
        .setFooter('Sistema Whitelist Exclusivo | KRBot | By: Bzr#0001')

        let pg19 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Você está em uma safezone e alguém lhe assalta, o que você faria')
        .setFooter('Sistema Whitelist Exclusivo | KRBot | By: Bzr#0001')

        let sucesso = new Discord.MessageEmbed()
         .setTitle('Brasil New Life')
        .setDescription('<a:rjp_acertou:760651354212663307> Você enviou sua WhiteList com Sucesso!\n<a:rjp_fogo:760651470906589234> Agora so Aguardar seu Resultado!\n\n```OBS: EVITE FICAR FLOODANDO PARA SER APROVADO, APENAS ESPERE!```')
        .setTimestamp()

        message.author.send(iniciowl).then(z => {
            let zz = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
            .on('collect', c => {
                let inicii = c.content

                if(inicii !== 'iniciar') return message.author.send(fail)

        message.author.send(pg1).then(a => {
            let aa = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
            .on('collect', c => {
                let nome = c.content

                message.author.send(pg2).then(b => {
                    let bb = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                    .on('collect', c => {
                        let idade = c.content

                        message.author.send(pg3).then(c => {
                            let cc = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                            .on('collect', c => {
                                let serial = c.content

                                message.author.send(pg4).then(d => {
                                    let dd = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                    .on('collect', c => {
                                        let objetivo = c.content

                                        message.author.send(pg5).then(e => {
                                            let ee = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                            .on('collect', c => {
                                                let temporp = c.content

                                                message.author.send(pg6).then(f => {
                                                    let ff = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                    .on('collect', c => {
                                                        let responsa = c.content

                                                        message.author.send(pg7).then(g => {
                                                            let gg = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                            .on('collect', c => {
                                                                let rd = c.content

                                                                message.author.send(pg8).then(h => {
                                                                    let hh = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                    .on('collect', c => {
                                                                        let vd = c.content

                                                                        message.author.send(pg9).then(i => {
                                                                            let ii = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                            .on('collect', c => {
                                                                                let pg = c.content

                                                                                message.author.send(pg10).then(j => {
                                                                                    let jj = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                    .on('collect', c => {
                                                                                        let mg = c.content

                                                                                        message.author.send(pg11).then(k => {
                                                                                            let kk = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                            .on('collect', c => {
                                                                                                let drp = c.content

                                                                                                message.author.send(pg12).then(l => {
                                                                                                    let ll = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                    .on('collect', c => {
                                                                                                        let cl = c.content

                                                                                                        message.author.send(pg13).then(m => {
                                                                                                            let mm = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                            .on('collect', c => {
                                                                                                                let valorvida = c.content

                                                                                                                message.author.send(pg14).then(n => {
                                                                                                                    let nn = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                                    .on('collect', c => {
                                                                                                                        let rk = c.content

                                                                                                                        message.author.send(pg15).then(o => {
                                                                                                                            let oo = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                                            .on('collect', c => {
                                                                                                                                let abordado2 = c.content

                                                                                                                                message.author.send(pg16).then(p => {
                                                                                                                                    let pp = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                                                    .on('collect', c => {
                                                                                                                                        let abordado = c.content

                                                                                                                                        message.author.send(pg17).then(q => {
                                                                                                                                            let qq = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                                                            .on('collect', c => {
                                                                                                                                                let streamer = c.content

                                                                                                                                                message.author.send(pg18).then(r => {
                                                                                                                                                    let rr = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                                                                    .on('collect', c => {
                                                                                                                                                        let antrp = c.content

                                                                                                                                                        message.author.send(pg19).then(s => {
                                                                                                                                                            let ss = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                                                                            .on('collect', c => {
                                                                                                                                                                let safezone = c.content

                                                                                                                                                                message.author.send(sucesso)

                                                                                                                                                                let final = new Discord.MessageEmbed()
                                                                                                                                                                .setTitle(`<a:sino:750777682924666901> Nova WhiteList Recebida de ${message.author.username}`)
                                                                                                                                                                .setColor('RANDOM')
                                                                                                                                                                .addFields(
                                                                                                                                                                                                                { name: '<:file:760810039128358942> Qual é seu Nome na vida real', value: `> ${nome}`},
                                                                                                                                                                                                                { name: '<:file:760810039128358942> Qual a sua idade?', value: `> ${idade}`},
                                                                                                                                                                                                                { name: '<:file:760810039128358942> Qual é seu SERIAL?', value: `> ${serial}`},
                                                                                                                                                                                                                { name: '<:file:760810039128358942> Qual o seu objetivo no nosso servidor??', value: `> ${objetivo}`},
                                                                                                                                                                                                                { name: '<:file:760810039128358942> A quanto tempo você joga Roleplay??', value: `> ${temporp}`},
                                                                                                                                                                                                                { name: '<:file:760810039128358942> Você terá responsabilidade e comprometimento com o nosso servidor?', value: `> ${responsa}`},
                                                                                                                                                                                                                { name: '<:file:760810039128358942> Oque é RDM? (Random Deathmatch)', value: `> ${rd}`},
                                                                                                                                                                                                                { name: '<:file:760810039128358942> Oque é VDM? (Vehicle Deathmatch)', value: `> ${vd}`},
                                                                                                                                                                                                                { name: '<:file:760810039128358942> Oque é PG? (Power Gaming)', value: `> ${pg}`},
                                                                                                                                                                                                                { name: '<:file:760810039128358942> Oque é Meta Gaming?', value: `> ${mg}`},
                                                                                                                                                                                                                { name: '<:file:760810039128358942> Oque é Dark RP?', value: `> ${drp}`},
                                                                                                                                                                                                                { name: '<:file:760810039128358942> Oque é CL? (COMBAT LOGGING)', value: `> ${cl}`},
                                                                                                                                                                                                                { name: '<:file:760810039128358942> Oque é Valor a Vida?', value: `> ${valorvida}`},
                                                                                                                                                                                                                { name: '<:file:760810039128358942> Oque é Revenge Kill?', value: `> ${rk}`},
                                                                                                                                                                                                                { name: '<:file:760810039128358942> Você é abordado por 2 caras armados com as armas apontadas na sua cabeça, o que você faria?', value: `> ${abordado2}`},
                                                                                                                                                                                                                { name: '<:file:760810039128358942> Você esta sendo abordado pela policia/bandido e eles não disseram que cortaram sua comunicação, o que você faria?', value: `> ${abordado}`},
                                                                                                                                                                                                                { name: '<:file:760810039128358942> Você esta assistindo um streamer e o mesmo esta planejando um roubo ao banco, o que você faria?', value: `> ${streamer}`},
                                                                                                                                                                                                                { name: '<:file:760810039128358942> Caso você presencie uma situação de ANTI-RP, o que você faz?', value: `> ${antrp}`},
                                                                                                                                                                                                                { name: '<:file:760810039128358942> Você está em uma safezone e alguém lhe assalta, o que você faria?', value: `> ${safezone}`},
                                                                                                                                                                )
                                                                                                                                                                message.guild.channels.cache.get('774472937826156544').send(final)
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