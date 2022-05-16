# Starlite - Online Trading Platform
A WebApp, with real-time market data (finnhub.io's API), lets you follow your favorite stocks, create your own portfolio and test your trades and strategies.

**Link to project:** https://starlite.netlify.app/

![alt tag](https://i.ibb.co/1JDQ6Yv/starlite-online-trading-platform-hiluan-1.jpg)

## How It's Made:

**Tech used:** React.JS, Node.JS, Express.Js, MongoDB, Redux, HTML, CSS, JavaScript

1. Navigation Bar:

![alt tag](https://i.ibb.co/dg8Hspy/starlite-online-trading-platform-hiluan-2.jpg)

- Search from API is not accurate for company names so input stocks' symbols are suggested.
- Portfolio Tab to Portfolio Page: you can generate sample data to test. Or you can go to a certain stock page, purchase your favorite stock there, then see your portfolio. 
- The message Tab is for all notifications and historic trades.
- Account Tab to Account Page which is still in development.

2. FrontPage:
- View the latest news about the market.
- There are watch lists on the right. Feel free to add, edit and remove to test them.
- Click on any list or stock to go to their own page.  

3. Stock Page:

![alt tag](https://i.ibb.co/VgXSftx/starlite-online-trading-platform-hiluan-3.jpg)

If you want to look for a certain stock, click on its name on the front page or type it in the browser: starlite.netlify.app/stocks/:SymbolOfStock, for example:
- https://starlite.netlify.app/stocks/AAPL or https://starlite.netlify.app/stocks/aapl for Apple
- https://starlite.netlify.app/stocks/MSFT or https://starlite.netlify.app/stocks/msft for Microsoft
  
The stock price on this page is updated in real-time by using WebSocket. 

From here you can buy, or sell-by a number of shares, or the number of dollars you have. 
You can also add them to your favorite watch list by using the button "Watch <Symbol>"

4. List Page:
If you want to see a certain list, click on its name on the front page or use its id in the browser: https://starlite.netlify.app/lists/:id, for example: 
- https://starlite.netlify.app/lists/6243cb9f92404d2813e29144
From here you can navigate to other lists by clicking on the right menu.

## Optimizations

The API from finnhub.io is limited to a certain number of requests. Therefore the page could be loaded faster using paid API. 
Websocket requests and responses should be optimized for better performance.

If any page takes too long to load please refresh it. 

## Lessons Learned:

Before using any API, the pros and cons should be weight because it's complicated to switch to another API later. 
Redux is awesome. The code that triggers the state change can be put inside as well as outside actions and reducers. 
  
  

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Waves - Lofi Music Player** https://github.com/hiluan/waves

**hiluan.dev - Portfolio Page** https://github.com/hiluan/hiluan-frontend
