'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.practice6 = exports.practice5 = exports.practice4 = exports.practice3 = exports.practice2 = exports.practice1 = undefined;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Write a function that returns a Promise that
 * resolves to 'E-39'
 */
var practice1 = exports.practice1 = function practice1() {
  // TODO
};

/**
 * Write a function that returns a Promise that
 * waits 3 seconds and then resolves to 'E-39
 */
var practice2 = exports.practice2 = function practice2() {
  // TODO
};

/**
 * Write a function that returns an array of 3 promises
 * that each resolve to 'E-39-1', 'E-39-2', 'E-39-3' respectively
 */
var practice3 = exports.practice3 = function practice3() {
  // TODO
};

/**
 * Write a function that receives an argument 'n', and returns an array of
 * N promises that each resolve to 'E-39-${N}' respectively
 */
var practice4 = exports.practice4 = function practice4(n) {
  // TODO
};

/**
 * Write a function that receives a single character and returns a Promise that:
 * if the input is undefined or length different than 1, reject immediately with 'error
 * if the character is a number, resolves after 1 seecond to 'number'
 * if the character is a vowel, resolves after 2 seconds to 'vowel'
 * else resolves after 3 seconds to 'consonant'
 */
var practice5 = exports.practice5 = function practice5(c) {
  // TODO
};

/**
 * Write a function that receives a string category and:
 *
 * - if the category = 'explicit' reject to 'explicit joke'
 * - if the category is not provided, reject to 'no category'
 * - else retrieves a random Chuck Norris joke and:
 *  - if the returned joke includes the category 'explicit', reject to 'explicit joke'
 *  - else returns a Promise that resolves to the joke, plus a
 *    header = 'safe for E-39'
 *
 * API: https://api.chucknorris.io/jokes/random
 */
var practice6 = exports.practice6 = function practice6(category) {
  // TODO
};