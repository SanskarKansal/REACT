import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Customapp</h1>
    </div>
  )
}

// const reactelement={
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }

const anotherelement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactelement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click here to visit google'
)

createRoot(document.getElementById('root')).render(
  
    <App />
  
)
