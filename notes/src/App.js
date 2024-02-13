
import './App.css';
// import { useState } from 'react'
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import DisplayNotes from './component/DisplayNotes';
import AddNotes  from './component/AddNotes';
//import Button from '@mui/material/Button';
import { Important } from './component/Important';
import { Navbar } from './component/Navbar';



function App() {

  // const dispatch = useDispatch()  

  return (
    <div >

    <Navbar />
      {/* <NavigationBar/> */}
      

        <Routes>
          <Route path="/" element={<DisplayNotes/>}/>
          <Route path="/add" element={<AddNotes/>}/>
          <Route path="/important" element={<Important/>}/>
        </Routes>
    </div>
  );
}

export default App;
