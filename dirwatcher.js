import fs from 'fs';
import { EventEmitter } from 'events';

export default class DirWatcher extends EventEmitter {
  watch(path, delay) {
    let prevCheck = [];
    setInterval(() => {
      fs.readdir(path, (err, files) => {
        const newFiles = files.filter((element, index, array) => !prevCheck.includes(element));
        if (newFiles.length) {
          this.emit('dirwatcher:changed', newFiles);
          prevCheck = [...prevCheck, ...newFiles];
        }
      });
    }, delay)
  }
}
