const assert = require('assert');
const opn = require('opn');
const app = require('../server');

const DEFAULTS = {
  server: {
    port: 3900,
    hostname: '127.0.0.1'
  }
};

class UI {
  constructor(config) {
    this.config = Object.assign({}, DEFAULTS, config);
    assert(typeof this.config.apps === 'object', 'App Config Required');
    this.app = app(this.config.apps);
  }
  start() {
    this.app.listen(this.config.server);
    if (~~this.config.server > 0) {
      opn(`http://localhost:${this.config.server}`);
    } else if (typeof this.config.server === 'object') {
      if (this.config.server.hostname && this.config.server.port) {
        opn(`http://${this.config.server.hostname}:${this.config.server.port}`);
      }
    }
  }
}

module.exports = UI;
