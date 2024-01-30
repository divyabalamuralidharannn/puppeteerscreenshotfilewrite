const puppeteer=require('puppeteer');
async function start(){
const browser=await puppeteer.launch({ headless: "new" });
const page=await browser.newPage();
await page.goto("https://dev.valurite.in/");
await page.screenshot({path:"screenshot.png",fullPage : true})
await browser.close()
}
start();