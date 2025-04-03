import { AdminPanel } from './components/AdminComponent';
import { ErrorComponent } from './components/ErrorComponent';
import { Form } from './components/FormComponent';
import { BrowserRouter,Routes,Route } from 'react-router';
import { UserComponent } from './components/UserComponent';
import { DashBoard } from './components/DashBoard';

function App() {
  return (
    <div className='AppContainer'>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Form/>}></Route>
      <Route path='/Register' element={<Form/>}></Route>
      <Route path='/AdminPanel' element={<AdminPanel/>}></Route>
      <Route path='/Error' element={<ErrorComponent/>}></Route>
      <Route path='/UserPanel' element={<UserComponent/>}></Route>
      <Route path='/Dashboard' element={<DashBoard/>}></Route>
    </Routes>
    </BrowserRouter> 
    </div>
  ); 
}

export default App;
