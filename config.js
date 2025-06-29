// Powered by DybyTech
const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID || "MEGALODON~MD~VBIllbqC#DQ1pcws0FkVAoM1JagdMN7VrHv8liftnvLtnWXro91o",
// add your Session Id 
REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
// msg anticall
CHATBOT: getConfig("CHATBOT") || "on", 
// on/off chat bot 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY MEGALODON-MD 🤍*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/7zfdcq.jpg",
// add custom menu and mention reply image url
PREFIX: getConfig("PREFIX") || ".", 
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐌𝐃",
// add bot name here for menu
STICKER_NAME: process.env.STICKER_NAME || "꧁༒✺⃟𝕋𝕙𝕖ℝ𝕖𝕒𝕝𝕜𝕚𝕟𝕘✺⃟༒꧂",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custom emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// choose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links without removing member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "50943057090",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "꧁༒✺⃟𝕋𝕙𝕖ℝ𝕖𝕒𝕝𝕜𝕚𝕟𝕘✺⃟༒꧂",
// add bot owner name    
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// anti bad words  
MODE: process.env.MODE || "private",
// public/private/inbox/group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// kick user if share link 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// false if want private mode
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// show typing status   
READ_CMD: process.env.READ_CMD || "false",
// mark commands as read 
DEV: process.env.DEV || "50943057090",
// your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// anti view once 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// auto recording status 
};
