const Discord = require('discord.js')

module.exports = {
    name: 'whitelist-espiritosanto',
    aliases: ['whitelist-esrp', 'wl-esrp'],
    run: async (client, message, args) => {

        message.delete()

        let nomesobrenome = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Digite o Nome e Sobrenome de seu Personagem!')
        .setFooter('Sistema WhiteList Exclusivo | Espirito Santo RolePlay | By: Bzr#0001')

        let msg1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Digite Oque significa Power-Gaming?')
        .setFooter('Sistema WhiteList Exclusivo | Espirito Santo RolePlay | By: Bzr#0001')

        let msg2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Digite Oque significa Meta-Gaming?')
        .setFooter('Sistema WhiteList Exclusivo | Espirito Santo RolePlay | By: Bzr#0001')

        let msg3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Digite Oque significa Combat-Loggin?')
        .setFooter('Sistema WhiteList Exclusivo | Espirito Santo RolePlay | By: Bzr#0001')

        let msg4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Digite oque é Bug-Jump')
        .setFooter('Sistema WhiteList Exclusivo | Espirito Santo RolePlay | By: Bzr#0001')

        let msg5 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Digite oque é Bug-Weapon')
        .setFooter('Sistema WhiteList Exclusivo | Espirito Santo RolePlay | By: Bzr#0001')

        let msg6 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Digite Oque significa IC')
        .setFooter('Sistema WhiteList Exclusivo | Espirito Santo RolePlay | By: Bzr#0001')

        let msg7 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Digite Oque significa OOC')
        .setFooter('Sistema WhiteList Exclusivo | Espirito Santo RolePlay | By: Bzr#0001')

        let msg8 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Digite Oque significa Vehicle-DeathMatch')
        .setFooter('Sistema WhiteList Exclusivo | Espirito Santo RolePlay | By: Bzr#0001')

        let msg9 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Digite Oque significa Real-DeathMatch')
        .setFooter('Sistema WhiteList Exclusivo | Espirito Santo RolePlay | By: Bzr#0001')

        let msg10 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Digite Oque significa Valor a Vida')
        .setFooter('Sistema WhiteList Exclusivo | Espirito Santo RolePlay | By: Bzr#0001')

        let msg11 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Digite Oque significa Revenge-Kill')
        .setFooter('Sistema WhiteList Exclusivo | Espirito Santo RolePlay | By: Bzr#0001')

        let msg12 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Digite Quantos anos Você Possui')
        .setFooter('Sistema WhiteList Exclusivo | Espirito Santo RolePlay | By: Bzr#0001')

        let msg13 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Esta ciente qualquer Ant-RolePlay tomará ban Permanente?')
        .setFooter('Sistema WhiteList Exclusivo | Espirito Santo RolePlay | By: Bzr#0001')

        let msg14 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Perguntas Sobre RolePlay')
        .setDescription('```Para Iniciar as Perguntas Sobre RolePlay digite INICIAR```')
        .setFooter('Sistema WhiteList Exclusivo | Espirito Santo RolePlay | By: Bzr#0001')

        let msg15 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Caso você esteja andando na cidade e encontra um streamer que você acompanha todos os dias na sua frente, oque você faria?')
        .setFooter('Sistema WhiteList Exclusivo | Espirito Santo RolePlay | By: Bzr#0001')

        let msg16 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Você está andando na rua de apé e chega vários bandidos dando voz de sequestro em você cortando sua comunicação, porém você está no radinho com seus amigos. O que você NÃO pode fazer?')
        .setFooter('Sistema WhiteList Exclusivo | Espirito Santo RolePlay | By: Bzr#0001')

        let msg17 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Você está no carro com seu amigo, ele é o piloto, e por algum motivo ele resolve brincar com o carro, ficar batendo em edifícios e subindo lugares como montanhas em que o RolePlay não é permitido, o que você faria?')
        .setFooter('Sistema WhiteList Exclusivo | Espirito Santo RolePlay | By: Bzr#0001')

        let msg18 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Você está sendo perseguido pela polícia, e você perde o controle do seu veiculo e bate com ele contra a parede, o que você faz logo em seguida?')
        .setFooter('Sistema WhiteList Exclusivo | Espirito Santo RolePlay | By: Bzr#0001')

        let msg20 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Dentro do RolePlay, se você cair desmaiado, pra quem você deve ligar e como deve proceder?')
        .setFooter('Sistema WhiteList Exclusivo | Espirito Santo RolePlay | By: Bzr#0001')

        let msg21 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Caso você crashe em uma SITUAÇÃO de RP o que você deve fazer?')
        .setFooter('Sistema WhiteList Exclusivo | Espirito Santo RolePlay | By: Bzr#0001')

        let msg22 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | De acordo com as regras do servidor se seu personagem morreu e foi declarado como finalizado, o que acontece a seguir?')
        .setFooter('Sistema WhiteList Exclusivo | Espirito Santo RolePlay | By: Bzr#0001')

        let msg23 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | O que você deve fazer quando alguém retira sua comunicação?')
        .setFooter('Sistema WhiteList Exclusivo | Espirito Santo RolePlay | By: Bzr#0001')
        
        let msg24 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:kk:750188345287508080> | Nós, da equipe CRJ, podemos confiar em te colocar dentro de nossa cidade? Você está ciente de que QUALQUER DESCOMPRIMENTO de qualquer regra citada acima você levará um banimento permanente?')
        .setFooter('Sistema WhiteList Exclusivo | Espirito Santo RolePlay | By: Bzr#0001')

        message.author.send(nomesobrenome).then(z => {
            let zz = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
            .on('collect', c => {
                const nome = c.content

                message.author.send(msg1).then(a => {
                    let aa = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                        .on('collect', c => {
                            const pg = c.content

                            message.author.send(msg2).then(b => {
                                let bb = message.author.dmChannel.createMessageCollector(x =>  x.author.id === message.author.id, {max:1})
                                    .on('collect', c => {
                                        const mg = c.content

                                        message.author.send(msg3).then(c => {
                                            let cc = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                .on('collect', c => {
                                                     const cl = c.content

                                                     message.author.send(msg4).then(d => {
                                                        let dd = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                            .on('collect', c => {
                                                                const bugjump = c.content

                                                                message.author.send(msg5).then(e => {
                                                                    let ee = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                        .on('collect', c => {
                                                                            const bugweapon = c.content

                                                                            message.author.send(msg6).then(f => {
                                                                                let ff = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                    .on('collect', c => {
                                                                                        const ic = c.content

                                                                                        message.author.send(msg7).then(g => {
                                                                                             let gg = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                .on('collect', c => {
                                                                                                    const ooc = c.content

                                                                                                message.author.send(msg8).then(h => {
                                                                                                    let hh = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                        .on('collect', c => {
                                                                                                            const vd = c.content

                                                                                                            message.author.send(msg9).then(i => {
                                                                                                                let ii = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                                    .on('collect', c => {
                                                                                                                        const rd = c.content

                                                                                                                    message.author.send(msg10).then(j => {
                                                                                                                        let jj =  message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                                            .on('collect', c => {
                                                                                                                                const valoravida = c.content

                                                                                                                                    message.author.send(msg11).then(k => {
                                                                                                                                        let kk = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                                                            .on('collect', c => {
                                                                                                                                                const rk = c.content
                                                                                            
                                                                                                message.author.send(msg12).then(l => {
                                                                                                    let ll = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                    .on('collect', c => {
                                                                                                        const idade = c.content

                                                                                                        message.author.send(msg13).then(m => {
                                                                                                            let mm = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                            .on('collect', c => {
                                                                                                                const banperma = c.content

                                                                                                                message.author.send(msg14).then(n => {
                                                                                                                    let nn = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                                    .on('collect', c => {
                                                                                                                        const iniciorp = c.content

                                                                                                                        if(iniciorp !== 'iniciar') return message.author.send('fail')

                                                                                                                        message.author.send(msg15).then(o => {
                                                                                                                            let oo = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                                            .on('collect', c => {
                                                                                                                                const streamer = c.content

                                                                                                                                message.author.send(msg16).then(p => {
                                                                                                                                    let pp = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                                                    .on('collect', c => {
                                                                                                                                        const seq = c.content

                                                                                                                                        message.author.send(msg17).then(q => {
                                                                                                                                            let qq = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                                                            .on('collect', c => {
                                                                                                                                                const amigopiloto = c.content

                                                                                                                                                message.author.send(msg18).then(r => {
                                                                                                                                                    let rr = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                                                                    .on('collect', c => {
                                                                                                                                                        const controlevec = c.content

                                                                                                                                                                message.author.send(msg20).then(t => {
                                                                                                                                                                    let tt = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                                                                                        .on('collect', c => {
                                                                                                                                                                            const desmaiado = c.content

                                                                                                                                                                            message.author.send(msg21).then(u => {
                                                                                                                                                                                let uu = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                                                                                                    .on('collect', c => {
                                                                                                                                                                                        const crash = c.content

                                                                                                                                                                                        message.author.send(msg22).then(v => {
                                                                                                                                                                                    let vv = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                                                                                                    .on('collect', c => {
                                                                                                                                                                                        const finalizado = c.content

                                                                                                                                                                                        message.author.send(msg23).then(w => {
                                                                                                                                                                                            let ww = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
                                                                                                                                                                                            .on('collect', c => {
                                                                                                                                                                                                const comuoff = c.content
                                                                                                                                                                                                            


                                                                                                                                                                                                        let sucesso = new Discord.MessageEmbed()
                                                                                                                                                                                                            .setTitle('Espirito Santo RolePlay')
                                                                                                                                                                                                            .setDescription('<a:rjp_acertou:760651354212663307> Você enviou sua WhiteList com Sucesso!\n<a:rjp_fogo:760651470906589234> Agora so Aguardar seu Resultado!\n\n```OBS: EVITE FICAR FLOODANDO PARA SER APROVADO, APENAS ESPERE!```')
                                                                                                                                                                                                            .setTimestamp()
                                                                                                                                                                                                            message.author.send(sucesso)

                                                                                                                                                                                                            let final = new Discord.MessageEmbed()
                                                                                                                                                                                                            .setTitle(`<a:sino:746362569811558500> Nova WhiteList Recebida de ${message.author.username}`)
                                                                                                                                                                                                            .setColor('#73faff')
                                                                                                                                                                                                            .addField('<a:emoji_16:729158491071184947> | Nome do Personagem', nome)
                                                                                                                                                                                                            .addField('<a:emoji_16:729158491071184947> | Oque significa Power-Gaming?', pg)
                                                                                                                                                                                                            .addField('<a:emoji_16:729158491071184947> | Oque significa Meta-Gaming?', mg)
                                                                                                                                                                                                            .addField('<a:emoji_16:729158491071184947> | Oque significa Combat-Loggin?', cl)
                                                                                                                                                                                                            .addField('<a:emoji_16:729158491071184947> | Oque significa Bug-Jump?', bugjump)
                                                                                                                                                                                                            .addField('<a:emoji_16:729158491071184947> | Oque significa Bug-Weapon?', bugweapon)
                                                                                                                                                                                                            .addField('<a:emoji_16:729158491071184947> | Oque significa IC?', ic)
                                                                                                                                                                                                            .addField('<a:emoji_16:729158491071184947> | Oque significa OOC', ooc)
                                                                                                                                                                                                            .addField('<a:emoji_16:729158491071184947> | Oque significa Vehicle-DeathMatch?', vd)
                                                                                                                                                                                                            .addField('<a:emoji_16:729158491071184947> | Oque significa Real-DeathMatch?', rd)
                                                                                                                                                                                                            .addField('<a:emoji_16:729158491071184947> | Oque significa Valor a Vida?', valoravida)
                                                                                                                                                                                                            .addField('<a:emoji_16:729158491071184947> | Oque significa Revenge-Kill?', rk)
                                                                                                                                                                                                            .addField('<a:emoji_16:729158491071184947> | Quantos Anos Você Possui?', idade)
                                                                                                                                                                                                            .addField('<a:emoji_16:729158491071184947> | Se você está na cidade tranquilo, e encontra um streamer que você acompanha todos os dias, o que você faria?', streamer)
                                                                                                                                                                                                            .addField('<a:emoji_16:729158491071184947> |  Você está andando na rua de apé e derrepente chegam vários bandidos dando voz de sequestro em você cortando sua comunicação, porém você está no radinho com seus amigos. O que você NÃO pode fazer?', seq)
                                                                                                                                                                                                            .addField('<a:emoji_16:729158491071184947> | Você está no carro com seu amigo, ele é o piloto, e por algum motivo ele resolve brincar com o carro, ficar batendo em edifícios e subindo lugares como montanhas em que o RolePlay não é permitido, o que você faria em seguida? e que tipo de Ant-RP é esse?', amigopiloto)
                                                                                                                                                                                                            .addField('<a:emoji_16:729158491071184947> | Você está sendo perseguido pela polícia, e você perde o controle do seu veiculo e bate com ele contra a parede, o que você faz logo em seguida?', controlevec)
                                                                                                                                                                                                            .addField('<a:emoji_16:729158491071184947> | Dentro do RolePlay, se você cair desmaiado, pra quem você deve ligar e como deve proceder?', desmaiado)
                                                                                                                                                                                                            .addField('<a:emoji_16:729158491071184947> | Caso você crashe em uma SITUAÇÃO de RP o que você deve fazer?', crash)
                                                                                                                                                                                                            .addField('<a:emoji_16:729158491071184947> | De acordo com as regras do servidor se seu personagem morreu e foi declarado como finalizado, o que acontece a seguir?', finalizado)
                                                                                                                                                                                                            .addField('<a:emoji_16:729158491071184947> | O que você deve fazer quando alguém retira sua comunicação?', comuoff)
                                                                                                                                                                                                            message.guild.channels.cache.get('773566368012435456').send(final)

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
                                    })
                                })
                            })
                        })
                    })
                })
    }
}
