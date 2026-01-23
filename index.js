const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const inputCsvPath = path.join(__dirname, "input_countries.csv");
const canadaPath = path.join(__dirname, "canada.txt");
const usaPath = path.join(__dirname, "usa.txt");

// Deleting output files if they already exist
for (const p of [canadaPath, usaPath]) {
  try {
    if (fs.existsSync(p)) {
      fs.unlinkSync(p);
      console.log(`Deleted existing file: ${path.basename(p)}`);
    }
  } catch (err) {
    console.error(`Failed deleting ${p}:`, err.message);
  }
}

// write header line
const canadaStream = fs.createWriteStream(canadaPath, { flags: "a" });
const usaStream = fs.createWriteStream(usaPath, { flags: "a" });

const header = "country,year,population\n";
canadaStream.write(header);
usaStream.write(header);

// read CSV attached using stream + csv-parser and filter rows
fs.createReadStream(inputCsvPath)
  .pipe(csv())
  .on("data", (row) => {
    // Normalize country name fir case or space differences
    const country = String(row.country ?? "").trim().toLowerCase();
    const year = String(row.year ?? "").trim();
    const population = String(row.population ?? "").trim();

    const line = `${country},${year},${population}\n`;

    if (country === "canada") {
      canadaStream.write(line);
    } else if (country === "united states") {
      usaStream.write(line);
    }
  })
  .on("end", () => {
    canadaStream.end();
    usaStream.end();
    console.log("Done! Created canada.txt and usa.txt");
  })
  .on("error", (err) => {
    console.error("Error reading CSV:", err.message);
  });
