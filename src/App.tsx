import Calculator from './Pages/Calculator/Calculator';
import IndexPage from './Pages/Index';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Article from './Components/Article';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
