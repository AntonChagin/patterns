/**
* Паттерн Pub/Sub
* Bus - шина сообщений
*/
class Bus {
  constructor () {
    // Ключ - имя комнаты, значение - массив подписчиков
    this.rooms = {}
  }

  /**
  * Публикует сообщения для всех подписчиков комнаты.
  *
  * @param  {String}    room    - Имя комнаты
  * @param  {Object}    message - Сообщение
  * @return {undefined}
  */
  publish (room, message) {
    // если комнаты не существует или нет подписчиков, не делаем ничего
    if(!this.rooms[room] || !this.rooms[room].queue.length) return;

    // проходим по очереди и вызываем подписки
    var sendto = this.rooms[room].queue;
    sendto.forEach(function(item) {
      item(message || {});
    });
  }

  /**
  * Подписывает обработчик на комнату
  *
  * @param  {String}    room    - Имя комнаты
  * @param  {Function}  handler - Обработчик сообщения
  * @return {undefined}
  */
  subscribe (room, handler) {
    // создаем объект room, если еще не создан
    if(!this.rooms[room]) this.rooms[room] = { queue: [] };
    // добавляем handler в очередь
    var index = this.rooms[room].queue.push(handler) -1;
  }
}
module.exports = Bus;
