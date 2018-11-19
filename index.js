const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "?"//sets the prefix
var commands = [prefix+"help",prefix+"autism",prefix+"ship",prefix+"meme add (in development)"]//list of commands
var teeth = [1,"e"]
client.on('ready', () => {//activates when "node ." is typed into command prompt
    console.log('Bot ready!');//tells the command prompt that the bot is ready
    client.user.setActivity("with my robotic foreskin");//sets the status to "Playing with my robotic foreskin"
});
client.on("message",(message)=>{//activates when a message is sent via dms or in a shared server [Commands one]
    if (message.author.bot) return//doesn't detect messages from bots
    var author = message.author//lol if u can't tell ur noob
    var basicStaff = message.member.roles.has(message.guild.roles.find("name", "Basic Staff").id)//true or false if user is basic staff
    var moderator = message.member.roles.has(message.guild.roles.find("name", "Moderator").id)//true or false if user is mod
    var administrator = message.member.roles.has(message.guild.roles.find("name", "Administrator").id)//true or false if iser is admin
    var superAdmin = message.member.roles.has(message.guild.roles.find("name", "Super Administrator").id)//true or false if user is super admin
    var RCK = message.member.roles.has(message.guild.roles.find("name", "Roblox Cool Kid").id)//true or false of user is a roblox cool kid
    if (message.content.toLowerCase().includes("rip")||message.content.toLowerCase().includes("f to pay respects")){//if the message says rip or f to pay respects
        message.react("🇫");//adds the regional indicator f emoji to the message
    }
    if (message.content.toLowerCase().includes("owo")||message.content.toLowerCase().includes("uwu")||message.content.toLowerCase().includes("rawr")){//if the message contains furry shit
        message.channel.send("furfag lol");//says ur a furry
    }
    if (message.content.toLowerCase().includes("foreskin")){//if niggas be talkin bout foreskin
        message.channel.send("I heard foreskin :yum:");//tells people he heard foreskin
    }
    if (message.content.toLowerCase().includes("gn")||message.content.toLowerCase().includes("good night")||message.content.toLowerCase().includes("goodnight")){//if someone says good night
        message.channel.send("Good night, sweet B");//says gn sweet b
    }
    if (message.content.toLowerCase().includes("hitler did nothing wrong")||message.content.toLowerCase().includes("hitler didn't do anything wrong")){//if they are being too edgy
        message.channel.send("Wow wow wow, no need to be so edgy, calm down");//tells edgy kiddos to STOP
    }
    if (message.content.toLowerCase().includes("no u")||message.content.toLowerCase().includes("ur mum gay")||message.content.toLowerCase().includes("your mom gay")){//detects dead memes
        message.channel.send("Bring dead memes elsewhere");//tells dead memers to heck off
    }
    if (message.content.toLowerCase().includes("alexa play despacito")||message.content.toLowerCase().includes("alexa, play despacito")||message.content.toLowerCase().includes("play despacito")){//if they say to play despacito
        message.channel.send("ɴᴏᴡ ᴘʟᴀʏɪɴɢ: Despacito ───────────────:white_circle:───────────────────▐▐");//despacito is now playing copypasta
    }
    if (message.content.toLowerCase().includes("this is so sad")){//if they say this is so sad
        var numbah = Math.floor(Math.random()*3)//chooses a random number 1-3
        switch(numbah){//switch statement for the random number
        case 0:;
        message.channel.send(":sob: omg so sad :sob:"+message.guild.emojis.find("name","SOBBBBB"))//says it is sad
        message.react(message.guild.emojis.find("name","SOBBBBB"))//reacts the sad man emoji
        break;
        case 1:;
        message.channel.send("I can play despacito if you ask nicely");//second option to reply
        break;
        case 2:;
        message.channel.send("Can we hit my wife?");//third option to reply
        break;
        }
    }
    if (message.content.startsWith(prefix)){//detects if the message starts with the prefix
        if (message.content.startsWith(prefix+"autism")){//if it's the autism command
            if (message.channel.name === "bot-commands"){//if it's in the bot commands channel
                var autisticThang = message.content.split(prefix+"autism ").splice(1);//anything after "?autism " will be rated
                var percent = Math.floor(Math.random()*100);//chooses a random percent 0-100
                var trueAutist = "";//a blank string for later
                for (var i = 0; i < autisticThang.length; i++){//for every letter in the array to be rated
                    trueAutist = trueAutist+autisticThang[i]+" ";//adds the letters, forming a string
                }
                if (!autisticThang){//if there is nothing to be rated
                    message.reply("proper use: ?autism (thing to be rated)");//warns the user that they need to specify somehting to rate
                    return;
                }
                if (trueAutist.toLowerCase() === "damon "){//if the thing being rated is me
                    percent = 99//makes the percent 99
                } else if (trueAutist.toLowerCase() === "tim "){//if the thing to be rated is tim
                    percent = 69//makes the percent 69
                }
                message.channel.send(trueAutist+"is "+percent+"% autistic!");//says the autistic thing is however much autistic
            }else{
                message.reply("use the bot commands channel!")//warns the user to use the bot commands channel
            }
        }
        if (message.content.startsWith(prefix+"ship")){//if they're trying to use the ship command
            if (message.channel.name === "bot-commands"){//if the channel is bot commands
                var ship1 = message.content.split("-").splice(1);//first person had to be enclosed in dashes
                var ship2 = message.content.split("~").splice(1);//second person has to be enclosed in squiggly lines
                if (!ship1[0]||!ship2[0]){//if one person is missing
                    message.reply("proper use: ?ship -(name1)- ~(name2)~");//tellls the person what the proper use of the command is
                    return;
                }
                var shipPercent = Math.floor(Math.random()*100);//makes a random number 0-100
                switch (ship1[0].toLowerCase()){//detects who the first person is in lower case
                    case "damon":;//if it's me
                    shipPercent = 0;//don't ship niggas with me
                    break;
                }
                if (ship2[0].toLowerCase()==="damon"){//if the second person is me
                    shipPercent = 0;//don't ship niggas with me
                }
                message.channel.send("**"+ship1[0]+"**"+" x "+"**"+ship2[0]+"**"+" - it's a "+"``"+shipPercent+"%"+"``"+" match");//tells the person the decision in the shipping
            }else{
                message.reply("use the bot commands channel!")//warns the user to use the bot commands channel
            }
        }
        if (message.content.startsWith(prefix+"meme add")){//detects if the message starts with "?meme add"
            teeth.push(message.embeds);//TRYING TO MAKE MEME DATABASE USER ADDS MEME AND CAN CALL A RANDOM ONE
        }
    switch(message.content){//detects more simple commands
        case prefix+"help":;//activation of help command
        if (message.channel.name === "bot-commands"){//if the command is being used in the proper channel
            message.channel.send("**Current Commands:**")//sends a message saying "current commands" in bold
            message.channel.send(commands.concat())//lists commands in one message, but each on a different line
        } else {
            message.reply("use the bot commands channel!")//warns the user to use the bot commands channel
        }
        break;
        case prefix+"p":;
        teeth.push("BUM");
        break;
        case prefix+"noob":;
        message.channel.send(teeth);
        break;
    }
}
});
client.login(process.env.BOT_TOKEN);
