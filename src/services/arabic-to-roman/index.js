
const createController = require('./arabic-to-roman-controller.js');

module.exports = function () {
  const app = this;

  const options = {
    name: 'arabic-to-roman'
  };

  app.use('/arabic-to-roman', createController(options));
  app.service('arabic-to-roman');
};
