require('dotenv').config();
const TelegramBotService = require('../bot/telegram-bot');

try {
    new TelegramBotService();
    console.log('Bot service initialized successfully');
} catch (error) {
    console.error('Failed to initialize bot:', error);
}