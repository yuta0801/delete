const Discord  = require('discord.js'),
			client   = new Discord.Client(),
			settings = require('./settings.json');

client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', message => {
	if (message.author.bot) return;
	if (message.author.id == message.guild.owner.id) {
		if (message.content === '/clear all') {
			message.channel.fetchMessages().then(messages => messages.forEach(msg => msg.delete()));
		} else if (message.content.match(/\/clear \d+/)) {
			var limit = message.content.match(/\/clear (\d+)/)[1] + 1;
			message.channel.fetchMessages({limit: limit}).then(messages => messages.forEach(msg => msg.delete()));
		}
	} else {
		message.channel.send('オーナー以外は使用できません。')
	}
});

client.login(settings.token);
