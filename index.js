const { Telegraf, Markup } = require('telegraf');

const BOT_TOKEN = '9271245471:AAEOKqIyBsu6XFTjMTSddu_o1gcV2_oUn9M'; // Вставь сюда токен
const WEB_APP_URL = 'https://goldix-drop.onrender.com'; // Сюда позже вставим наш Mini App

const bot = new Telegraf(BOT_TOKEN);

const PROMO_TEXT = 
`🔥 GOLDIX — Твой сочный дроп Standoff 2! 🔥

Хватит крутить кейсы из мусора и пыли,
На Goldix самые топовые скины заплыли!
Бабочки, керамбиты и пушки огнем —
Открывай кейсы и забирай ножи прямо сейчас! 🎁⚡`;

bot.start((ctx) => {
  const userName = ctx.from.first_name || 'Боец';

  ctx.reply(
    `Привет, ${userName}!\n\n${PROMO_TEXT}`,
    Markup.inlineKeyboard([
      [Markup.button.webApp('🎰 Открыть Goldix (Кейсы)', WEB_APP_URL)],
      [Markup.button.callback('📜 Инфо & Вывод', 'info')]
    ])
  );
});

bot.action('info', (ctx) => {
  ctx.answerCbQuery();
  ctx.reply(
    '💡 Как это работает?\n\n' +
    '1. Нажимай "Открыть Goldix"\n' +
    '2. Выбирай кейсы с ножами, перчатками и арканами\n' +
    '3. Выбивай редкий дроп из Standoff 2!'
  );
});

bot.launch();
