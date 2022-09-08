import logo from './logo.svg';
import './App.css';
import { About } from './components/About/About';
import { Header } from './components/Header/Header'
import { Nav } from './components/Nav/Nav'
import { Experience } from './components/Experience/Experience'
import { Services } from './components/Services/Services'
import { Portfolio } from './components/Portfolio/Portfolio'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
