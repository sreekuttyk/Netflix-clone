import react from 'react';
import './App.css';
import {action,orginals,horror,comedy,romantic} from './urls'
import Banner from './Components/Banner/Banner';
import NavBar from  './Components/NavBar/NavBar'
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost  url={orginals} title='Netflix Orginals'/>
     <RowPost url={action} title='Action' isSmall/>
     <RowPost url={horror} title='Horror' isSmall/>
     <RowPost url={comedy} title='Comedy' isSmall/>
     <RowPost url={romantic} title='Romantic' isSmall/>
    </div>
  );
} 

export default App;
