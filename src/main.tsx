import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      domain='dev-qi8m76xtwsxr8eif.us.auth0.com'
      clientId='if1c3MxroL2w7vlaOx1twjFA2lEGZEr8'
      authorizationParams={{
        redirect_uri: "http://localhost:5173/"
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>,
)
