'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Write a function that returns a Promise that
 * resolves to 'E-39'
 */
var practice1 = exports.practice1 = function practice1() {
  return new Promise(function (resolve, reject) {
    resolve('E-39');
  });
};

/**
 * Write a function that returns a Promise that
 * waits 3 seconds and then resolves to 'E-39
 */
var practice2 = exports.practice2 = function practice2() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('E-39');
    }, 2000);
  });
};