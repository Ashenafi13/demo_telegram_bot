const {Bot} = require("grammy");  

require("dotenv").config(); // this config the environment

const bot = new Bot(process.env.Token); // this is the get bot token from the environment

bot.command("start", (ctx) => {
    // this is called when the bot is started
    bot.api.sendMessage(ctx.chat.id, "Hi, Welcome", {
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [
            { text: "Button1", callback_data: "button1" },
            { text: "Button2", callback_data: "button2" },
          ],
          
        ],
      }),
    });
  });

  bot.callbackQuery("button1", (ctx) => {
    callback(ctx,1); // this called when button 1 is clicked
  });

  bot.callbackQuery("button2", (ctx) => {
    callback(ctx,2); // this called when button 1 is clicked
  });
  
  function callback(ctx,id){
    bot.api.sendMessage(ctx.chat.id, "Thie is Button"+id); // this is replay to telegram bot when a button clicked 
  }

  bot.start();