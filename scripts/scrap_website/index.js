const puppeteer = require('puppeteer');
const fs = require('fs');
const request = require('request');
const changeCase = require('change-case');
const scrollPageToBottom = require('puppeteer-autoscroll-down');

function download(uri, filename, callback) {
  request.head(uri, function(_err, _res, _body) {
    request(uri)
      .pipe(fs.createWriteStream(filename))
      .on('close', callback);
  });
}

const url = 'https://undraw.co/illustrations';

const main = async () => {
  const browser = await puppeteer.launch({
    headless: false, // true
  });

  const page = await browser.newPage();

  page.setDefaultTimeout(60000);

  await page.setViewport({ width: 1366, height: 768 });

  await page.goto(url, { waitUntil: 'networkidle0' });

  await scrollPageToBottom(page, 200, 1500);

  console.log('Page loaded');

  const images_url = await page.evaluate(() =>
    Array.from(document.getElementsByClassName('item__image'), element => {
      return { url: element.getAttribute('src'), name: element.getAttribute('alt') };
    })
  );

  console.log('Result: ' + JSON.stringify(images_url));

  images_url.forEach(imageUrl => {
    download(imageUrl.url, `./undraw/${changeCase.pascalCase(imageUrl.name)}.svg`, function() {
      console.log(`Image ${changeCase.pascalCase(imageUrl.name)} downloaded`);
    });
  });

  console.log(`${images_url.length} Image downloaded`);

  await browser.close();
};

main().catch(e => {
  console.log('Error : ', e);
});
