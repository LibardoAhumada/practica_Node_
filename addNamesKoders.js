const fs = require("fs");
const names = process.argv[2];

const content = fs.readFileSync("namesOfKoders.json", "utf-8");

const contentAsObject = JSON.parse(content);

contentAsObject.push({koder: "Libardo"});

fs.writeFileSync("namesOfKoders.json", JSON.stringify(contentAsObject));
