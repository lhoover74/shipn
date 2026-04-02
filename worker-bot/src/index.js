export default {
  async scheduled(event, env) {
    const res = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/getUpdates`);
    const data = await res.json();

    if (!data.result) return;

    for (const update of data.result) {
      const msg = update.message;
      if (!msg) continue;

      const chatId = msg.chat.id;
      const text = msg.text || '';

      let reply = 'Type /start to begin';

      if (text === '/start') {
        reply = 'Welcome to Ship n\' a Rip. Send anything to start your label.';
      }

      await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: reply })
      });
    }
  }
};
