import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import NotFound from './components/notfound';
import {GithubProvider} from './contexts/github/githubContext';


function App() {
  return (
    <GithubProvider>
    <Router>
      <div className='container space-btwn'>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/notfound' element={<NotFound/>} />
            <Route path='/*' element={<NotFound/>} />
          </Routes>
        <Footer/>
      </div>
    </Router>
    </GithubProvider>
  );
}

export default App;
