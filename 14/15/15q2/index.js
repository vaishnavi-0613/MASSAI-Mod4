import express from "express";
import os from "os";
import dns from "dns/promises";
import { readFileData } from "./read.js";

const app = express();
const PORT = 3000;

/* ---------------- TEST ROUTE ---------------- */
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

/* ---------------- READ FILE ROUTE ---------------- */
app.get("/readfile", async (req, res) => {
  try {
    const data = await readFileData();
    res.send(data);
  } catch (error) {
    res.status(500).send("Error reading file");
  }
});

/* ---------------- SYSTEM DETAILS ROUTE ---------------- */
app.get("/systemdetails", (req, res) => {
  const totalMemory = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
  const freeMemory = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);

  res.json({
    platform: os.platform(),
    totalMemory: `${totalMemory} GB`,
    freeMemory: `${freeMemory} GB`,
    cpuModel: os.cpus()[0].model,
    cpuCores: os.cpus().length // Bonus
  });
});

/* ---------------- GET IP ROUTE ---------------- */
app.get("/getip", async (req, res) => {
  try {
    const addresses = await dns.lookup("masaischool.com", { all: true });

    res.json({
      hostname: "masaischool.com",
      addresses: addresses
    });
  } catch (error) {
    res.status(500).send("DNS lookup failed");
  }
});

/* ---------------- START SERVER ---------------- */
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
