import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import { ProfileView } from './views/ProfileView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/login' element={<LoginView />} />
        <Route path='/profile' element={<ProfileView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;