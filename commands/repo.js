const { reply } = require('./_helper');
module.exports = async (sock, chatId, message) => {
    await reply(sock, chatId, `📦 *TunzyMD Repository*\n━━━━━━━━━━━━\n🤖 Bot: *TunzyMD*\n📝 Version: *2.0*\n⚡ Commands: *100+*\n👤 Author: *Scotty*\n\n_TunzyMD©_`, message);
};
