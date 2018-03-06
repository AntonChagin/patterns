let expect    = require("chai").expect;

let Observer = require("../src/Obs");
let Subject = require("../src/Sub");

describe("Observer pattern", function() {
  describe("can sub and unsub", function() {
    it("subscribes, fires events, unsubscribes", function() {
      let log = "";
      let myTestHandler = function(item) {
        log+=(item);
      };

      let reader = new Observer();
      let theme = new Subject();
      reader.subscribe(theme,myTestHandler);
      theme.fire('first');
      reader.unsubscribe(theme,myTestHandler);
      theme.fire('second');
      expect(log).to.equal('first');
    });
  });
  describe("cheks that all subs received event", function() {
    it("send event to all subs", function() {
      let log = "";
      let myTestHandler = function(item) {
        log+=(item);
      };

      let theme = new Subject();
      let reader1 = new Observer();
      let reader2 = new Observer();
      let reader3 = new Observer();
      reader1.subscribe(theme,myTestHandler);
      reader2.subscribe(theme,myTestHandler);
      reader3.subscribe(theme,myTestHandler);
      theme.fire('1');
      expect(log).to.equal('111');
    });
  });
  describe("deliver event to only those who subscribed", function() {
    it("creates 2 subjects, but subscribes to only one of them", function() {
      let log = "";
      let myTestHandler = function(item) {
        log+=(item);
      };
      
      var cats = new Subject();
      var dogs = new Subject();
      var reader = new Observer();
      reader.subscribe(cats,myTestHandler);
      cats.fire('Cats are best!');
      dogs.fire('Dogs are best!');
      expect(log).to.equal('Cats are best!');
    });
  });
});
