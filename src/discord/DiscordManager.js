const { Client, Collection, AttachmentBuilder, GatewayIntentBits } = require("discord.js");
const { readdirSync } = require('fs');
const CommunicationBridge = require("../contracts/CommunicationBridge");
const { Player } = require('discord-player');
const messageToImage = require("../contracts/messageToImage");
const MessageHandler = require("./handlers/MessageHandler");
const StateHandler = require("./handlers/StateHandler");
const CommandHandler = require("./CommandHandler");
const config = require("../../config.json");
const Logger = require(".././Logger");
const path = require("node:path");
const fs = require("fs");
let channel;

class DiscordManager extends CommunicationBridge {
  constructor(app) {
    super();

    this.app = app;

    this.stateHandler = new StateHandler(this);
    this.messageHandler = new MessageHandler(this);
    this.commandHandler = new CommandHandler(this);
  }

  async connect() {
    global.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
      ],
    });

    this.client = client;


    this.client.on("ready", () => this.stateHandler.onReady());
    this.client.on("messageCreate", (message) => this.messageHandler.onMessage(message));

    this.client.login(config.discord.token).catch((error) => {Logger.errorMessage(error)});

    client.commands = new Collection();
    const commandFiles = fs
      .readdirSync("src/discord/commands")
      .filter((file) => file.endsWith(".js"));

    for (const file of commandFiles) {
      const command = require(`./commands/${file}`);
      client.commands.set(command.name, command);
    }

    const eventsPath = path.join(__dirname, "events");
    const eventFiles = fs
      .readdirSync(eventsPath)
      .filter((file) => file.endsWith(".js"));

    for (const file of eventFiles) {
      const filePath = path.join(eventsPath, file);
      const event = require(filePath);
      event.once ? client.once(event.name, (...args) => event.execute(...args)) : client.on(event.name, (...args) => event.execute(...args));
    }

    global.guild = await client.guilds.fetch(config.discord.serverID);

    process.on("SIGINT", () => this.stateHandler.onClose());
  }

}
module.exports = DiscordManager;