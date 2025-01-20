const TelegramBot = require('node-telegram-bot-api');
const OpenAI = require('openai');

class TelegramBotService {
    constructor() {
        if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.OPENAI_API_KEY) {
            throw new Error('Missing environment variables');
        }

        this.bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });
        this.openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });

        this.userContexts = new Map();
        this.initializeBot();
    }

    initializeBot() {
        console.log('Bot is starting...');

        // Start command
        this.bot.onText(/\/start/, async (msg) => {
            const chatId = msg.chat.id;
            const welcomeMessage = `
Hello! 👋 I'm your AI therapy companion. While I can't replace a licensed therapist, I'm here to:

🎯 Provide a supportive space for you to express yourself
🧘‍♀️ Share coping strategies and wellness techniques
💡 Offer general guidance for managing daily challenges

How are you feeling today?
            `;
            await this.bot.sendMessage(chatId, welcomeMessage);
        });

        // Help command
        this.bot.onText(/\/help/, async (msg) => {
            const chatId = msg.chat.id;
            const helpMessage = `
Here are the available commands:

/start - Begin our conversation
/help - Show this help message
/reset - Start a fresh conversation
/resources - Get mental health resources

Remember: I'm here to support you, but for serious concerns, please consult a licensed professional.
            `;
            await this.bot.sendMessage(chatId, helpMessage);
        });

        // Reset command
        this.bot.onText(/\/reset/, async (msg) => {
            const chatId = msg.chat.id;
            this.userContexts.delete(chatId);
            await this.bot.sendMessage(chatId, 'Conversation reset. How can I help you today?');
        });

        // Handle all messages
        this.bot.on('message', this.handleMessage.bind(this));
    }

    async handleMessage(msg) {
        const chatId = msg.chat.id;
        const userMessage = msg.text;

        // Skip if message is a command or empty
        if (!userMessage || userMessage.startsWith('/')) return;

        try {
            let userContext = this.userContexts.get(chatId) || [];
            userContext.push({ role: 'user', content: userMessage });

            if (userContext.length > 10) {
                userContext = userContext.slice(-10);
            }

            const messages = [
                {
                    role: 'system',
                    content: `You are an empathetic and professional therapy assistant. Your responses should:
                    - Show genuine empathy and understanding
                    - give short very sweet replies.. the reply should not be greater than one small paragraph
                    - structure the reponse so that its is aesily readable and not all put together in one paragraph
                    - Use a warm, supportive tone
                    - Provide practical coping strategies when appropriate
                    - Encourage professional help for serious concerns
                    - Maintain appropriate boundaries
                    - Focus on emotional support and wellness
                    Remember: You cannot diagnose or replace professional mental health care.`
                },
                ...userContext
            ];

            const completion = await this.openai.chat.completions.create({
                model: "gpt-4-turbo-preview",
                messages: messages,
                temperature: 0.7,
                max_tokens: 1000,
            });

            const response = completion.choices[0].message.content;

            userContext.push({ role: 'assistant', content: response });
            this.userContexts.set(chatId, userContext);

            await this.bot.sendMessage(chatId, response);

        } catch (error) {
            console.error('Error processing message:', error);
            await this.bot.sendMessage(chatId, 'I apologize, but I encountered an error. Please try again later or use /reset to start fresh.');
        }
    }
}

module.exports = TelegramBotService;