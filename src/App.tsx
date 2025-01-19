import React from 'react';
import './App.css';
import Header from "./Components/Header.tsx";
import Main from "./Components/Main.tsx";
import SectionBox from './Components/SectionBox.tsx';
import Footer from './Components/Footer.tsx';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <SectionBox />
      <Footer />
    </div>
  );
}

export default App;
