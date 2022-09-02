import React from 'react'
import ReactDOM from 'react-dom/client'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
// 2. react router
import { BrowserRouter } from "react-router-dom";

import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
