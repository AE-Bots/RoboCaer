const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('ban someone')
        .setContexts(0, 1, 2),
    async execute(interaction) {
        await interaction.reply('happy');
    },
};
