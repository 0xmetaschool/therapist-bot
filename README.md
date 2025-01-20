# Therapist Bot

Therapist Bot is an AI-powered therapy companion that provides emotional support and wellness guidance. Built with Next.js and integrated with both Telegram and OpenAI's GPT-4, this platform offers a supportive space for users to express themselves and receive empathetic responses.

## Features

- 🎯 24/7 AI-powered emotional support  
- 🧘‍♀️ Personalized coping strategies  
- 💡 Guided wellness techniques  
- 🤖 Seamless Telegram integration  
- 🎨 Beautiful, calming UI design  
- 🔒 Private and secure conversations  

## Technologies Used

- **Next.js** for Frontend  
- **Tailwind CSS** for styling  
- **OpenAI API** for intelligent responses  
- **Telegram Bot API** for messaging  
- **Node.js** for bot server  
- **Railway.app** for bot deployment and hosting  

## Installation Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/0xmetaschool/therapist-bot.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd therapy-website
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up environment variables:**  
   Create an `.env` file in the root directory and add:

    ```env
    TELEGRAM_BOT_TOKEN=your_telegram_bot_token
    OPENAI_API_KEY=your_openai_api_key
    ```

5. **Deploy bot to Railway:**

    ```bash
    # Install Railway CLI
    npm i -g @railway/cli

    # Login and deploy
    railway login
    railway init
    railway up
    ```

6. **Run the Next.js development server:**

    ```bash
    npm run dev
    ```

    Visit `http://localhost:3000` to view the website.

## Bot Commands

- `/start` - Begin conversation with the bot  
- `/help` - Show available commands  
- `/reset` - Start a fresh conversation  
- `/resources` - Get mental health resources  

## Features in Detail

### AI-Powered Conversations

- Empathetic responses using GPT-4  
- Context-aware interactions  
- Personalized support  

### Beautiful UI

- Calming color schemes  
- Smooth animations  
- Responsive design  

### Telegram Integration

- Real-time messaging  
- Easy access via Telegram app  
- Persistent conversation history  
- 24/7 availability through Railway.app hosting  

### Security & Privacy

- No personal data storage  
- End-to-end encryption via Telegram  
- Anonymous conversations  
- Clear usage boundaries and disclaimers  

## Disclaimer

This bot is not a replacement for professional mental health services. It's designed to provide supplementary support and should not be used in crisis situations.

## Contributing

1. Fork the repository  
2. Create your feature branch:  

    ```bash
    git checkout -b feature/YourFeature
    ```

3. Commit your changes:  

    ```bash
    git commit -m 'Add YourFeature'
    ```

4. Push to the branch:  

    ```bash
    git push origin feature/YourFeature
    ```

5. Open a Pull Request  

## Running in Production

1. **Build the Next.js app:**

    ```bash
    npm run build
    ```

2. **Deploy the website to Vercel or your preferred platform.**

3. **Deploy the bot to Railway.app:**

    ```bash
    railway up
    ```

    The bot will run continuously on Railway.app's servers, ensuring 24/7 availability.

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue in the GitHub repository or contact us through the website.
