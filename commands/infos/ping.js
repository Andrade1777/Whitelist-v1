module.exports = {
    name: 'ping',
    aliases: ['latency', 'ms', 'lantencia'],
    run: async (client, message, args) => {
        message.delete()
        const envio = await message.channel.send(`Calculando...`)
        envio.edit(`Latência: **${parseInt(envio.createdAt - message.createdAt)} ms**\nAPI: **${parseInt(client.ws.ping)} ms**`)
    }
}