import Navbar from './Navbar';
import './App.css' ;
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
// import ProjectCard from './ProjectCard';
import Touch from './Touch';
import Footer from './Footer';

function App() {
  return (
    <div className="App" style={{height:'100vh'}}>
   
      <Navbar />
      <About />
      <Skills />
      <Projects />
      {/* <ProjectCard /> */}
      <Touch />
      <Footer />
   
    </div>
  );
}

export default App;
