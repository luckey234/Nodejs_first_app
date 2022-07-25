const EventEmitter =require('events');

var url = 'http://mylogger.io/log'
class Logger extends EventEmitter{
     log(messege) {
        //send an HTTP Request
        console.log(messege);
        this.emit('messegelogged',{id:1,url:'http//'});
    }
    
}

module.exports = Logger;
module.exports.url = url;
