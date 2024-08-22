
 module.exports = {
 config: {
 name: "top",
 version: "1.0",
 author: "Loufi",
 role: 0,
 shortDescription: {
 en: " 𝐁𝐎𝐑𝐎𝐓𝐎 𝐑𝐈𝐒𝐇𝐄𝐓 "
 },
 longDescription: {
 en: ""
 },
 category: "group",
 guide: {
 en: "{pn}"
 }
 },
 onStart: async function ({ api, args, message, event, usersData }) {
 const allUsers = await usersData.getAll();

 const topUsers = allUsers.sort((a, b) => b.money - a.money).slice(0, 15);

 const topUsersList = topUsers.map((user, index) => `${index + 1}. ${user.name}: ${user.money}`);

 const messageText = `𝐁𝐨𝐫𝐮𝐭𝐨 𝐭𝐨𝐩 𝐫𝐢𝐬𝐡𝐞𝐭 💰:\n${topUsersList.join('\n')}`;

 message.reply(messageText);
 }
};
