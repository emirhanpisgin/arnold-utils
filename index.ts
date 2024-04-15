import { Client, Events, IntentsBitField, type GuildTextBasedChannel } from "discord.js";
import { config } from "dotenv";
config();

const userRoleId = "733818614561636382";

const client = new Client({
	intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMembers],
});

client.on(Events.ClientReady, async (client) => {
	console.log(client.user.displayName + " is ready!");
});

client.on(Events.GuildMemberAdd, async (member) => {
	const welcomeChannel = (await member.guild.channels.fetch("1227706309390893076")) as GuildTextBasedChannel;

	await member.roles.add(userRoleId);
	await welcomeChannel.send(
		`<@${member.id}> sunucuya hoşgeldin. Minecraft sunucusuna katılmak için <#1228697461883928697> kanalını okumayı unutma, iyi eğlenceler :)`
	);
});

client.login(process.env.TOKEN);
