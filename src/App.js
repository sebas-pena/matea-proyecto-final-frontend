import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Router from './router/Router';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <div className='app__page-ctn'>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
