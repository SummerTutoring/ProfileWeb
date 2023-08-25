import './SignUp.css';
import { Routes, Route, Link } from 'react-router-dom';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import MainPage from './MainPage.js';

function App() {
  
  return (
      <div className="App">

        <Routes>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/MainPage" element={<MainPage />} />
        </Routes>

      </div>
  );
}

export default App;
