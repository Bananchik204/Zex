const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "thread-create",
    description: "Create thread",
    type: 'CHAT_INPUT',
    options: [
        {
          name: 'name',
          description: "Thread name",
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

        const thread = await interaction.channel.threads.create({
            name: `${name}`,
            autoArchiveDuration: 60,
            reason: 'Thread',
        });

        interaction.followUp({ content: `Created thread: ${thread.name}`, ephemeral: true })
        console.log(`Created thread: ${thread.name}`);
    },
};