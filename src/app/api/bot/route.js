import { NextResponse } from 'next/server';
import TelegramBot from 'node-telegram-bot-api';
import OpenAI from 'openai';

// Validate environment variables and add logging
console.log('Initializing bot and OpenAI...');
console.log('Bot token exists:', !!process.env.TELEGRAM_BOT_TOKEN);
console.log('OpenAI key exists:', !!process.env.OPENAI_API_KEY);

if (!process.env.TELEGRAM_BOT_TOKEN) {
  throw new Error('TELEGRAM_BOT_TOKEN is not set in environment variables');
}

if (!process.env.OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY is not set in environment variables');
}

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Initialize Telegram Bot
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

// Verify bot connection
bot.getMe().then((botInfo) => {
  console.log('Bot connected successfully:', botInfo.username);
}).catch((error) => {
  console.error('Bot connection error:', error);
});

// Store user contexts
const userContexts = new Map();

// Handle commands
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

bot.onText(/\/reset/, async (msg) => {
  const chatId = msg.chat.id;
  userContexts.delete(chatId);
  await bot.sendMessage(chatId, 'Conversation reset. How can I help you today?');
});

bot.onText(/\/resources/, async (msg) => {
  const chatId = msg.chat.id;
  const resourcesMessage = `
Here are some helpful mental health resources:

🌟 Crisis Support:
- National Crisis Hotline: 988
- Crisis Text Line: Text HOME to 741741

🏥 Find Professional Help:
- Psychology Today Therapist Finder
- BetterHelp Online Therapy
- Talkspace Online Therapy

Remember, seeking help is a sign of strength, not weakness.
  `;
  await bot.sendMessage(chatId, resourcesMessage);
});

// Handle regular messages
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const userMessage = msg.text;

  // Skip if message is a command or empty
  if (!userMessage || userMessage.startsWith('/')) return;

  try {
    // Get or initialize user context
    let userContext = userContexts.get(chatId) || [];
    
    // Add user message to context
    userContext.push({ role: 'user', content: userMessage });

    // Keep context length manageable
    if (userContext.length > 10) {
      userContext = userContext.slice(-10);
    }

    // Add therapy-focused system message
    const messages = [
      {
        role: 'system',
        content: `You are an empathetic and professional therapy assistant. Your responses should:
        - Show genuine empathy and understanding
        - Use a warm, supportive tone
        - Provide practical coping strategies when appropriate
        - Encourage professional help for serious concerns
        - Maintain appropriate boundaries
        - Focus on emotional support and wellness
        Remember: You cannot diagnose or replace professional mental health care.`
      },
      ...userContext
    ];

    // Get OpenAI response
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: messages,
      temperature: 0.7,
      max_tokens: 1000,
    });

    const response = completion.choices[0].message.content;

    // Add assistant response to context
    userContext.push({ role: 'assistant', content: response });
    userContexts.set(chatId, userContext);

    // Send response
    await bot.sendMessage(chatId, response);

  } catch (error) {
    console.error('Error processing message:', error);
    await bot.sendMessage(chatId, 'I apologize, but I encountered an error. Please try again later or use /reset to start fresh.');
  }
});

// Status endpoint for verifying the bot is running
export async function GET() {
  return NextResponse.json({ 
    status: 'Bot is running',
    botInitialized: !!bot,
    openaiInitialized: !!openai
  });
}