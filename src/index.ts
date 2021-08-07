import {Client, Intents} from "discord.js";
import dotenv from "dotenv";
import {messageCreateHandler} from "./handlers";

dotenv.config();

const prefix = process.env.PREFIX ?? "!nemo ",
    token = process.env.DISCORD_TOKEN ?? "",
    client = new Client({
        intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
    });

client.once('ready', () => {
    console.log('nemo-bot deployed');
});

client.on('messageCreate', messageCreateHandler(client, prefix));
client.login(token);
