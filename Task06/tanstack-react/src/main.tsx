import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import DataComponent  from './components/Data.tsx'
import { TankStack_table } from './components/Tankstack.table.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<DataComponent/>}></Route>

      <Route path="/Table" element={<TankStack_table/>}></Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
)
