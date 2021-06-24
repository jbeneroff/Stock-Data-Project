// const domain = 'https://www.alphavantage.co/'
const apiKey1 = 'M31QNN25YYCK1WWU'
const apiKey2 = '96273893400e02fdfb216ccd8de90610'
// const baseURL = `${domain}query?function=OVERVIEW&symbol=${stock}&apikey=${apiKey}`

const dataContainer = document.querySelector('#profile')
const dataContainer2 = document.querySelector('#finances')
const dataContainer3 = document.querySelector('#price')

async function fetchPrice(ticker) {
  const url = (`https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=${apiKey2}`)
  try {
    let response = await axios.get(url)
    // console.log(response.data[0].price)
    priceData = response.data[0]
    renderPrice(priceData)
    return response
  } catch (error) {
    console.log(error)
    alert('Not A Valid Ticker. Please Try Again. (e.g. AAPL, TSLA, MSFT, AMZN)')
  }
}

function renderPrice(priceData) {
  const priceElement = document.createElement('h1')
  priceElement.id = 'price-text'
  priceElement.textContent = `$${priceData.price}`
  dataContainer3.append(priceElement)
}



async function fetchData(ticker) {
  const url = (`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${apiKey1}`)
  try {
    let response = await axios.get(url)
    // console.log(response.data)
    stockData = response.data
    renderData(stockData)
    return response
  } catch (error) {
    console.log(error)
  }
}
// fetchData('AAPL')

function renderData(stockData) {

  // Company Profile
  const headerFirst = document.createElement('h1')
  headerFirst.textContent = 'Company Profile'
  dataContainer.append(headerFirst)

  const nameElement = document.createElement('h2')
  nameElement.textContent = stockData.Name
  dataContainer.append(nameElement)

  const tickerElement = document.createElement('h3')
  tickerElement.textContent = `${stockData.Exchange}: ${stockData.Symbol}`
  dataContainer.append(tickerElement)

  const descriptionElement = document.createElement('p')
  descriptionElement.textContent = stockData.Description
  dataContainer.append(descriptionElement)

  // Financial Overview
  const headerSecond = document.createElement('h1')
  headerSecond.textContent = 'Financial Overview'
  dataContainer2.append(headerSecond)

  const marketCap = document.createElement('h5')
  marketCap.textContent = `Market Cap: $${stockData.MarketCapitalization}`
  dataContainer2.append(marketCap)

  const ebitda = document.createElement('h5')
  ebitda.textContent = `EBITDA: $${stockData.EBITDA}`
  dataContainer2.append(ebitda)

  const peRatio = document.createElement('h5')
  peRatio.textContent = `PE Ratio: ${stockData.PERatio}`
  dataContainer2.append(peRatio)

  const eps = document.createElement('h5')
  eps.textContent = `EPS: ${stockData.EPS}`
  dataContainer2.append(eps)

  const targetPrice = document.createElement('h5')
  targetPrice.textContent = `Analyst Target Price: $${stockData.AnalystTargetPrice}`
  dataContainer2.append(targetPrice)

  const high = document.createElement('h5')
  high.textContent = `52 Week High: $${stockData['52WeekHigh']}`
  dataContainer2.append(high)

  const low = document.createElement('h5')
  low.textContent = `52 Week Low: $${stockData['52WeekLow']}`
  dataContainer2.append(low)

}

const button = document.querySelector('#submit')
button.addEventListener('click', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#input').value
  // console.log(inputValue)
  removeData(dataContainer)
  removeData(dataContainer2)
  removeData(dataContainer3)
  const display = document.querySelectorAll('.information > *')
  display.forEach((element) => {
    element.classList.remove('hidden')
  })
  fetchPrice(inputValue)
  fetchData(inputValue)
  document.querySelector('#input').value = ''

})

function removeData(elementToRemove) {
  while (elementToRemove.lastChild) {
    elementToRemove.removeChild(elementToRemove.lastChild)
  }
}