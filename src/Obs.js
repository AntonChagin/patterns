

class Observer{
  /**
  * Подписывает наблюдателя на означенную тему
  *
  * @param  {Subject}   sub     - Имя темы
  * @param  {Function}  handler - Обработчик сообщения
  * @return {undefined}
  */
  subscribe(sub,handler) {
    sub.handlers = sub.handlers || [];
    sub.handlers.push(handler);
  }

  /**
  * Отписывает наблюдателя от темы
  *
  * @param  {Subject}   sub     - Имя темы
  * @param  {Function}  handler - Обработчик сообщения
  * @return {undefined}
  */
  unsubscribe(sub,handler) {
    sub.handlers = sub.handlers.filter(
      function(item) {
        if (item !== handler) {
          return item;
        }
      }
    );
  }
}

module.exports = Observer;
