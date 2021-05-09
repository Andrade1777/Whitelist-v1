const Discord = require('discord.js')
const mysql = require('mysql')

module.exports = {
    name: 'whitelist',
    aliases: ['wl'],
    run: async (client, message, args) => {
        message.delete()
        if(message.content.toLowerCase() === 's!wl' && message.channel.id === '753338731464884394') {
            message.delete()
            let guild = message.guild;
            let channelc =  await guild.createChannel(`whitelist-${message.author.username}`,{
                type: 'textChannel',
                parent: '753338419727564851',
                permissionOverwrites:[
                    {
                        allow: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY','EMBED_LINKS','ATTACH_FILES','SEND_MESSAGES'],
                        id: message.author.id
                    },
                    {
                        deny: 'VIEW_CHANNEL',
                        id: guild.id
                    }
                ]


            });


            channelc.send(`<@>${message.author.username}\nOla, qual o nome do seu personagem?`).then(async message => {
                let nome = message.channel.createMessageCollector(m => m.author.id === message.author.id, {
                    max: 1
                });
                nome.on('collect', () => {
                    channelc.send(`Ok, seu nome é ${nome.collected.first().content}`)
                    channel.send(`Qual seu ID?`).then(async message2 => {
                        let id = message.channel.createMessageCollector(x => x.author.id === message.author.id, {
                            max: 1
                        });
                        id.on('collect', () => {
                            channelc.send(`Ok, seu id é ${id.collected.first().content}`)
                            channel.delete()
                            let con = mysql.createConnection({
                                host: 'localhost',
                                user: "root",
                                password: "",
                                database: "mtasa"
                            });
                            con.connect(function(err) {
                                if(err) {
                                    console.log(`[MYSQL] falha ao conectar\n` + err.stack)
                                    return err;
                                }
                                var whitelisted = "1";
                                var sql = `UPDATE wl SET whitelisted = '${whitelisted}' WHERE id = '${id.collected.first().content}'`;
                                con.query(sql, function (err, result) {
                                    if(err) throw err;
                                    console.log(result.affectedRows + "registrados")
                                    client.channels.get("753338731464884394").send(`O ID ${id.collected.first().content} foi adicionado com sucesso na whitelist!`)
                                })
                            })
                        })
                    })
                })
            })

        }
    }
}