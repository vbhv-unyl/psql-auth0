import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useAuth0 } from '@auth0/auth0-react'
import './App.css'

function App() {
  const { loginWithPopup, logout, user, isAuthenticated } = useAuth0()

  return (
    <>
      {
        !isAuthenticated ?
          (
            <>
              <div>
                <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              </div>
              <h1>Vite + React</h1>
              <div className="card">
                <button onClick={() => loginWithPopup()}>
                  Login
                </button>
                <p>
                  Edit <code>src/App.tsx</code> and save to test HMR
                </p>
              </div>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
            </>
          ) : (
            <>
            <h1>Welcome {user?.name}</h1>
            <button onClick={() => logout({ logoutParams: { returnTo: chrome.runtime.getURL("index.html") } })}>
              Logout
            </button>
            </>
          )
      }
    </>
  )
}

export default App
