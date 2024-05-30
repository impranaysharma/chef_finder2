
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing'
import Navbar from './components/Navbar';
  import Login from './Pages/Login';
import Profile from './Pages/Profile'
import AfterLogin from './Pages/AfterLogin';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route path="chef_finder" element={<Landing/>}/>
        <Route path="profile" element={<Profile/>} />
        <Route path="login" element={<Login/>} />
        <Route path="afterlogin" element={<AfterLogin/>} />
        <Route path="*" element={""} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
