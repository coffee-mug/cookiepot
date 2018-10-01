const puppeteer = require('puppeteer');

async function main() {
  const browser = await puppeteer.launch()

  const page = await browser.newPage()
  await page.setRequestInterception(false)

  /** Req/Res Listener
   * TODO: to refactor, make it DRRRRY !
   */

   /**
  page.on('request', req => {
    let reqCookie = req.headers()['cookie']
    reqCookie ? console.log(req.headers()['cookie']) : ''
    //console.log(`REQUEST:\n${req.url()}${reqCookie ? "\nCookie" + reqCookie : ''}`)
    req.continue()
  })

  page.on('response', res => {
    let resCookie = res.headers()['cookie']
    resCookie ? console.log(resCookie) : ''
    //console.log(`RESPONSE:\n${res.url()}${resCookie ? "\nCookie" + resCookie : ''}`)
  })
  */

  await page.goto('https://www.renault.fr', { waitUntil: 60000})
  let cookies = await page.cookies()
  console.log(cookies)
  await browser.close()
}

main()