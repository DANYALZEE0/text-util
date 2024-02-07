import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  return (
    <>

      <Navbar title="TextUtils" aboutText='About' />
      {/* <Navbar/>  */}
      <div className="container  my-3">
      <TextForm heading="Enter The Text to Ananlyze Below" />
      {/* <About/> */}
      </div>
      
    </>



  );
}

export default App;
