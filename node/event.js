const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// myEmitter.setMaxListeners(1)
myEmitter.on('event', () => {
  console.log('on 触发事件');
});
myEmitter.addListener('event', () => {
    console.log('触发事件');
  });
myEmitter.prependListener('event', () => {
    console.log('触发事件22');
  });
myEmitter.emit('event');
console.log(myEmitter.eventNames())