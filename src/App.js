import { useState } from 'react';
import './App.css';

function App() {
  const [light, setLight] = useState(false);

  setTimeout(() => {
    light ? setLight(false) : setLight(true);
  }, 1000)

  return (
    <div className="App" >
      <div className='background'  alt="brooches by fran allison">
        {/* <h1>Fran Allison</h1> */}
        <div className='text'>
          <p>This site is under construction.</p>
          <p>In the meantime, </p> 
          </div>
          <a className={`flashyBtn ${light ? "light" : "dark"}`} href="mailto:fran.a@xtra.co.nz?subject=Website enquiry" target="_blank" rel="noreferrer">Contact Me</a>
        
        
      </div>
    </div>
  );
}

export default App;
