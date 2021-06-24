import './style.css'
import { fancyDate } from './fancy_date.js'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  <p>${fancyDate()}</p>
`
