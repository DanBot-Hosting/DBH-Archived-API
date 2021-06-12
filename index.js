require('dotenv').config();

const Discord = require('discord.js');
const Josh = require('josh');
const provider = require('@josh-providers/sqlite');

const config = require('./config.json');

const restAPI = require('./modules/API');
const api = new restAPI(config.api.port);
/*
 const serverDB = new Josh({
name: 'servers',
provider,
 });
*/

const client = new Discord.Client({
    disableMentions: "everyone",
    messageCacheMaxSize: 1,
	messageCacheLifetime: 5,
    messageSweepInterval: 30,
    ws: {
        intents: [
            "GUILDS",
            "GUILD_MESSAGES",
            "DIRECT_MESSAGES"
        ]
    }
});

client.login(process.env.TOKEN).catch(() => {
    console.error("Invalid bot token");
    process.exit(1);
});

// Global variables
global.client = client;
global.config = config;
//global.serverDB = serverDB;
global.api = api;
