import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTrio from './components/AddTrio';
import ViewTrip from './components/ViewTrip';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<AddTrio/>} />
            <Route path='/viewall' element={<ViewTrip/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
