/* eslint-disable require-await */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, MessageManager, Embed, Collection, GuildMember } = require('discord.js');
const fs = require('fs');
const client = new Client({ partials: ['CHANNEL'], intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers, GatewayIntentBits.DirectMessages] });

client.commands = new Collection();

require('dotenv').config();

const functions = fs.readdirSync('./src/functions').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));
const commandFolders = fs.readdirSync('./src/commands');
const csv = require('fast-csv');
const student = []

fs.createReadStream('./src/csv/studentdata.csv')
  .pipe(csv.parse({ headers: true }))
  .on('error', error => console.error(error))
  .on('data', row => student.push(row))
  .on('end', () => console.log("CSV Data imported"));

(async () => {
  for (file of functions) {
    require(`./functions/${file}`)(client);
  }
  client.handleEvents(eventFiles, './src/events');
  client.handleCommands(commandFolders, './src/commands');
  client.login(process.env.token);
})();

// server join/leave logging
client.on('guildMemberAdd', guildMember => {
    guildMember.send(`Hello, ${guildMember.user} welcome to the University Discord Server, please post your UP number like this: "UP1234567" in the available text channel to get your roles and set up in the server.`);
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'norole');
    
    guildMember.roles.add(welcomeRole);
    
    client.channels.cache.get('1108863268883279972').send(`Welcome ${guildMember.user}, please enter your UP number into this channel to be allocated your roles.`), 1000;

});

// active message listener in the "no role channel to give roles to new users."
client.on('messageCreate', async (message) => {
  if(message.channelId != 1108863268883279972) return;
  for (var i = 0; i < student.length; i++) { 
    
    const person = message.member;
    if (message.content === student[i].upnumber) {
      message.author.send(`Hello, ${student[i].firstname}`);
      message.author.send(`You have been given the roles: Year ${student[i].year} and ${student[i].course} course and access to the co-existing channels`)
      message.author.send(`You also have been given the roles: member to access the public text channels`)
      console.log(`${student[i].year}`)
      let yearRole = person.guild.roles.cache.find(role => role.name === `Year ${student[i].year}`);
      console.log(`${student[i].course}`)
      let courseRole = person.guild.roles.cache.find(role => role.name === `${student[i].course}`);
      person.roles.add(yearRole);
      person.roles.add(courseRole);
      let memberRole = person.guild.roles.cache.find(role => role.name === `member`);
      person.roles.add(memberRole);
      let welcomeRole = person.guild.roles.cache.find(role => role.name === 'norole');
      person.roles.remove(welcomeRole);
      person.setNickname(`${student[i].firstname} ${student[i].lastname.charAt(0)} | ${student[i].upnumber}`);
      console.log(`CSV ID:${[i]}`);
      break;
    }
      // adjustable password to give whatever the admin role is for teachers/lecturers etc.
    else if (message.content === "specific admin password") {
      let adminRole = person.guild.roles.cache.find(role => role.name === 'admin');
      person.roles.add(adminRole);
    }
  }

  if (message.author.bot) {
    setTimeout(() => { message.delete();}, 120000);
    return
    
  }
  else {
    setTimeout(() => { message.delete();}, 20000);
    return;
  }
  
  
});



