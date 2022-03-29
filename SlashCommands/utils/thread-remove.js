const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "thread-remove",
    description: "Remove thread",
    type: 'CHAT_INPUT',
    options: [
        {
          name: 'name',
          description: "Thread name to remove",
          type: 'STRING',
          required: true
        }
        ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const name = interaction.options.getString('name')

        const thread = interaction.channel.threads.cache.find(x => x.name === `${name}`);
        await thread.delete();

        interaction.followUp({ content: `Removed thread: ${thread.name}`, ephemeral: true })
        console.log(`Removed thread: ${thread.name}`);
    },
};