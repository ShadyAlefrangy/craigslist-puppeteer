import puppeteer from "puppeteer";
import * as cheerio from "cheerio";

async function main() {
    try {
        const browser = await puppeteer.launch({ headless: false});
        const page = await browser.newPage();
        await page.goto("https://accounts.craigslist.org/login");
        await page.type("input#inputEmailHandle", "koxope6845@tagbert.com");
        await page.type("input#inputPassword", "AaBbCc1234@#$");
        await page.click("button#login");
        await page.goto("https://accounts.craigslist.org/login/home?show_tab=searches");
        const content = await page.content();
        const $ = await cheerio.load(content);
        console.log($("body > article > section > fieldset > b").text());
    } catch (error) {
       console.error(error); 
    }
}

main();