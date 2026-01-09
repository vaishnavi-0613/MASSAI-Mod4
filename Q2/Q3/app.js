// app.js

import os from "os";
import fs from "fs/promises";

/* =========================
   Part A – OS Module
========================= */

// Print free memory
console.log("Free Memory:", os.freemem());

// Print total number of CPU cores
console.log("Total CPU Cores:", os.cpus().length);

/* =========================
   Part B – File System CRUD
========================= */

async function fileOperations() {
  try {
    // Create data.txt
    await fs.writeFile("data.txt", "Hello World");
    console.log("data.txt created");

    // Create Readme.md
    await fs.writeFile("Readme.md", "## This is first line in Readme");
    console.log("Readme.md created");

    // Read data.txt and print content
    const data = await fs.readFile("data.txt", "utf-8");
    console.log("Content of data.txt:");
    console.log(data);

    // Append new line to data.txt
    await fs.appendFile("data.txt", "\nThis is second line");
    console.log("Data appended to data.txt");

    // Delete Readme.md
    await fs.unlink("Readme.md");
    console.log("Readme.md deleted");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Call the function
fileOperations();
