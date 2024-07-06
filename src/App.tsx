import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserSelect from './components/UserSelect/UserSelect';
import Main from './components/Main/Main';

function App() {

  return (
    <>
    <Routes>
      <Route path="Kenai/" element={<UserSelect />} />
      <Route path='Kenai/main' element={<Main />} />
    </Routes>
    </>
  )
}

export default App
