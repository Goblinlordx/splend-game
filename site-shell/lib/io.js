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

    // do things

  });

  return io; // so it can be used in app.js ( if need be )
}