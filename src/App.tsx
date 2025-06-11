import Routers from './routers/Routers'
import { BrowserRouter } from 'react-router-dom'
import './i18n/i18n';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
    </>
  )
}

export default App
