require('dotenv').config();
require("module-alias/register");
const bot = require('@bot/index');
const App = require('@structures/app.js');
const { PORT, DISCORD_TOKEN } = process.env;


(async () => {
    let client = await bot.init(DISCORD_TOKEN);
    console.log(colors.yellow(`Logged in as `) + colors.underline.green(client.user.tag));
    await new App(client).listen(PORT || 80);
    console.log(colors.yellow(`Running on port `) + colors.underline.green(PORT || 80));
})()
