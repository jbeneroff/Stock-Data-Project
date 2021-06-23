# Project Overview

## Real-Time Stock Data Project

[Deployed URL](URL)

## Project Description

The website will offer a search by stock ticker. A company profile with a financial overview for the searched stock will be provided. Real-time share price may be added as a PMVP using a second API, as well as my personal BUY/SELL rating for the stock.

## API and Data Sample

https://www.alphavantage.co/documentation/

https://www.alphavantage.co/query?function=OVERVIEW&symbol=AAPL&apikey=

https://financialmodelingprep.com/developer/docs/  (2nd API for Real-Time Stock Price Data)

```
{
    "Symbol": "AAPL",
    "AssetType": "Common Stock",
    "Name": "Apple Inc",
    "Description": "Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software, and online services. Apple is the world's largest technology company by revenue (totalling $274.5 billion in 2020) and, since January 2021, the world's most valuable company. As of 2021, Apple is the world's fourth-largest PC vendor by unit sales, and fourth-largest smartphone manufacturer. It is one of the Big Five American information technology companies, along with Amazon, Google, Microsoft, and Facebook.",
    "CIK": "320193",
    "Exchange": "NASDAQ",
    "Currency": "USD",
    "Country": "USA",
    "Sector": "TECHNOLOGY",
    "Industry": "ELECTRONIC COMPUTERS",
    "Address": "ONE INFINITE LOOP, CUPERTINO, CA, US",
    "FiscalYearEnd": "September",
    "LatestQuarter": "2021-03-31",
    "MarketCapitalization": "2177064370176",
    "EBITDA": "99820003328",
    "PERatio": "29.3234",
    "PEGRatio": "2.0216",
    "BookValue": "4.146",
    "DividendPerShare": "0.82",
    "DividendYield": "0.0062",
    "EPS": "4.449",
    "RevenuePerShareTTM": "19.143",
    "ProfitMargin": "0.2345",
    "OperatingMarginTTM": "0.2732",
    "ReturnOnAssetsTTM": "0.169",
    "ReturnOnEquityTTM": "1.034",
    "RevenueTTM": "325405999104",
    "GrossProfitTTM": "104956000000",
    "DilutedEPSTTM": "4.449",
    "QuarterlyEarningsGrowthYOY": "1.188",
    "QuarterlyRevenueGrowthYOY": "0.536",
    "AnalystTargetPrice": "159.44",
    "TrailingPE": "29.3234",
    "ForwardPE": "24.5098",
    "PriceToSalesRatioTTM": "6.8876",
    "PriceToBookRatio": "31.4705",
    "EVToRevenue": "6.8495",
    "EVToEBITDA": "21.601",
    "Beta": "1.2082",
    "52WeekHigh": "144.6279",
    "52WeekLow": "87.2323",
    "50DayMovingAverage": "127.0647",
    "200DayMovingAverage": "128.4757",
    "SharesOutstanding": "16687599616",
    "SharesFloat": "16670609616",
    "SharesShort": "123121920",
    "SharesShortPriorMonth": "94747255",
    "ShortRatio": "1.36",
    "ShortPercentOutstanding": "0.01",
    "ShortPercentFloat": "0.0074",
    "PercentInsiders": "0.066",
    "PercentInstitutions": "58.688",
    "ForwardAnnualDividendRate": "0.88",
    "ForwardAnnualDividendYield": "0.0068",
    "PayoutRatio": "0.1872",
    "DividendDate": "2021-05-13",
    "ExDividendDate": "2021-05-07",
    "LastSplitFactor": "4:1",
    "LastSplitDate": "2020-08-31"
}
```



## Wireframes

