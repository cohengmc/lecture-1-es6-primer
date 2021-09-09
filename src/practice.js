import fetch from 'node-fetch';

/**
 * Write a function that returns a Promise that
 * resolves to 'E-39'
 */
export const practice1 = () => {
  // TODO
};

/**
 * Write a function that returns a Promise that
 * waits 3 seconds and then resolves to 'E-39
 */
export const practice2 = () => {
  // TODO
};

/**
 * Write a function that returns an array of 3 promises
 * that each resolve to 'E-39-1', 'E-39-2', 'E-39-3' respectively
 */
export const practice3 = () => {
  // TODO
};

/**
 * Write a function that receives an argument 'n', and returns an array of
 * N promises that each resolve to 'E-39-${N}' respectively
 */
export const practice4 = n => {
  // TODO
};

/**
 * Write a function that receives a single character and returns a Promise that:
 * if the input is undefined or length different than 1, reject immediately with 'error
 * if the character is a number, resolves after 1 seecond to 'number'
 * if the character is a vowel, resolves after 2 seconds to 'vowel'
 * else resolves after 3 seconds to 'consonant'
 */
export const practice5 = c => {
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
export const practice6 = category => {
  // TODO
};
