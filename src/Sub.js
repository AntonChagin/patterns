/**
* Паттерн Observer
* Subject - класс темы, который осуществляет рассылку сообщений среди своих подписчиков
*/

class Subject{
  constructor () {
    this.handlers = [];  // observers
  }
  /**
  * Вызывает обработчики сообщений
  *
  * @param  {String}    message   - Сообщение
  * @return {undefined}
  */

  fire(o, scope) {
    this.handlers.forEach(function(item) {
      item.call(scope, o);
    });

  }
}
module.exports = Subject;
