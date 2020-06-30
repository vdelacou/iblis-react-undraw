const puppeteer = require('puppeteer-core');
const axios = require("axios");
const fs = require('fs');
const request = require('request');
const changeCase = require('change-case');
const scrollPageToBottom = require('puppeteer-autoscroll-down');
const chromeLauncher = require('chrome-launcher');

const url = 'https://undraw.co/illustrations';

const main = async () => {
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['']
  });
  const response = await axios.get(`http://localhost:${chrome.port}/json/version`);
  const { webSocketDebuggerUrl } = response.data;

  // Connecting the instance using `browserWSEndpoint`
  const browser = await puppeteer.connect({ browserWSEndpoint: webSocketDebuggerUrl });
  const page = await browser.newPage();

  page.setDefaultTimeout(60000);

  await page.setViewport({ width: 1566, height: 768 });

  await page.goto(url, { waitUntil: 'networkidle0' });

  await scrollPageToBottom(page, 200, 1500);

  console.log('Page loaded');

  const images_url = await page.evaluate(() =>
    Array.from(document.getElementsByClassName('gridItem'), element => {
      if(element.firstElementChild && element.lastElementChild ){
        element.firstElementChild.firstElementChild.removeAttribute('class')
        return { svg: element.firstElementChild.innerHTML, name: element.lastElementChild.textContent };
      }
    })
  );

  images_url.filter(value => !!value).forEach(imageUrl => {
    fs.writeFileSync(`./undraw/${changeCase.pascalCase(imageUrl.name)}.svg`, imageUrl.svg)
  });

  console.log(`${images_url.filter(value => !!value).length} Image downloaded`);

  await browser.close();
};

main().catch(e => {
  console.log('Error : ', e);
});
