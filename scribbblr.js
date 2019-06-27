const fs = require("fs");
const chalk = require("chalk");
const log = console.log;

const fetchScribbbles = () => {
  try {
    const scribbbles = fs.readFileSync("./scribbbles.json", "utf8");
    return JSON.parse(scribbbles);
  } catch (err) {
    return [];
  }
};

const listScribbbles = () => {
  const scribbbles = fetchScribbbles();

  log(chalk.blue("Here are your scribbbles!\n"));

  scribbbles.forEach(scribbble => {
    log(`Content: ${scribbble.content}`);
    log(`Date: ${scribbble.date}`);
    log(chalk.green("--------------------------------"));
  });
};

const newScribbble = (content, date) => {
  const scribbbles = fetchScribbbles();

  scribbbles.push({ content: content, date: date });
  storeScribbbles(scribbbles);
  log(chalk.green("New scribbble saved successfully."));
};

const storeScribbbles = scribbbles => {
  const data = JSON.stringify(scribbbles);
  fs.writeFileSync("scribbbles.json", data);
};

module.exports = {
  listScribbbles: listScribbbles,
  newScribbble: newScribbble
};
