import csv from 'csvtojson';

export default class Importer {
  /**
   *
   * @param {string} file
   * @returns {Promise<any>}
   */
  import(file) {
    return csv().fromFile(file);
  }

  importSync(file) {

  }
}
