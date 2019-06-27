const fs = require("fs");
const chalk = require("chalk");

const fetchScribbbles = () => {
  try {
    const scribbbles = fs.readFileSync("./scribbbles.json", "utf8");
    return JSON.parse(scribbbles);
  } catch (err) {
    return [];
  }
};

let scribbblesArr = fetchScribbbles();

const listScribbbles = () => {
  if (scribbblesArr.length < 1) {
    console.log(chalk.inverse.red("There are no scribbbles yet."));
  } else {
    console.log(chalk.blue("Here are your scribbbles!\n"));

    scribbblesArr.forEach(scribbble => {
      console.log(`Title: ${scribbble.title}`);
      console.log(`Content: ${scribbble.content}`);
      console.log(`Date: ${scribbble.date}`);
      console.log(chalk.green("--------------------------------"));
    });
  }
};

const newScribbble = (title, content, date) => {
  if (findDuplicateTitle(title)) {
    console.log(
      chalk.red("This scribbble title already exist. Please try another.")
    );
  } else {
    scribbblesArr.push({ title: title, content: content, date: date });
    storeScribbbles(scribbblesArr);
    console.log(chalk.green("New scribbble saved successfully."));
  }
};

const findDuplicateTitle = title => {
  return scribbblesArr.find(scribbble => scribbble.title === title);
};

const storeScribbbles = scribbbles => {
  const data = JSON.stringify(scribbbles);
  fs.writeFileSync("scribbbles.json", data);
};

const findScribbble = title => {
  const scribbble = getScribbble(scribbblesArr, title);

  if (scribbble) console.log(showScribbbleDetails(scribbble));
  else console.log("Scribbble does not exist.");
};

const getScribbble = (scribbbles, title) => {
  return scribbbles.find(scribbble => scribbble.title === title);
};

const showScribbbleDetails = scribbble => {
  const details = `
    Title: ${scribbble.title}
    Content: ${scribbble.content}
    Date: ${scribbble.date}
  `;

  return details;
};

const deleteScribbble = title => {
  const scribbblesToKeep = scribbblesArr.filter(
    scribbble => scribbble.title !== title
  );

  if (scribbblesArr.length === scribbblesToKeep.length)
    console.log(chalk.red("Scribbble does not exist."));
  else {
    storeScribbbles(scribbblesToKeep);
    console.log(chalk.inverse.green("Scribbble has been deleted."));
  }
};

module.exports = {
  listScribbbles: listScribbbles,
  newScribbble: newScribbble,
  findScribbble: findScribbble,
  deleteScribbble: deleteScribbble
};
