const { ActivityType } = require("discord.js");
const config = require("../../../config.json");
const Logger = require("../../Logger");

class StateHandler {
  constructor(discord) {
    this.discord = discord;
  }

  async onReady() {
    Logger.discordMessage("Client ready, logged in as " + this.discord.client.user.tag);
    this.discord.client.user.setPresence({
      activities: [
        { name: `Over JSON Files`, type: ActivityType.Watching },
      ],
    });

  } }

module.exports = StateHandler;
