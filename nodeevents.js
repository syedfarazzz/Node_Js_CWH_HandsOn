const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const eventEmitter = new MyEmitter();

eventEmitter.on('WaterFull', ()=> {
    console.log('Turn of the Motor!');
    setTimeout( () => { console.log('Reminder: 3 seconds has been passed, trun of motor'); } , 3000);
});

console.log("The Script is running");
MyEmitter.emit('Waterfull');
console.log("The Script is still running");
eventEmitter.emit("WaterFull");

