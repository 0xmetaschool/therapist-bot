export function setupBotCommands(bot) {
    // Start command
    bot.onText(/\/start/, async (msg) => {
      const chatId = msg.chat.id;
      const welcomeMessage = `
  Hello! 👋 I'm your AI therapy companion. While I can't replace a licensed therapist, I'm here to:
  
  🎯 Provide a supportive space for you to express yourself
  🧘‍♀️ Share coping strategies and wellness techniques
  💡 Offer general guidance for managing daily challenges
  
  How are you feeling today?
      `;
      await bot.sendMessage(chatId, welcomeMessage);
    });
  
    // Help command
    bot.onText(/\/help/, async (msg) => {
      const chatId = msg.chat.id;
      const helpMessage = `
  Here are the available commands:
  
  /start - Begin our conversation
  /help - Show this help message
  /reset - Start a fresh conversation
  /resources - Get mental health resources
  
  Remember: I'm here to support you, but for serious concerns, please consult a licensed professional.
      `;
      await bot.sendMessage(chatId, helpMessage);
    });
  
    // Reset command to clear context
    bot.onText(/\/reset/, async (msg) => {
      const chatId = msg.chat.id;
      userContexts.delete(chatId);
      await bot.sendMessage(chatId, 'Conversation reset. How can I help you today?');
    });
  }