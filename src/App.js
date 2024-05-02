import './App.css';
import Login from './routes/login';
import Register from './routes/register';
import Main from './routes/main';
import Mypage from './routes/mypage';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={< Main/>} />
          <Route path="/login" element={< Login/>} />
          <Route path="/register" element={< Register/>} />
          <Route path="/mypage" element={< Mypage/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
