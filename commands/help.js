const settings = require('../settings');
module.exports = async (sock, chatId, message) => {
    const h = new Date().getHours();
    const greet = h<12?'🌅 Good Morning':h<17?'☀️ Good Afternoon':'🌙 Good Evening';
    const menu = `╔═══════════════════════════════╗
║   🤖  *S C O T T Y M D*      ║
║   _v${settings.version} | © Scotty_        ║
╚═══════════════════════════════╝

${greet}! I'm *TunzyMD*, your pro WhatsApp bot!

▸ Prefix: \`${settings.prefix}\`   ▸ Commands: 100

━━━━━━━━━━━━━━━━━━━━━━━
⚙️  *GENERAL*
━━━━━━━━━━━━━━━━━━━━━━━
◈ .help / .menu
◈ .ping / .alive / .uptime
◈ .owner / .pair / .session

━━━━━━━━━━━━━━━━━━━━━━━
🎵  *MEDIA*
━━━━━━━━━━━━━━━━━━━━━━━
◈ .sticker / .steal
◈ .toimg _(sticker→img)_
◈ .play <song>
◈ .lyrics <song>
◈ .tts <text>
◈ .vv _(view-once)_
◈ .getdp @user
◈ .savestatus

━━━━━━━━━━━━━━━━━━━━━━━
🛠️  *TOOLS*
━━━━━━━━━━━━━━━━━━━━━━━
◈ .weather <city>
◈ .wiki <topic>
◈ .news <topic>
◈ .tr <lang> <text>
◈ .calc <expression>
◈ .define <word>
◈ .urban <word>
◈ .qr <text>
◈ .country <name>
◈ .github <user>
◈ .currency <amt> <from> <to>
◈ .remind <time> <msg>
◈ .time <timezone>
◈ .encode / .decode
◈ .reverse / .upper / .lower
◈ .password <length>
◈ .today

━━━━━━━━━━━━━━━━━━━━━━━
🎮  *FUN*
━━━━━━━━━━━━━━━━━━━━━━━
◈ .joke / .dadjoke
◈ .fact / .quote / .motivate
◈ .8ball <question>
◈ .flip / .dice / .choose
◈ .roast / .ship / .love
◈ .compliment / .insult
◈ .truth / .dare / .rate
◈ .zodiac / .horoscope
◈ .tictactoe @user
◈ .poll Q|opt1|opt2

━━━━━━━━━━━━━━━━━━━━━━━
👥  *GROUP ADMIN*
━━━━━━━━━━━━━━━━━━━━━━━
◈ .kick / .kickall
◈ .promote / .demote
◈ .mute / .unmute
◈ .lock / .unlock
◈ .warn / .warnings / .clearwarn
◈ .del _(reply to msg)_
◈ .tagall / .hidetag
◈ .antilink on/off
◈ .antibadword on/off
◈ .antispam on/off
◈ .welcome on/off/set
◈ .goodbye on/off/set
◈ .groupinfo / .admins
◈ .topmembers
◈ .setname / .setdesc
◈ .getlink / .resetlink
◈ .chatbot on/off

━━━━━━━━━━━━━━━━━━━━━━━
👑  *OWNER ONLY*
━━━━━━━━━━━━━━━━━━━━━━━
◈ .mode public/private
◈ .ban / .unban @user
◈ .bc <message>
◈ .autoreply on/off/set
◈ .alwaysonline on/off
◈ .grouplist

━━━━━━━━━━━━━━━━━━━━━━━
🤖  *AI*
━━━━━━━━━━━━━━━━━━━━━━━
◈ .ai / .ask <question>

━━━━━━━━━━━━━━━━━━━━━━━
_100 commands | © TunzyMD by Scotty_`;
    await sock.sendMessage(chatId, { text: menu }, { quoted: message });
};
