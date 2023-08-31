
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/LandingPage/Hero';
import Intro from './components/Choose/Intro';
import Practice from './components/Practice/Practice';
import Clients from './components/Clients/Clients';
import OurTeam from './components/OurTeam/OurTeam';
import Subscribe from './components/Subscribe/Subscribe';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <Intro />
     <Practice />
     <Clients/>
     <OurTeam/>
     <Subscribe />
    </div>
  );
}

export default App;
