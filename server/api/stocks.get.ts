import { defineEventHandler } from 'h3'

export default defineEventHandler(async () => {
  const API_KEY = "cdf502dd0503cb648d16d71cbabf9f35"
  const response = await fetch(
    `https://api.marketstack.com/v1/eod?access_key=${API_KEY}&symbols=AAPL`
  )
  const data = await response.json()
  return data
})