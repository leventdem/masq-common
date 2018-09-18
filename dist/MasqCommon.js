(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.MasqCommon = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var ERRORS = {
  NOLOGGEDUSER: 'No logged user',
  WRONGPARAMETER: 'One or several parameters are wrong',
  WRONGPASSPHRASE: 'The given passphrase is wrong',
  NOURLPROVIDED: 'No url provided',
  EMPTYUSERLIST: 'User list is empty',
  NOUSERNAME: 'No username provided',
  NOPASSPHRASE: 'No passphrase provided',
  EXISTINGUSERNAME: 'The username already exists',
  EXISTINGURL: 'The application url already exists',
  FUNCTIONNOTDEFINED: 'The function is not defined',
  USERNAMENOTFOUND: 'The username does not exist',
  NOEXISTINGKEY: 'The required key does not exist',
  NOVALUE: 'No value provided',
  NOTOKEN: 'Token does not exist',
  BADTOKEN: 'Token is not valid',
  BADREQUEST: 'Bad request',
  NOTAUTHORIZED: 'Not authorized',
  ENCRYPTIONERROR: 'Encryption error',
  DECRYPTIONERROR: 'Decryption error',
  NOIMPORTRULES: 'No import rules provided'

  /**
    * @typedef MasqError
    * @type {Object}
    * @property {boolean} error
    * @property {int} status - THe status of the error
    * @property {string} message - The status of the error
    * @property {string} name - The name of the error
    * @property {string} stack - The stack
    */

  /**
   * Use this fonction to check if the required parameters
   * are present in the received object.
   * @param {object} obj - The object we want to check
   * @param {array} parameters - The array with all the keys we want to test
   * @returns {masqError}
   */
};var checkObject = function checkObject(obj, parameters) {
  for (var i in parameters) {
    if (!obj[parameters[i]] || obj[parameters[i]] === '') {
      var error = {
        message: 'The parameter ' + parameters[i] + ' is required',
        name: ERRORS.WRONGPARAMETER,
        error: true
      };
      throw error;
    }
  }
};

/**
 * Generate a masqError object, the name must be
 * one of ERRORS.
 *
 * @param {string} name - The name of the error
 * @param {string} message
 * @param {string} status
 */
var generateError = function generateError(name, message, status) {
  var err = {
    name: name || '',
    message: message || '',
    status: status || '',
    error: true
  };
  return err;
};

// export default toArray
// export { checkObject, generateError, ERRORS, toArray, bufferToHexString, toString, hexStringToBuffer, deriveKey, randomString }
module.exports.ERRORS = ERRORS;
module.exports.generateError = generateError;
module.exports.checkObject = checkObject;
'use strict';

/**
 * Genreate a UUID
 * @param {int} len - Length of string to be generated
 * @returns {string} - The generated uuid
 */
var generateUUID = function generateUUID() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;

  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
  if (typeof len !== "number") {
    len = 32;
  }
  var str = '';
  for (var i = 0; i < len; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
};

module.exports.generateUUID = generateUUID;

},{}]},{},[1])(1)
});
