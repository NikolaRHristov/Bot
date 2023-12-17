import { GatewayIntentBits as s } from "discord.js";
const {
		DISCORD_APPLICATION_ID: l,
		DISCORD_PUBLIC_KEY: c,
		DISCORD_TOKENS: i,
	} = (await import("../Library/Environment.js")).default.parse(process.env),
	g = i.indexOf(",") !== -1 ? i.split(",") : [i],
	m = [
		{
			token: "",
			events: new Map([
				[
					"message",
					async (t) => {
						console.log(t);
					},
				],
			]),
			options: {
				intents: [
					s.GuildMembers,
					s.GuildMessages,
					s.Guilds,
					s.MessageContent,
				],
			},
			preflight: async (t) => {
				const e = l;
				if (!c)
					throw new Error(
						"The DISCORD_TOKEN environment variable is required.",
					);
				async function o(a) {
					const n = await fetch(a, {
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bot ${t}`,
						},
						method: "PUT",
						body: JSON.stringify([AWW_COMMAND, INVITE_COMMAND]),
					});
					if (n.ok) console.log("Registered all commands");
					else {
						console.error("Error registering commands");
						const p = await n.text();
						console.error(p);
					}
					return n;
				}
				async function r() {
					await o(
						`https://discord.com/api/v10/applications/${e}/commands`,
					);
				}
				await r();
			},
		},
	];
var f = m.map((t, e) => {
	const o = g[e];
	return o ? (t.token = o) : console.log(`No token for client: ${e}`), t;
});
export {
	m as Clients,
	l as DISCORD_APPLICATION_ID,
	c as DISCORD_PUBLIC_KEY,
	i as DISCORD_TOKENS,
	g as Tokens,
	f as default,
};
