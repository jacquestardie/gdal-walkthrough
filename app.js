var tty = require('tty.js');

var app = tty.createServer({
  shell: 'bash',
  users: {
    sup: 'doodz'
  },
  port: 8080
});

app.listen();
