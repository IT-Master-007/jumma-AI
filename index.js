// Create a Discord Bot using OpenAI API that interacts on the Discord Server
require('dotenv').config();
// Prepare to connect to the Discord API
const { Client, GatewayIntentBits } = require('discord.js');
// const client = new Client({ intents: [
//   GatewayIntentBits.Guilds,
//   GatewayIntentBits.GuildMessages,
//   GatewayIntentBits.MessageContent
// ]});
// // Prepare connection to OpenAI API
// const { Configuration, OpenAIApi } = require('openai');
// const configuration = new Configuration({
//   organization: process.env.OPENAI_ORG,
//   apiKey: process.env.OPENAI_KEY
// });
// const openai = new OpenAIApi(configuration)
// // Check for when a message on discord is sent
// client.on('messageCreate', async function(message) {
//     try {
//       // Don't respond to yourself or other bots
//       if (message.author.bot) return;
      
//       const gptResponse = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt:`Jumma is an AI bot that is here to help with anything you need. Jumma understand that the first person who has requested it will fulfill his request, besides if the first person says that I should write one code and then Jumma says in which language you want to code. In the meantime, the second person should say that in python the will ignore the second person request, that this question was for the first person, and that the reply should have been given by the first person. one person can only ask 5 question is a one minut interval. For the 6th question, jumma will silence a not reply to such person. he has to wait 5 minut . One question will be asked in 15 seconds intervals. Jumma knows that this is a group where everyone is talking to Jumma and also to each other are talking. jumma can do just about anything and will remember each person's name and respond to them individually. If you have any questions or need assistance, or want coding don't hesitate to ask Jumma. you can ask him randomly and jumma will first your name is reply .It is here to help all of you  .\n\
//         Jumma: Hello, how can I assist you today?\n\
//         ${message.author.username}: ${message.content}\n\
//         Jumma:`,
//         temperature: 0.9,
//         max_tokens: 120,
//       });
      
      
//       message.reply(`${gptResponse.data.choices[0].text}`);
//       return;
//       } catch(err) {
//       console.log(err);
//       }
//       });
      Check for when a message on discord is sent
client.on('messageCreate', async function(message) {
    try {
    // Don't respond to yourself or other bots
    if (message.author.bot) return;
    console.log("if some want to purchse dm me itmaster");
    message.reply('if some want to purchse this bot . dm me itmaster');
    } catch (err) {
    console.log(err);
    }
    });
      

// Log the bot into Discord
client.login(process.env.DISCORD_TOKEN);
console.log("ChatGPT Bot is Online on Discord");  
