import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
// import  Featured  from './components/Featured';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Skills/>
     <Projects/>
     {/* <Featured/> */}
     <Contact />
     <Footer/>
    </div>
  );
}

export default App;
