const { Client, Collection } = require('discord.js')
const fs = require('fs')
const Gamedig = require('gamedig')

const client = new Client();

const db = require('quick.db')
const mysql = require('mysql')

const ROLE = '749839148264718367';
const GUILD = '748738217544515648';

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");

["aliases", "commands"].forEach(x => client[x] = new Collection());
["command", "event"].forEach(x => require(`./main/${x}`)(client));

client.on('ready', () => {
    console.log('KRBot - Ligado')

    const role = client.guilds.cache.get(GUILD).roles.cache.get(ROLE);
    if (!role) return;

    setInterval(() => {
        role.edit({
            color: "RANDOM"
        });
    }, 8000)
})


client.login('')