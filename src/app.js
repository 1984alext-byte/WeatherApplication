const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "data", "cities.json");
const cities = JSON.parse(fs.readFileSync(filePath, "utf8"));

console.log("Список міст:");
cities.forEach((city) => {
    console.log(`${city.id}. ${city.name} (${city.country}) - lat: ${city.lat}, lon: ${city.lon}`);
});