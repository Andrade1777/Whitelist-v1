const Discord = require ('discord.js')

module.exports = {
    name: 'clear',
    aliases: ['limpar', 'apagar'],
    run: async (client, message, args) => {
    
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "Você não possui permissão para utilizar este comando!"
    );
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 99)
    return message.reply(
      "Forneça um número de até **99 mensagens** a serem excluídas"
    );

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched).catch(err => {
    message.channel.send(`\`\`\`${err}\`\`\``)
  });
  message.channel
    .send(`<a:kk:750188345287508080> | **${args[0]} mensagens limpas nesse chat!**`).then(msg => msg.delete({timeout: 5000}))
    .catch(error =>
      console.log(`Não foi possível deletar mensagens devido a: ${error}`)
    )
    }
}