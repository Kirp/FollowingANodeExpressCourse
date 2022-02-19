
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const altData = require('./4-alternative-flavor');

require('./7-mind-grenade')

sayHi('mugumugu');
sayHi(names.jo);
sayHi(names.parable);

