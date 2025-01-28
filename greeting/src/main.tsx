import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HomePage } from '@pages/HomePage'
import { ProductListPage } from '@pages/ProductListPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomePage />
    <ProductListPage />
  </StrictMode>,
)
