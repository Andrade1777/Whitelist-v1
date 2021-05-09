const fs = require('fs')

module.exports = (client) => {
    console.log('KRBot - Events - Carregando')

    const c = local => {
        const events = fs.readdirSync(`./events/${local}/`).filter(x => x.endsWith('.js'));;
        for (let file of events) {
            const l = require(`../events/${local}/${file}`);
            let nome = file.split('.')[0];
            client.on(nome, l.bind(null, client));
        }
    }

    ["client", "guild"].forEach(x => c(x))
    console.log('KRBot - Events - Ligado')

}