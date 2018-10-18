const Discord = require('discord.js');
const client = new Discord.Client();
const a = new Discord.Client()

client.on('ready', () => {
    console.log('I am ready!');
});







client.on("ready", () => {
let channel =     client.channels.get("499686836751302683")
setInterval(function() {
channel.send(`gfgffffffffffffhdl,fgbkl;jgl;kjhk;;;lfdfhlmاحلا مسااااااااااااااااااااا :joy:`);
}, 25)
})







// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
