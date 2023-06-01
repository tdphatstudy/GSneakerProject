import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Error404 from './pages/Error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
