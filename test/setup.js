import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

/** Mock document object */
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;

/** Mock window object */
global.window = win;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

/** Set data structures as immutable */
chai.use(chaiImmutable);