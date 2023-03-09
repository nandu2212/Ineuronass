
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Details from './components/details';
import AddDetails from './components/add details';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Details/>}></Route>
      <Route path='/ADD' element={<AddDetails/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
