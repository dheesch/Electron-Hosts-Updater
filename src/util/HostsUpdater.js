import app from 'electron';
import fs from 'fs';

class HostsUpdater {
  constructor() {
    this.setHosts();
    this.setPreviouslyUsedHosts();
  }

  setHosts() {
    fs.readFile('/etc/hosts', 'r', (err, data) => {
      if (err) { throw err; }
      this.hosts = data;
    });
  }

  setPreviouslyUsedHosts() {
    app.getPath('appData'), 'r', (err, data) => {
      if (err) { throw err; }
      var path = data;

      fs.readFile(path, 'r', (err, data) => {
        if (err) { throw err; }
        this.previouslyUsedHosts = data;
      });
    });
  }
    
}

module.exports = HostsUpdater;