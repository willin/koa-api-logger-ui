const opn = require('opn');
const dev = require('./dev');

const apps = {
  test1: {
    host: '127.0.0.1',
    port: 6379,
    db: 0,
    prefix: 'kal:'
  },
  test2: {
    host: '127.0.0.1',
    port: 6379,
    db: 0,
    prefix: 'kal:'
  },
  test3: {
    host: '127.0.0.1',
    port: 6379,
    db: 0,
    prefix: 'kal:'
  }
};

const app = dev(apps);
app.listen(3000);
opn('http://localhost:3000');
