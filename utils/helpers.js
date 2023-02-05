module.exports = {
  format_date: (date) => {
    return date.toLocaleDateString();
  },
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }
    return word;
  },
  format_amount: (amount) => {
    return parseInt(amount).toLocaleString();
  },
  get_emoji: () => {
    const randomNum = Math.random();
    if (randomNum > 0.7) {
      return `(ツ)`;
    } else if (randomNum > 0.4) {
      return `(◕‿◕✿)`;
    } else {
      return `ʕ•ᴥ•ʔ`;
    }
  },
};
