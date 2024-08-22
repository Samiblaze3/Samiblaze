module.exports = {
    config: {
        name: "salut",
        version: "1.0",
        author: "kivv",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("𝐒𝐚𝐥𝐮𝐭 𝐞𝐧𝐟𝐨𝐢𝐫𝐞 ! 𝐒𝐚 𝐭𝐞 𝐝𝐢𝐬 𝐪𝐮'𝐨𝐧 𝐦𝐨𝐮𝐠𝐨𝐮 𝐭𝐚 𝐦𝐞̀𝐫𝐞 🧑‍🦯");
}
};
