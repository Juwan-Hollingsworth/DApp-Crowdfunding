import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

//wrappper for the entire application
root.render(
    <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
        <Router>
            <App />
        </Router>
    </ThirdwebProvider>
)