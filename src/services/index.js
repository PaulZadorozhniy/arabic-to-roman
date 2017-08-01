const arabicToRoman = require('./arabic-to-roman/index.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(arabicToRoman);
};
