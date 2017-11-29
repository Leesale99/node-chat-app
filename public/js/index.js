var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});

socket.emit('createMessage', {
  from: 'me@gmail.com',
  text: 'Hello from the client'
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});
