const {
    EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Options, ApplicationCommandOptionType} = require("discord.js");
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const config = require("../../../config.json");
  const Logger = require("../.././Logger");
  const axios = require("axios");
  const fs = require("fs");

  
  
  module.exports = {
    name: "interactionCreate",
    async execute(interaction) {
      if (interaction.isChatInputCommand()) {
        //      await interaction.deferReply({ephemeral: false});
  
        const command = interaction.client.commands.get(interaction.commandName);
        if (!command) return;
  
        try {
          Logger.discordMessage(`${interaction.user.username} - [${interaction.commandName}]`);
          bridgeChat = interaction.channelId;
          await command.execute(interaction, interaction.client);
        } catch (error) {
          console.log(error);
          await interaction.reply({
            content: "There was an error while executing this command!",
            ephemeral: true,
          });
        }
      } 
  
    }}
