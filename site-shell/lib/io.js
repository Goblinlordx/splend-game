module.exports = function(io){

  // catch errors
  io.on('error', function(err){
    throw err;
  })

  // Set Socket.io listeners by creating a socket.io middleware
  // attachEventlisteners would live in `/controllers`
  // io.use(attachEventlisteners);

  io.on('connection', function (socket) {
    console.log('SOCKET.IO: a user connected');
    
    /*
    *  Client hello
    */
    socket.emit('data', { type: 'hello' });
    
    
    /*
    *  Disconnection detection
    */
    socket.on('disconnect', function(){
      console.log('SOCKET.IO: User disconnected');
    });
    
    /*
    *  Enter chat room
    */
    socket.on('enter-chat', function(roomId) {
      console.log('SOCKET.IO: User entered chatroom id#: ' + roomId);
    });
    
  });

  return io; // so it can be used in app.js ( if need be )
}