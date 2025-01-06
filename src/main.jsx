

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createExternalExtensionProvider } from '@metamask/providers'

const provider = createExternalExtensionProvider('stable')
console.log('provider', provider)

provider.on('connect', (event) => {
	console.log('provider.on(connect)', event)
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>Hello there!</div>
  </StrictMode>
)
