import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const API_KEY = "6393574a0e45173255d015bb1b0bd155"
  const response = await fetch(
    `http://api.weatherstack.com/current?access_key=${API_KEY}&query=Pretoria`
  )
  const data = await response.json()
  return data
})