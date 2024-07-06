import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserSelect from './components/UserSelect/UserSelect';
import Main from './components/Main/Main';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<UserSelect />} />
      <Route path='/main' element={<Main />} />
    </Routes>
    </>
  )
}

export default App
