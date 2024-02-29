import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react";
import { RoutesComponent } from './routes.jsx'
import { AuthProvider } from './provider/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <RoutesComponent />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
