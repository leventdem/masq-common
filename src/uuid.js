/**
 * Genreate a UUID
 * @param {int} len - Length of string to be generated
 * @returns {string} - The generated uuid
 */
const generateUUID = (len = 32) => {
  let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('')
  if (typeof len !== "number") {
    len = Math.floor(Math.random() * chars.length)
  }
  let str = ''
  for (let i = 0; i < len; i++) {
      str += chars[Math.floor(Math.random() * chars.length)]
  }
  return str
}

module.exports.generateUUID = generateUUID
