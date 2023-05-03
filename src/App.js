import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import './Styles.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Componets/Home';
import Content from './Componets/Content';
import Search from './Componets/Search';
import Yourlibrary from './Componets/Yourlibrary';
import Sidebar from './Componets/Sidebar';
import Topnav from './Componets/Topnav';
import Plau from './Componets/Plau';

function App() {
  return (
    <div className="App postion-relative">
        {/* <Topnav/> */}
        <Sidebar/>
      <Routes>
        <Route path="/" element={<Content/>} />
          <Route path='/home' element={<Content/>}/>
          <Route path='/search' element={<Search/>}/> 
           {/* <Route path='library' element={<Yourlibrary/>}/> */}
        {/* </Route> */}

          <Route path='/playlist/:id' element={<Plau/>}/> 
          <Route path='/*' element={"no page exist"}/>
      </Routes>
    </div>
  );
}

export default App;
