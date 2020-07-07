const mongoose = require('mongoose')

const connectWithMongo = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGOOSE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })

    console.log(
      `MongoDB connected successfully using host: ${connection.connection.host}`
    )
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

module.exports = connectWithMongo
