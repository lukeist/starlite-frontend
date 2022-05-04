# starlite-frontend


A WebApp, with real-time market data (finnhub.io's API), lets you follow your favorite stocks, create your own portfolio and test your trades and strategies.

The API from finnhub.io is limited to a certain number of requests. If any page is taking too long to load please just refresh it. 
I apologize for this inconvenience.


1. Navigation Bar:
- Search from API is not accurate for company names so input stocks' symbols is suggested.
- Portfolio Tab to Portfolio Page: you can generate a sample data to test. Or you can go to a certain stock's page, purchase your favorite stock there, then see you portfolio. 
- Message Tab is for all notifications and historic trades.
- Account Tab to Account Page which is still in development.

2. Front Page:
- View the latest news about the market.
- There are watch lists on the right. Feel free to add, edit and remove to test them.
- Click on any list or stock to go to their own page.  

3. Stock Page:
If you want to look for a certain stock, click on its name on the front page or type it in the browser: starlite.netlify.app/stock/<SymbolOfStock>, for example:
- starlite.netlify.app/stocks/AAPL or starlite.netlify.app/stocks/aapl for Apple
- starlite.netlify.app/stocks/MSFT or starlite.netlify.app/stocks/msft for Microsoft
  
The stock price on this page is live by using websocket. 

From here you can buy, sell by number of shares or the amount of dollars you have. 
You can also add them to your favorite watch list by using the button "Watch <Symbol>"

4. List Page:
If you want to see a certain list, click on its name on the front page or use its id in the browser: https://starlite.netlify.app/lists/<id>, for example: 
- https://starlite.netlify.app/lists/6243cb9f92404d2813e29144
From here you can navigate to other lists by clicking on the right menu.
  


