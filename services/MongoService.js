const Scribbble = require('../models/mongo/Scribbble')

const fetchScribbbles = async () => {
  try {
    const scribbbles = await Scribbble.find({}).lean()

    return scribbbles
  } catch (error) {
    console.error(error)

    return []
  }
}

const newScribbble = async (title, content, date) => {
  try {
    await Scribbble.create({
      title,
      content,
      date,
    })
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  fetchScribbbles,
  newScribbble,
}
