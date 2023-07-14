import puppeteer from 'puppeteer-core';

async function run(){
    let browser; 
    try {
       
        const browser = await puppeteer.launch();//({headless: true});

        const page = await browser.newPage();
        page.setDefaultNavigationTimeout(2*60*1000);

        await page.goto('https://steamcommunity.com/market/');

        const body = await page.$('body');

        const html = await page.evaluate(() =>
            document.documentElement.outerHTML
        );

        console.log(html)

    } catch (error) {
        
    }
    finally {
await browser?.close();
    }
}
run();