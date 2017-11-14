//const Message = require('./message.model');
//import {default as Message, map, reduce } from './message.model';
// importar tudo
//import * as _ 'lodash';
import Message from './message.model';

class ImageMessage extends Message {
  constructor(text = '', created = Date.now(),
    url = '', thumbnail = '') {
    super(text, created);
    this.url = url;
    this.thumbnail = thumbnail;
  }

  /**
   * Method overriden
   * @returns String
   */
  toString() {
    return `Photo${super.toString()} ` +
           `- Url: ${this.url} ` +
           `- Thumbnail: ${this.thumbnail}`;
  }
}

// module.exports = ImageMessage;
export default ImageMessage;
