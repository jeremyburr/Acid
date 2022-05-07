/*
 * Author : Martin Donk
 * Website : http://www.nerdamer.com
 * Email : martin.r.donk@gmail.com
 * Source : https://github.com/jiggzson/nerdamer
 * Can be used to load all add-ons with one require
 */

var nerdamer = require('./nerdamer/nerdamer.core.js');
require('./nerdamer/Algebra.js');
require('./nerdamer/Calculus.js');
require('./nerdamer/Solve.js');
require('./nerdamer/Extra.js');

//export nerdamer
module.exports = nerdamer;
