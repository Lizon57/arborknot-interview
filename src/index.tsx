import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

import "@arborknot/design-system-v2/dist/bundle.css"
import "@arborknot/design-system-v2/dist/components.css"
import "normalize.css"
import "./styles/styles.scss"

import { App } from './app'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <App />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
