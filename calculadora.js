const http = require('http')
import os from "os";


const key = "5ed5158a4092e5182851216a49288904"

const api = http.request(`https://api.openweathermap.org/data/2.5/weather?q=${"Canoas"}&appid=${key}`)

console.log(api.getHeader());