const fs = require("fs");
const koders = [
    {koder1: "libardo"},{koder2: "hugo"}, {koder3: "fulanito"}];

const objString = JSON.stringify(koders);

fs.writeFileSync("namesOfkoders.json", objString, "utf-8");
