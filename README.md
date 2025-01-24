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

## Use Cases
- Daily Emotional Support 
- 24/7 virtual therapist
- immediate emotional support and coping strategies.

## Installation Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/0xmetaschool/therapist-bot.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd therapist-bot
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
   Create an account on https://railway.com/
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

## Screenshots
<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/0xmetaschool/therapist-bot/blob/main/public/therapist-bot-landing-page.png?raw=true" alt="Therapist-bot landingpage screenshot" style="width: 49%; border: 2px solid black;" />
  <img src="https://github.com/0xmetaschool/therapist-bot/blob/main/public/therapist-bot-features.png?raw=true" alt="Therapist-bot features screenshot" style="width: 49%; border: 2px solid black;" />
</div>
<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/0xmetaschool/therapist-bot/blob/main/public/therapist-bot-technique.png" alt="Therapist-bot technique screenshot" style="width: 49%; border: 2px solid black;" />
  <img src="https://github.com/0xmetaschool/therapist-bot/blob/main/public/therapist-bot-connect.png?raw=true" alt="Therapist-bot connect screenshot" style="width: 49%; border: 2px solid black;" />
</div>


## Bot Commands

- `/start` - Begin conversation with the bot  
- `/help` - Show available commands  
- `/reset` - Start a fresh conversation  
- `/resources` - Get mental health resources  

## Disclaimer

This bot is not a replacement for professional mental health services. It's designed to provide supplementary support and should not be used in crisis situations.

## Contributing
We love contributions! Here's how you can help make the project even better:
* Fork the project (gh repo fork https://github.com/0xmetaschool/ResearchPaperAI.git)
* Create your feature branch (git checkout -b feature/AmazingFeature)
* Commit your changes (git commit -m 'Add some AmazingFeature')
* Push to the branch (git push origin feature/AmazingFeature)
* Open a Pull Request 

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

This project is licensed under the MIT License - see the [LICENSE](https://github.com/0xmetaschool/therapist-bot/blob/main/LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository or contact us through the website.
