# DiscordRoleBot
### This is a Discord Role Bot that is used for automatically assigning a role to a user on entry of a server. 

### Also the bot expects an ID value from them once they join into a restricted server channel that only new people can see into and out of. Which is something a server Admin will require to set up and is shown how in the Admin Instructions.

### Once that ID is verified with the CSV file that holds all ID values (generated by the client or admin) the Discord user is given the correct roles and name in line with the CSV file given.

### Additionally this is used as a multi-purpose role bot, including:
### -Reaction Roles! Utilising button based role assignment slash commands!


# User Instructions:

## 1. On joining 

On entering the server you are notified in server and in your DM's from the bot exclaiming that you need to put your UP number into the channel you can access. You'll find you can only access #norole.

## 2. On Entering UP Number.

Entering your UP number inside will give you your roles, access to the collective channels that co-align with the course and year you're in at University and change your name to your First Name and Last name Initial. - Your UPNumber. Additionally you will be notified by the bot of these changes through your DMs and given a member role within the server.

# Admin Instructions:
## 1. Invite the Bot

The bot invite can be found at this link. Once it is clicked make sure you invite it to the correct corresponding server you want the bot in.
https://discord.com/api/oauth2/authorize?client_id=1099684282986938499&permissions=8&scope=bot

## 2. Edit Roles
Next, in line with the GIF below, click to the right of your server name on the downward arrow and click **Server Settings** then click on **Roles** and click **Create Role**

![c4b4d1a47903d6e868bf20c8bae673d3(1)](https://github.com/UP900420/DiscordRoleBot/assets/72605069/335c797e-a953-42cd-bf25-8031af649cd8)

Then, in line with the GIF below, create a new role called **"norole"** and click save changes 

![640832abfe917ac648190356ad66b8f9](https://github.com/UP900420/DiscordRoleBot/assets/72605069/e7e18bf0-efa4-45ce-8af2-9fcaf04c743c)

After, in line with the GIF below, click the + and create another role called **"member"** and click save changes

![85388dba832b35b1d734976955a698cf](https://github.com/UP900420/DiscordRoleBot/assets/72605069/715b2442-60aa-4ab9-b0dd-003bef52171e)

## 3. Change text-channel permissions

Next, in line with the GIF below, create a channel in your server called "norole" and make it a private channel 

![4828ae3117f557df2756635bf070c285](https://github.com/UP900420/DiscordRoleBot/assets/72605069/41dcae9f-3d67-4f49-bcb8-ac3e9b7bae34)

Then, in line with the GIF below, click next and make sure to add @norole to it.

![da7a5e0bdd7bd6f40e7307d3d7bf856d](https://github.com/UP900420/DiscordRoleBot/assets/72605069/02195449-5ab0-48d9-aada-695962506c29)


After, in line with the GIF below, right click your new #norole channel and click **Edit Channel**, head to **Permissions** and scroll down to where you see **Roles/Members**

![79c2983a5dade6906044d62a75ebe3f3](https://github.com/UP900420/DiscordRoleBot/assets/72605069/8c3844e3-52be-45a8-b957-fa3db69ce56f)


Next, in line with the GIF below, click **norole** and allow them to **Send Messages** and **Read Message History** and click **Save Changes**

![ebf991be2b06ce4ede89b05585d1ac9d(1)](https://github.com/UP900420/DiscordRoleBot/assets/72605069/5f0a0398-f6d9-4194-8ece-1590e937764a)


## 4. Setup .env file

If the Admin has access to the bots code from this file, make a .env file outside the SRC directory in the Rolebot file and enclose:
token = "BOT TOKEN HERE"
clientid = "BOT IDENTIFICATION TOKEN HERE"
channelid = "SPECIFIC NO ROLE CHANNEL ID"
adminpass = "SPECIFIC ADMIN PASSWORD YOU WANT TO GIVE ADMIN ROLE IN YOUR SERVER"

Additionally if you'd like a csv input you must make a CSV folder called "csv" inside the SRC directory and inside place a "studentdata.csv" file with the correct data inputs.

## 5. You're done!

Ensure you follow the steps for any future channels you make similarly by ensuring only members can see into the channel and @everyone can't see into it. Making new users HAVE to accept the stipulations of your entry system.

Also ensure the bots role "RoleBot" is above all other roles you want it to interact with otherwise it will be unable to assign it!

# Slash Commands:

/buttonrole [role1] [role2] [role3] [role4] [role5] - NOTE: role1 is required, role2,3,4,5 are optional add as many as you'd like! 

/help - This will display the help command and show what instructions you could use in the server.
