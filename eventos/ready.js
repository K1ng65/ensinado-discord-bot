module.exports = async (bot) => { //faz algo qdo o bot liga
  console.log('!!! estou pronto para ser usado !!!\n  To de olho em '+bot.channels.cache.size+' canais (chats + calss)');

  const avatares = [
    "avatar1",
    "avatar2",
    "avatar3"
  ] 
  
  const status = [
    "online",
    "dnd",
    "idle"
  ]
  
  const atividades = [
     ["status1", "LISTENING"],
     ["status2", "PLAYING"],
     ["status3", "WATCHING"],
     ["status4", "WATCHING"]//bot adicionar quantos quiser :V
    ];
  setInterval(async () => { // controlar o intervalo
    let i = Math.floor(Math.random() * atividades.length + 1) - 1
      await bot.user.setActivity(atividades[i][0], { type: atividades [i][1] });
  }, 10000); // intervalo

  setInterval(async () => {
    let b = Math.floor(Math.random() * status.length + 1) - 1
      await bot.user.setStatus(status[b])
  }, 20000)

  setInterval(async () => {
    let c = Math.floor(Math.random() * avatares.length + 1) - 1
      await bot.user.setAvatar(avatares[c])
  }, 400000)

}