[Wireframe](https://wireframe.cc/pro/pp/9eb2ab47f452386)


#### MVP 

- Implement stock data API
- Allow search of ticker 
- Show company profile of searched ticker
- Remove previous search data when new search is made

#### PostMVP  

- Add second API with real-time share price
- Add Buy/Sell rating
- Add list of favorites that searched stocks can be added to

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|June 22| Project Approval / Core Application Structure / Code | Complete
|June 23| Code | Complete
|June 24| Initial Clickable Model / MVP  | Complete
|June 25| MVP / PMVP | Incomplete
|June 26-27| PMVP | Incomplete
|June 28| Presentation | Incomplete

## Priority Matrix

[Priority Matrix](https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1&title=PriorityMatrix.drawio#R7ZjbctowEIafhsvM%2BMAhucQQknZCQ0Pa9K6jWBusiWwxsjDQp%2B8Kny0yTYYEM21vQP4tr6RvV%2BuVO%2B4o3FxJsgymggLvOBbddNxxx3HOL3r4q4VtKgzci1RYSEZTyS6FOfsFmWhl6opRiGsdlRBcsWVd9EUUga9qGpFSrOvdngSvj7okCzCEuU%2B4qT4wqoJsWT2r1K%2BBLYJ8ZNvK7oQk75wJcUCoWFck97LjjqQQKm2FmxFwzS7nkj43eeFuMTEJkXrNA0ky9s7mt1%2B%2BrX6MPnsjfuX%2FHJxlVhLCV9mCs8mqbU4AIjrUIPHK5ySOmd9xvUCFHAUbm%2BkDQA2O5cTsYrkYJiBCUHKLXdYl0JxnUGGZaxI4USypmyeZXxeFuWKEmWA4sGNlIWjnDsgisJdf5yZisZI%2BZE9VATYMDfp%2FMKSIXIAyDGGjsuxS2vnnDb5y%2Fvvq1b5qGuoe11XdPa7qc2TlUZZgc6Gb9yyEXMZRKncMvyrYqLonYyXFM4wEFxKVSETY03tinDckwtki0uGADgbUvQSkYpjfhtmNkFGqh%2FHWAVMwXxJfj7nGZI6aFKuIgl6pVUxLG4DNW%2BMne6Dr9OoOdjPHVOKruye%2BmnFQDaWa897qqZ7hqZlkQjK1%2FXudMKjvjWLztuWDgeEDj%2BjU5VjX99MbNDmazw1vlFTsF7gZee8gaE1qe6AVSadKrf9R1C7MyJ1%2Bn3XcIYpzwHqIYmM4%2B4TG74DwM7VLN7oMkfp%2FKRnCaptqv1un6tptY80nsJfrhCQ6N2BB6lg3LFat8%2Bs13nPueev8zJKy5OetcIDJPDVzh5VCtGgdYdc6OYT7Kj2jfJhw2DyKDY4wBcoI9v%2B6Aj36qyqKo1O2Tyx92maNdgehSHYhidkREiZWep%2FHQKQfYIMSRQ7jSJnEMyoT%2BpW%2Fhli905upgdbeU1Mdma1ZVY1hycU2hfsAjzFyaj0mC1AnE5PnBrchTUjkg36X76qgHa9TSJtut17Jn0DUmRWRQalyQM5qc0rioMBW3auoz4jCej3aKY7lFhV%2F%2FiXI%2BZeO1M3PH0c%2BUvcN5z4I%2BZwmlLUeDaszJnVJlha9h2yPF49n77BvmhVv60lnX86hKdeRCJck0pO%2FxTUnDNZV2BEmJkbQfp%2BEGmD0GC93jKzxwW%2FKDwBtf%2BDRAi%2FLD7lpxJdfw93L3w%3D%3D)


## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project Proposal/Find APIs | H | 3hrs| 3hrs | 3hrs |
| Adding Basic HTML | H | 1hrs| .1hrs | .1hrs |
| Adding Form/Search | H | 3hrs| .1hrs | .1hrs |
| Working with 1st API | H | 3hrs| .1hrs | .1hrs |
| Searching/Appending Company Overview Data| H | 3hrs| .1hrs | .1hrs |
| Building out Complete Company Overview Elements | H | 3hrs| .1hrs | .1hrs |
| Removing Previous Search Data | H | 1hrs| .1hrs | .1hrs |
| Adding Basic CSS | H | 3hrs| .5hrs | .5hrs |
| Adding Flexbox | H | 3hrs| .5hrs | .5hrs |
| Adding Media Query | H | 1hrs| .5hrs | .5hrs |
| Adding Advanced CSS styling | H | 3hrs| 3hrs |  |
| Deploying Website | H | 1hrs|  |  |
| PMVP: Working with 2nd API | M | 3hrs|  |  |
| PMVP: Appending Real-Time Share Price Data | M | 3hrs|  |  |
| PMVP: Adding Buy/Sell Rating | L | 3hrs|  |  |
| PMVP: Adding Favorites List | L | 3hrs|  |  |
| Total | H | 40hrs| 5.5hrs |  |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
```

## Change Log
 
