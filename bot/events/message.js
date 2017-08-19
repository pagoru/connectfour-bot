const manager = require('../gameManager');

module.exports = (message) => {

    if(!message.guild) return;
    if(message.author.bot) return;

    if(message.content.startsWith(global.config.bot.prefix + "play")) {
        if(message.mentions.users.size !== 1) {
            message.reply("You have to specify a player.");
        } else if(message.mentions.users.some(u => u.bot)) {
            message.reply("You can't handle a bot, play with someone your level.");
        } else if(message.mentions.users.some(u => u === message.author)){
            message.reply("You can't play with yourself.");
        } else {
            manager.startNewGame(message);
        }
    }

};