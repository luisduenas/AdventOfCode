fs = require("fs");
fs.readFile("input.txt", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  const lines = data.split(/\r?\n/);
  let increased = 0;
  let previous = 0;
  lines.forEach((line) => {
    if (previous < line) {
      increased++;
    }
    previous = line;
  });
  console.log(increased);
});
