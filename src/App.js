import Theme from './Styles/Theme';
import Navigation from './Components/Navigation/Navigation'
import Hero from './Components/Hero/Hero'
import Project from './Components/Projects/Projects'
import Technologies from './Components/Technologies/Technologies'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <Theme>
      <Navigation />
      <Hero />
      <Project />
      <Technologies />
      <About />
      <Contact />
    </Theme>
  );
}

export default App;
