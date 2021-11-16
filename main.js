import './style.css'
import fetch from 'node-fetch';

if (!globalThis.fetch) await import('node-fetch');

console.log(globalThis);

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
