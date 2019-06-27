const program = require("commander");
const pkg = require("./package.json");
const { listScribbbles, newScribbble } = require("./scribbblr");

program.version(pkg.version);

program
  .command("list")
  .description("Fetch all scribbbles")
  .action(listScribbbles);

program
  .command("new")
  .description("Add a new scribbble")
  .option("-c, --content", "Content of the scribbble")
  .option("-d, --date", "Date of the scribbble")
  .action(newScribbble);

program.parse(process.argv);

if (program.args.length === 0) program.help();
