import { Form } from './components/FormComponent';
import { BrowserRouter,Routes,Route } from 'react-router';
import { TableShow } from './components/Table';
import { Dashboard } from './components/DashBoard';
import "./css/App.css"

function App() {
  return (
    <div className='AppContainer'>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Form/>}></Route>
      <Route path='/Register' element={<Form/>}></Route>
      <Route path='/Dashboard' element={<Dashboard/>}></Route>
      <Route path='/Table' element={<TableShow/>}></Route>
    </Routes>
    </BrowserRouter> 
    </div>
  ); 
}

export default App;
