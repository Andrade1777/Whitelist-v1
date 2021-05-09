const Discord = require('discord.js')

module.exports = {
    name: 'whitelist-bmt',
    aliases: ['wl-bmt'],
    run: (client, message, args) => {

        message.delete()

        let nomes = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Digite o Nome e Sobrenome de seu Personagem')
        .setFooter('Sistema WhiteList | KRBot | By: Bzr#0001')

        let serial = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Digite seu Serial')
        .setFooter('Sistema WhiteList | KRBot | By: Bzr#0001')

        let pv1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Digite o significado de VDM')
        .setFooter('Sistema WhiteList | KRBot | By: Bzr#0001')

        let pv2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Digite o significado de Power-Gaming')
        .setFooter('Sistema WhiteList | KRBot | By: Bzr#0001')

        let pv3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Digite o significado de Meta-Gaming')
        .setFooter('Sistema WhiteList | KRBot | By: Bzr#0001')

        let pv4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Digite o significado de RDM')
        .setFooter('Sistema WhiteList | KRBot | By: Bzr#0001')

        let pv5 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Digite o significado de Combat-Loggin')
        .setFooter('Sistema WhiteList | KRBot | By: Bzr#0001')

        let pv6 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Digite o significado de Amor a Vida')
        .setFooter('Sistema WhiteList | KRBot | By: Bzr#0001')

        let pv7 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Quais são as Areas-Safes da Cidade?')
        .setFooter('Sistema WhiteList | KRBot | By: Bzr#0001')

        let pv8 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Se você esta sendo assaltado por duas pessoas, como você reagiria?')
        .setFooter('Sistema WhiteList | KRBot | By: Bzr#0001')

        let pv9 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Qual minímo de Policiais para efetuar Assaltos?')
        .setFooter('Sistema WhiteList | KRBot | By: Bzr#0001')
        
        let pv10 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Subir lugares que na vida real é quase impossível (Lugares Ingrimes) é considerado roleplay?')
        .setFooter('Sistema WhiteList | KRBot | By: Bzr#0001')

        let pv11 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Em uma situação no qual você está fungindo da policia e durante uma breve distração, você acaba capotando o veiculo, o que é o certo a se fazer?')
        .setFooter('Sistema WhiteList | KRBot | By: Bzr#0001')

        let pv12 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Você está sendo assaltado com 2 armas com calibre de 7.62 apontadas pra sua cabeça, por tensão em perder seu dinheiro, você tenta revidar contra os bandidos, qual tipo de infração você está comentendo e porque?')
        .setFooter('Sistema WhiteList | KRBot | By: Bzr#0001')

        let pv13 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Em um assalto um bandido causa um dano em sua vida assim o matando, ao sair do hospital você por Vingança pode ir atrás dele e revidar o ato?')
        .setFooter('Sistema WhiteList | KRBot | By: Bzr#0001')

        let pv14 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Você está presenciando um assalto, uma pessoa sendo assaltada por 2 indivíduos com armas de pequeno porte, você estando armado pode evitar a ação?')
        .setFooter('Sistema WhiteList | KRBot | By: Bzr#0001')

        message.author.send(nomes).then(z => {
            let zz = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
            .on('collect', c => {
                const nome = c.content

                message.author.send(serial).then(x => {
                    let xx = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                    .on('collect', c => {
                        const serial = c.content

        message.author.send(pv1).then(a => {
            let aa = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
            .on('collect', c => {
                const pv11 = c.content

                message.author.send(pv2).then(b => {
                    let bb = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                    .on('collect', c => {
                        const pv22 = c.content

                        message.author.send(pv3).then(c => {
                            let cc = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                            .on('collect', c => {
                                const pv33 = c.content

                                message.author.send(pv4).then(d => {
                                    let dd = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                    .on('collect', c => {
                                        const pv44 = c.content
                                    
                                        message.author.send(pv5).then(e => {
                                            let ee = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                            .on('collect', c => {
                                                const pv55 = c.content
                                          
                                                message.author.send(pv6).then(f => {
                                                    let ff = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                    .on('collect', c => {
                                                        const pv66 = c.content
                                                  
                                                        message.author.send(pv7).then(g => {
                                                            let gg = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                            .on('collect', c => {
                                                                const pv77 = c.content
                                                          
                                                                message.author.send(pv8).then(h => {
                                                                    let hh = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                    .on('collect', c => {
                                                                        const pv88 = c.content
                                                                  
                                                                        message.author.send(pv9).then(i => {
                                                                            let ii = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                            .on('collect', c => {
                                                                                const pv99 = c.content
                                                                          
                                                                                message.author.send(pv10).then(j => {
                                                                                    let jj = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                    .on('collect', c => {
                                                                                        const pv100 = c.content

                                                                                          
                                                                                                message.author.send(pv12).then(l => {
                                                                                                    let ll = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                    .on('collect', c => {
                                                                                                        const pv122 = c.content
                                                                                                  
                                                                                                        message.author.send(pv13).then(m => {
                                                                                                            let mm = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                            .on('collect', c => {
                                                                                                                const pv133 = c.content
                                                                                                          
                                                                                                                message.author.send(pv14).then(n => {
                                                                                                                    let nn = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                                    .on('collect', c => {
                                                                                                                        const pv144 = c.content

                                                                                                                        let sucesso = new Discord.MessageEmbed()
                                                                                                                        .setTitle('Brasil Mundo Tranquilo')
                                                                                                                        .setDescription('<a:rjp_acertou:760651354212663307> Você enviou sua WhiteList com Sucesso!\n<a:rjp_fogo:760651470906589234> Agora so Aguardar seu Resultado!\n\n```OBS: EVITE FICAR FLOODANDO PARA SER APROVADO, APENAS ESPERE```')
                                                                                                                        .setTimestamp()
                                                                                                                        message.author.send(sucesso)

                                                                                                                        let final = new Discord.MessageEmbed()
                                                                                                                        .setColor('RANDOM')
                                                                                                                        .setTitle(`Nova WhiteList recebida de ${message.author.username}`)
                                                                                                                        .addFields(
                                                                                                                            { name: '<:file:760810039128358942> Qual seu Nome?', value: `> ${nome}`},
                                                                                                                            { name: '<:file:760810039128358942> Qual seu Serial?', value: `> ${serial}`},
                                                                                                                            { name: '<:file:760810039128358942> O que significa VDM?', value: `> ${pv11}`},
                                                                                                                            { name: '<:file:760810039128358942> O que significa Power-Gaming?', value: `> ${pv22}`},
                                                                                                                            { name: '<:file:760810039128358942> O que significa Meta-Gaming?', value: `> ${pv33}`},
                                                                                                                            { name: '<:file:760810039128358942> O que significa RDM?', value: `> ${pv44}`},
                                                                                                                            { name: '<:file:760810039128358942> O que significa Combat-Loggin?', value: `> ${pv55}`},
                                                                                                                            { name: '<:file:760810039128358942> O que significa Amor a Vida?', value: `> ${pv66}`},
                                                                                                                            { name: '<:file:760810039128358942> Quais são as Areas-Safes da Cidade?', value: `> ${pv77}`},
                                                                                                                            { name: '<:file:760810039128358942> Se você esta sendo assaltado por duas pessoas, como reagiria?', value: `> ${pv88}`},
                                                                                                                            { name: '<:file:760810039128358942> Qual o minímo de Policiais para efetuar Assaltos?', value: `> ${pv99}`},
                                                                                                                            { name: '<:file:760810039128358942> Subir lugares que na vida real é quase impossível (Lugares Ingrimes) é considerado roleplay?', value: `> ${pv100}`},
                                                                                                                            { name: '<:file:760810039128358942> Você está sendo assaltado com 2 armas com calibre de 7.62 apontadas pra sua cabeça, por tensão em perder seu dinheiro, você tenta revidar contra os bandidos, qual tipo de infração você está comentendo e porque?', value: `> ${pv122}`},
                                                                                                                            { name: '<:file:760810039128358942> Em um assalto um bandido causa um dano em sua vida assim o matando, ao sair do hospital você por Vingança pode ir atrás dele e revidar o ato?', value: `> ${pv133}`},
                                                                                                                            { name: '<:file:760810039128358942> Você está presenciando um assalto, uma pessoa sendo assaltada por 2 indivíduos com armas de pequeno porte, você estando armado pode evitar a ação?', value: `> ${pv144}`},
                                                                                                                        )
                                                                                                                        message.guild.channels.cache.get('763112532139311115').send(final)
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