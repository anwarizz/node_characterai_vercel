This project takes the source code from the [Character AI Unofficial Node API](https://github.com/realcoloride/node_characterai) repository with slight modifications to make it run on Vercel. Here, I use [@sparticuz/chromium](https://github.com/Sparticuz/chromium) and `puppeteer-core` instead of using `puppeteer-extra` for StealthPlugin.

This approach successfully runs in the Vercel environment. In the original code, I encountered issues with Chromium not being found and not running on Vercel, so I opted for an alternative Chromium for serverless environments, which in this case is `@sparticuz/chromium` or `chrome-aws-lambda`.

Open node_characterai folder
