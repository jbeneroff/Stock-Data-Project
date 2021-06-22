// const domain = 'https://www.alphavantage.co/'
const apiKey = 'M31QNN25YYCK1WWU'
// const baseURL = `${domain}query?function=OVERVIEW&symbol=${stock}&apikey=${apiKey}`

const dataContainer = document.querySelector('#profile')
const dataContainer2 = document.querySelector('#finances')

async function fetchData(ticker) {
  const url = (`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${apiKey}`)
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

}

const button = document.querySelector('button')
button.addEventListener('click', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#input').value
  // console.log(inputValue)
  removeData(dataContainer)
  removeData(dataContainer2)
  fetchData(inputValue)
  document.querySelector('#input').value = ''
})

function removeData(elementToRemove) {
  while (elementToRemove.lastChild) {
    elementToRemove.removeChild(elementToRemove.lastChild)
  }
}