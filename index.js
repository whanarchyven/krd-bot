const TelegramApi=require('node-telegram-bot-api')

const token='6384276235:AAEGyfBmhCSgizgLa3_vRbZ1VSFcPtYZAHk'

const bot= new TelegramApi(token,{polling:true})

bot.setMyCommands([
    {command:'/start',description:'Привязать бота к чату'}
])

bot.on('message',async (msg)=>{
    const text=msg.text;
    const chatId=msg.chat.id
    console.log(chatId,text)

    if(text=='/start'){
        bot.sendMessage(chatId,`Код привязки бота: <b>${chatId}</b>`,{parse_mode:'HTML'})
    }
})
