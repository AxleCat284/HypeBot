const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const config = require('../../../config.json')

module.exports = {
    name: 'strike',
    description: 'strikes a staff member',
    options: [
        {
            name: 'name',
            description: 'discord Username',
            type: 6,
            required: true
        },
        {
            name: 'reason',
            description: 'reason for strike',
            type: 3,
            required: true
        },
        {
            name: 'number',
            description: 'the ammount of strikes they have had',
            type: 3,
            required: true
        }
      ],

 
      execute: async (interaction, client) => {
//
//

        const name = interaction.options.getUser("name")
        const reason = interaction.options.getString("reason")
        const number = interaction.options.getString("number")
        const strikelog = {
            title: 'Strike Log',
            description: (`**${name} Was Striked**\n\n**Reason:** ${reason}\n**Number:** ${number}\n\n**ID:** ${name.id}\n\n**By Moderator**: ${interaction.user}\n**Moderator ID**: ${interaction.user.id}`),
            timestamp: new Date().toISOString(),
            footer: {
                text: (`Hyperbolic Staff Team`),
            },
        };
        const discordlog = {
            title: 'Staff Strikes',
            description: (`${name} was striked by ${interaction.user}!`),
            timestamp: new Date().toISOString(),
            footer: {
                text: (`Hyperbolic Staff Team`),
            },
        };
        if ((await interaction.guild.members.fetch(interaction.user)).roles.cache.has(config.discord.managementRole)) {
            await interaction.reply({embeds: [discordlog] })
            await client.channels.cache.get(config.channels.loggingChannel).send({embeds: [strikelog] })

        } else {
            await interaction.reply({ content: 'You do not have permission to run this command.', ephemeral: false })
        }
      }
    }
