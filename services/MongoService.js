const Scribbble = require('../models/mongo/Scribbble')

module.exports = {
  fetchScribbbles: async function () {
    try {
      return await Scribbble.find({})
    } catch (error) {
      console.error(error)

      return []
    }
  },
}
