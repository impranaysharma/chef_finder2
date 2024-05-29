
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing'
import Navbar from './components/Navbar';
  import Login from './Pages/Login';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}>
          

          <Route path="login" element={<Login/>} />
          <Route path="contact" element={""} />
          <Route path="*" element={""} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
