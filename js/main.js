'use strict'

import {loadData, setBaseCurrency} from "./fetch_data.js"

const convertCurrencyFrom = document.getElementsByClassName('currency-exchange__currency-name')[0]
const convertCurrencyTo = document.getElementsByClassName('currency-exchange__currency-name')[1]
const convertValue = document.getElementsByClassName('currency-exchange__input-value')[0]
const convertIntoValue = document.getElementsByClassName('currency-exchange__input-value')[1]
const convertButton = document.getElementsByClassName('currency-exchange__convert-button')[0]

window.onload = async() => {
  const currencyData = await loadData() 
  const currencyRates = currencyData.rates
  generateSelectOptions(currencyRates, convertCurrencyFrom)
  generateSelectOptions(currencyRates, convertCurrencyTo)
  console.log(convertCurrencyFrom, convertCurrencyTo);
}

function generateSelectOptions(ratesCurrency, select) {
  Object.keys(ratesCurrency).forEach((el) => {
    const option = document.createElement('option')
    option.value = el
    option.text = el
    select.add(option)
  })
}

async function calculate() {
  const currentCurrencyCode = convertCurrencyFrom.value
  const convertedCurrencyCode = convertCurrencyTo.value
  const amountOfCurrency = convertValue.value
  const getData = await setBaseCurrency(currentCurrencyCode)
  let result = amountOfCurrency * getData.rates[convertedCurrencyCode]
  convertIntoValue.value = +result.toString().slice(0, -10)
}

convertButton.addEventListener('click', (e) => {
  calculate()
})