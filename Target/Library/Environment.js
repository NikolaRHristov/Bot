(await import("dotenv")).config();
const { object: o, string: t } = await import("zod");
var a = o({
	DISCORD_APPLICATION_ID: t().optional().default(""),
	DISCORD_CLIENT_ID: t().optional().default(""),
	DISCORD_CLIENT_SECRET: t().optional().default(""),
	DISCORD_PUBLIC_KEY: t().optional().default(""),
	DISCORD_TOKENS: t().optional().default(""),
});
export { a as default, o as object, t as string };
