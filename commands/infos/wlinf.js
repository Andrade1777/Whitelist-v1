const Discord = require('discord.js')

module.exports  = {
    name: 'whitelist-infinity',
    aliases: [],
    run: (client, message, args) =>  {

        message.delete()

        let membro = message.author

        let pv1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080>  Digite Qual seu Nome!')
        .setFooter('Sistema Whitelist | Infinity Gaming | By: Bzr#0001')

        let pv2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080>  Qual seu Serial?')
        .setFooter('Sistema Whitelist | Infinity Gaming | By: Bzr#0001')

        let pv3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> O que significa Amor a Vida?')
        .setFooter('Sistema Whitelist | Infinity Gaming | By: Bzr#0001')

        let pv4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> O que significa RDM')
        .setFooter('Sistema Whitelist | Infinity Gaming | By: Bzr#0001')

        let pv5 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> O que significa VDM')
        .setFooter('Sistema Whitelist | Infinity Gaming | By: Bzr#0001')

        let pv6 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> O que significa  ANT-RolePlay')
        .setFooter('Sistema Whitelist | Infinity Gaming | By: Bzr#0001')
        
        let pv7 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> O que significa Combat-Loggin')
        .setFooter('Sistema Whitelist | Infinity Gaming | By: Bzr#0001')

        let pv8 =  new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> O que significa Meta-Gaming')
        .setFooter('Sistema Whitelist | Infinity Gaming | By: Bzr#0001')

        let pv9 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Caso você presencie um ato de Anti-RP, oque faria?')
        .setFooter('Sistema Whitelist | Infinity Gaming | By: Bzr#0001')

        let pv10 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Durante uma perseguição policial você perde o controle do veículo e capota, o que você faria em seguida?')
        .setFooter('Sistema Whitelist | Infinity Gaming | By: Bzr#0001')

        let pv11 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Caso alguém apontasse uma arma em você (você estando dentro do veículo) o que Faria?')
        .setFooter('Sistema Whitelist | Infinity Gaming | By: Bzr#0001')

        let pv12 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Em qual condição e permitido reagir a um assalto')
        .setFooter('Sistema Whitelist | Infinity Gaming | By: Bzr#0001')

        let pv13 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> O que e dark rp?')
        .setFooter('Sistema Whitelist | Infinity Gaming | By: Bzr#0001')

        let pv14 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Cite 2 regras gerais de rp')
        .setFooter('Sistema Whitelist | Infinity Gaming | By: Bzr#0001')

        message.author.send(pv1).then(a => {
            let aa = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
            .on('collect', c => {
                const nome = c.content

                message.author.send(pv2).then(b => {
                    let bb = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                    .on('collect', c => {
                        const serial = c.content

                        message.author.send(pv3).then(c => {
                            let cc = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                            .on('collect', c => {
                                const amoravida = c.content

                                message.author.send(pv4).then(d => {
                                    let dd = message.author.dmChannel.createMessageCollector(x  => x.author.id === message.author.id, {max:1})
                                    .on('collect',  c => {
                                        const rdm = c.content

                                        message.author.send(pv5).then(e => {
                                            let ee = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                            .on('collect', c => {
                                                const vdm = c.content

                                                message.author.send(pv6).then(f => {
                                                    let ff = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                    .on('collect', c => {
                                                        const antrp = c.content

                                                        message.author.send(pv7).then(g => {
                                                            let gg =  message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                            .on('collect', c => {
                                                                const cl = c.content

                                                                message.author.send(pv8).then(h => {
                                                                    let hh = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                    .on('collect', c => {
                                                                        const mg = c.content

                                                                        message.author.send(pv9).then(i => {
                                                                            let ii = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                            .on('collect', c => {
                                                                                const atoantrp = c.content

                                                                                message.author.send(pv10).then(j => {
                                                                                    let jj = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                    .on('collect', c => {
                                                                                        const capotouocorsa = c.content

                                                                                        message.author.send(pv11).then(k => {
                                                                                            let kk = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                            .on('collect', c => {
                                                                                                const armanoveic = c.content

                                                                                                message.author.send(pv12).then(l => {
                                                                                                    let ll = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                    .on('collect', c => {
                                                                                                        const reagiraumassalto = c.content

                                                                                                        message.author.send(pv13).then(m => {
                                                                                                            let mm = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                            .on('collect', c => {
                                                                                                                const darkrp = c.content

                                                                                                                message.author.send(pv14).then(n => {
                                                                                                                    let nn = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                                    .on('collect', c => {
                                                                                                                        const regras = c.content

                                                                                                                        let sucesso = new Discord.MessageEmbed()
                                                                                                                        .setColor('RANDOM')
                                                                                                                        .setTitle('Infinity Gaming')
                                                                                                                        .setDescription('<a:rjp_acertou:760651354212663307> Você enviou sua WhiteList com Sucesso!\n<a:rjp_fogo:760651470906589234> Agora so Aguardar seu Resultado!\n\n```OBS: EVITE FICAR FLOODANDO PARA SER APROVADO, APENAS ESPERE```')
                                                                                                                        .setTimestamp()
                                                                                                                        message.author.send(sucesso)

                                                                                                                        let final = new Discord.MessageEmbed()
                                                                                                                        .setColor('RANDOM')
                                                                                                                        .setTitle(`<a:kk:750188345287508080> Nova WhiteList recebida de ${message.author.username}`)
                                                                                                                        .addFields(
                                                                                                                            { name: '<:file:760810039128358942> Qual seu Nome?', value: `> ${nome}`},
                                                                                                                            { name: '<:file:760810039128358942> Qual seu Serial?', value: `> ${serial}`},
                                                                                                                            { name: '<:file:760810039128358942> O que significa Amor a Vida?', value: `> ${amoravida}`},
                                                                                                                            { name: '<:file:760810039128358942> O que significa RDM?', value: `> ${rdm}`},
                                                                                                                            { name: '<:file:760810039128358942> O que significa VDM?', value: `> ${vdm}`},
                                                                                                                            { name: '<:file:760810039128358942> O que significa Ant-RP?', value: `> ${antrp}`},
                                                                                                                            { name: '<:file:760810039128358942> O que significa Combat-Loggin?', value: `> ${cl}`},
                                                                                                                            { name: '<:file:760810039128358942> O que significa Meta-Gaming?', value: `> ${mg}`},
                                                                                                                            { name: '<:file:760810039128358942> Caso presencie um Anti Roleplay, oque faria?', value: `> ${atoantrp}`},
                                                                                                                            { name: '<:file:760810039128358942> Durante uma perseguição policial você perde o controle do veículo e capota, o que você faria em seguida?', value: `> ${capotouocorsa}`},
                                                                                                                            { name: '<:file:760810039128358942> Caso alguém apontasse uma arma em você (você estando dentro do veículo) o que Faria?', value: `> ${armanoveic}`},
                                                                                                                            { name: '<:file:760810039128358942> Em qual condição e permitido reagir a um assalto?', value: `> ${reagiraumassalto}`},
                                                                                                                            { name: '<:file:760810039128358942> O que e dark rp?', value: `> ${darkrp}`},
                                                                                                                            { name: '<:file:760810039128358942> Cite 2 regras gerais de rp', value: `> ${regras}`},
                                                                                                                        )
                                                                                                                        .setTimestamp()
                                                                                                                        message.guild.channels.cache.get('763855174132826184').send(final)
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