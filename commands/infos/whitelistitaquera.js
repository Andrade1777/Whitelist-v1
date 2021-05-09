const Discord = require('discord.js')

module.exports = {
    name: 'whitelist-itaquera',
    aliases: ['wl-it'],
    run: async (client, message, args) => {

        let inicio = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${message.guild.name}`)
        .setDescription(`Ola ${message.author},\n__Seja bem vindo ao nosso Sistema de WhiteList Exclusivo!\nPara iniciar a Whitelist digite aqui \`iniciar\`__`)
        .setImage('https://i.imgur.com/XMC0hAw.gif')
        .setFooter(` ⚬ KRBot ● Direitos Reservados ⚬`, client.user.displayAvatarURL({size:32}))
        .setTimestamp()

        let pg1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Digite a Historia do Seu Personagem!')
        .setFooter('⚬ Sistema By: Bzr#0001 ● Direitos Reservados ⚬')

        let pg0 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Digite o Nome e Sobrenome de Seu Personagem!')
        .setFooter('⚬ Sistema By: Bzr#0001 ● Direitos Reservados ⚬')

        let pg2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Digite o Seu ID Na Cidade!')
        .setFooter('⚬ Sistema By: Bzr#0001 ● Direitos Reservados ⚬')

        let pg3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Digite o Significado de RDM')
        .setFooter('⚬ Sistema By: Bzr#0001 ● Direitos Reservados ⚬')

        let pg4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Dê um Exemplo de RDM!')
        .setFooter('⚬ Sistema By: Bzr#0001 ● Direitos Reservados ⚬')

        let pg5 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Digite o Significado de VDM')
        .setFooter('⚬ Sistema By: Bzr#0001 ● Direitos Reservados ⚬')

        let pg6 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Dê um Exemplo de VDM!')
        .setFooter('⚬ Sistema By: Bzr#0001 ● Direitos Reservados ⚬')
        
        let pg7 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Digite o Significado de Power-Gaming!')
        .setFooter('⚬ Sistema By: Bzr#0001 ● Direitos Reservados ⚬')

        let pg8 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Dê um Exemplo de Power-Gaming!')
        .setFooter('⚬ Sistema By: Bzr#0001 ● Direitos Reservados ⚬')

        let pg9 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Digite o Significado de Meta-Gaming!')
        .setFooter('⚬ Sistema By: Bzr#0001 ● Direitos Reservados ⚬')

        let pg10 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Digite o Significado de Combat-Logging!')
        .setFooter('⚬ Sistema By: Bzr#0001 ● Direitos Reservados ⚬')
        
        let pg11 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Digite o Significado de Dark-RP!')
        .setFooter('⚬ Sistema By: Bzr#0001 ● Direitos Reservados ⚬')

        let pg12 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Digite o que é Valor a Vida para Você?')
        .setFooter('⚬ Sistema By: Bzr#0001 ● Direitos Reservados ⚬')
        
        let pg13 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Se você está sozinho pelas ruas da cidade e é parado por uma facção e tem 3 pessoas apontando uma arma em sua cabeça, o que você faz?')
        .setFooter('⚬ Sistema By: Bzr#0001 ● Direitos Reservados ⚬')

        let pg14 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> Se você é abordado pela PM e cortam sua comunicação, e começam a fazer ANTI-RP com você, o que você faz?')
        .setFooter('⚬ Sistema By: Bzr#0001 ● Direitos Reservados ⚬')

        message.author.send(inicio).then(z => {
            let zz = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
            .on('collect', c => {
                const inii = c.content

                if(inii !== 'iniciar') return message.author.send(fail)

        message.author.send(pg1).then(a => {
            let aa = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
            .on('collect', c => {
                const historia = c.content

                message.author.send(pg0).then(b => {
                    let bb = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                    .on('collect', c => {
                        const nome = c.content

                        message.author.send(pg2).then(c => {
                            let cc = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                            .on('collect', c => {
                                const id = c.content

                                message.author.send(pg3).then(d => {
                                    let dd = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                    .on('collect', c => {
                                        const rdm = c.content

                                        message.author.send(pg4).then(e => {
                                            let ee = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                            .on('collect', c => {
                                                const exemplosrdm = c.content

                                                message.author.send(pg5).then(f => {
                                                    let ff = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                    .on('collect', c => {
                                                        const vdm = c.content

                                                        message.author.send(pg6).then(g => {
                                                            let gg = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                            .on('collect', c => {
                                                                const vdmexemplos = c.content

                                                                message.author.send(pg7).then(h => {
                                                                    let hh = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                    .on('collect', c => {
                                                                        const powergaming = c.content

                                                                        message.author.send(pg8).then(i => {
                                                                            let ii = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                            .on('collect', c => {
                                                                                const exemplopg = c.content

                                                                                message.author.send(pg9).then(j => {
                                                                                    let jj = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                    .on('collect', c => {
                                                                                        const metagaming = c.content

                                                                                        message.author.send(pg10).then(k => {
                                                                                            let kk = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                            .on('collect', c => {
                                                                                                const combatlog = c.content

                                                                                                message.author.send(pg11).then(l => {
                                                                                                    let ll = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                    .on('collect', c => {
                                                                                                        const darkrp = c.content

                                                                                                        message.author.send(pg12).then(m => {
                                                                                                            let mm = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                            .on('collect', c => {
                                                                                                                const valoravida = c.content

                                                                                                                message.author.send(pg13).then(n => {
                                                                                                                    let nn = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                                    .on('collect', c => {
                                                                                                                        const facs =  c.content

                                                                                                                        message.author.send(pg14).then(o => {
                                                                                                                            let oo = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                                            .on('collect', c => {
                                                                                                                                const abordado = c.content

                                                                                                                                let sucesso = new Discord.MessageEmbed()
                                                                                                                                    .setTitle(`${message.guild.name}`)
                                                                                                                                    .setDescription('<a:certo:750188046103609435> Você enviou sua WhiteList com Sucesso!\n<a:kk:750188345287508080> Agora so Aguardar seu Resultado!\n\n```OBS: EVITE FICAR FLOODANDO PARA SER APROVADO, APENAS ESPERE```')
                                                                                                                                    .setTimestamp()
                                                                                                                                    message.author.send(sucesso)

                                                                                                                                    let final = new Discord.MessageEmbed()
                                                                                                                                    .setColor('RANDOM')
                                                                                                                                    .setTitle(`<a:kk:750188345287508080> Nova WhiteList recebida de ${message.author.username}`)
                                                                                                                                    .addFields(
                                                                                                                            { name: '<:file:760810039128358942> Qual seu Nome?', value: `> \`${nome}\``},
                                                                                                                            { name: '<:file:760810039128358942> Qual seu ID?', value: `> \`${id}\``},
                                                                                                                            { name: '<:file:760810039128358942> O que significa RDM?', value: `> \`${rdm}\``},
                                                                                                                            { name: '<:file:760810039128358942> Exemplo RDM:', value: `> \`${exemplosrdm}\``},
                                                                                                                            { name: '<:file:760810039128358942> O que significa VDM?', value: `> \`${vdm}\``},
                                                                                                                            { name: '<:file:760810039128358942> Exemplos VDM:', value: `> \`${vdmexemplos}\``},
                                                                                                                            { name: '<:file:760810039128358942> O que significa Power-Gaming', value: `> \`${powergaming}\``},
                                                                                                                            { name: '<:file:760810039128358942> O que significa Meta-Gaming?', value: `> \`${metagaming}\``},
                                                                                                                            { name: '<:file:760810039128358942> O que significa Combat-Logging?', value: `> \`${combatlog}\``},
                                                                                                                            { name: '<:file:760810039128358942> O que significa Dark-RP?', value: `> \`${darkrp}\``},
                                                                                                                            { name: '<:file:760810039128358942> O que significa Valor a Vida?', value: `> \`${valoravida}\``},
                                                                                                                            { name: '<:file:760810039128358942> Se você está sozinho pelas ruas da cidade e é parado por uma facção e tem 3 pessoas apontando uma arma em sua cabeça, o que você faz?', value: `> \`${facs}\``},
                                                                                                                            { name: '<:file:760810039128358942> Se você é abordado pela PM e cortam sua comunicação, e começam a fazer ANTI-RP com você, o que você faz?', value: `> \`${abordado}\``},
                                                                                                                            { name: '<:file:760810039128358942> Historia do Personagem:', value: `> \`${historia}\``},
                                                                                                                        )
                                                                                                                        .setImage('https://i.imgur.com/inFJPtq.gif')
                                                                                                                        .setTimestamp()
                                                                                                                        message.guild.channels.cache.get('771149870076788757').send(final)

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