var events = require('events');
const myEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
    console.log('I hear a scream!');
  }
  
  //Assign the event handler to an event:
    myEmitter.on('scream', myEventHandler);
  
  //Fire the 'scream' event:
    myEmitter.emit('scream');

  // First listener
    myEmitter.on('event', function firstListener() {
    console.log('Helloooo! first listener');
  });
  // Second listener
    myEmitter.on('event', function secondListener(arg1, arg2) {
    console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
  });
  // Third listener
    myEmitter.on('event', function thirdListener(...args) {
    const parameters = args.join(', ');
    console.log(`event with parameters ${parameters} in third listener`);
  });
  
     console.log(myEmitter.listeners('event'));
  
    myEmitter.emit('event', 1, 2, 3, 4, 5);

    myEmitter.removeAllListeners([myEmitter])
    console.log('Removed all liteners')
