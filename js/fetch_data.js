'use strict'

export const loadData = async () => {
  const res = await fetch(`https://api.exchangerate.host/latest`)
  const data = await res.json()
  return data
}

export const setBaseCurrency = async (newBaseValue = 'USD') => {
  const res = await fetch(`https://api.exchangerate.host/latest?base=${newBaseValue}`)
  const data = await res.json()
  return data
}