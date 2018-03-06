let expect    = require("chai").expect;

let Bus = require("../src/Bus");

let log = "";

describe("Pub/Sub pattern", function() {
  describe("can sub", function() {
    it("subscribes, fires events, unsubscribes", function() {
      log = "";
      const bus = new Bus();
      let handler = function(message){
        log+=(`[${message.sender}]: ${message.text}`)
      }

      bus.subscribe('chat', handler);
      bus.publish('chat', { sender: 'Oz', text: 'Hello' });
      expect(log).to.equal('[Oz]: Hello');
    });
  });
  describe("deliver event to only those who subscribed", function() {
    it("creates 2 rooms, but send event to only one of them", function() {
      log = "";
      const bus = new Bus();
      let FBIbugger = function(message){
        log+=(`[${message.sender}]: ${message.text}`)
      }
      let hackers = function(message){
        log+=(`[${message.sender}]: ${message.text}`)
      }

      bus.subscribe('chat', FBIbugger);
      bus.subscribe('console-log', hackers);
      bus.publish('chat', { sender: 'Oz', text: 'Hello' })

      expect(log).to.equal('[Oz]: Hello');
    });
  });
  describe("send message to room that does not exist", function() {
    it("send message to nowhere", function() {
      log = "";
      const bus = new Bus()
      bus.publish('nowhere', { })
    });
  });
});
