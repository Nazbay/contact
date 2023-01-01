import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/header';
import Home from './component/Main/main';
import Edits from './component/Edits/edits';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/edits" element={<Edits/>} />  
      </Routes>
    </div>
  );
}

export default App;
