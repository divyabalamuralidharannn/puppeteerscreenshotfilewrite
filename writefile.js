const puppeteer=require('puppeteer');
const fs=require('fs/promises')
async function start(){
  const browser=await puppeteer.launch({ headless: "new" });
  const page=await browser.newPage();
  await page.goto("https://dev.valurite.in/");
const names=['red','orange','yellow'];
await fs.writeFile("name.txt",names.join("\r\n"));

  await browser.close()
  }
  start();