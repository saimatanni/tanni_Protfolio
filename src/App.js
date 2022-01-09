import logo from './logo.svg';
import './App.css';
import Introduction from './components/Introduction';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className='antialiased text-gray-600'>
     <Introduction/>
     <Services/>
     <Work/>
     <Contact/>
    </div>
  );
}

export default App;
