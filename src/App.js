import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Shop from './components/Shop';
import PlayStationPlus from './components/PlayStationPlus';
import ThisMonth from './components/ThisMonth'
import Social from './components/Social';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Shop />
        <PlayStationPlus />
        <ThisMonth />
        <Social />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

// Website used for task was the Official PlayStation Website: https://www.playstation.com/en-gb/