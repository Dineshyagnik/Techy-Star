
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header';


import "./styles/App.scss";
import "./styles/header.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
