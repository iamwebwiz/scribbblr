const program = require('commander')
const connectWithMongo = require('./config/database')

require('dotenv').config()

connectWithMongo()

const {
  listScribbbles,
  newScribbble,
  findScribbble,
  deleteScribbble,
} = require('./scribbblr')

const pkg = require('./package.json')

program.version(pkg.version)

program
  .command('list')
  .description('Fetch all scribbbles')
  .action(listScribbbles)

program
  .command('new')
  .description('Add a new scribbble')
  .option('-t, --title', 'Title of the scribbble')
  .option('-c, --content', 'Content of the scribbble')
  .option('-d, --date', 'Date of the scribbble')
  .action(newScribbble)

program
  .command('find')
  .description('Find a single scibbble')
  .option('-t, --title', 'Title of the scribbble')
  .action(findScribbble)

program
  .command('delete')
  .description('Delete a scribbble')
  .option('-t, --title', 'Title of the scribbble')
  .action(deleteScribbble)

program.parse(process.argv)
