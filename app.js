// const domain = 'https://www.alphavantage.co/'
const apiKey = 'M31QNN25YYCK1WWU'
// const baseURL = `${domain}query?function=OVERVIEW&symbol=${stock}&apikey=${apiKey}`

const dataContainer = document.querySelector('#info')

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

  const nameElement = document.createElement('h2')
  nameElement.textContent = stockData.Name
  dataContainer.append(nameElement)

  const tickerElement = document.createElement('h3')
  tickerElement.textContent = stockData.Symbol
  dataContainer.append(tickerElement)

}

const button = document.querySelector('button')
button.addEventListener('click', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#input').value
  // console.log(inputValue)
  removeData(dataContainer)
  fetchData(inputValue)
  document.querySelector('#input').value = ''
})

function removeData(elementToRemove) {
  while (elementToRemove.lastChild) {
    elementToRemove.removeChild(elementToRemove.lastChild)
  }
}