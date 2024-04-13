import { Client, Events, IntentsBitField } from "discord.js";

const client = new Client({
	intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMembers],
});

client.on(Events.ClientReady, async (client) => {
    
});