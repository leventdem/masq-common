/**
 * Genreate a uuid
 *
 * @returns {string} - The generated uuid
 */
const generateUUID = () => {
  return 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/[x]/g, (c) => {
    const r = Math.random() * 16 | 0
    return (r & 0x3 | 0x8).toString(16)
  })
}

module.exports.generateUUID = generateUUID
