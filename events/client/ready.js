module.exports = (client) => {
    const status = [
        {name: 'Sugestões Para Whitelist', type: 'LISTENING'},
        {name: 'Programando Whitelist', type: 'STREAMING'},
        {name: 'Novos Membros No Discord Do Rio City Roleplay', type: 'WATCHING'},
        {name: 'Desenvolvido Por ! Andrade#6986', type: 'PLAYING'}
    ]
     function Presence() {
         const base = status[Math.floor(Math.random() * status.length)]
         client.user.setActivity(base)
     }
     Presence();
     setInterval(() => Presence(), 5000)
}