import React,{useState} from 'react';
import './App.css';
import Header from "./Components/Header.tsx";
import Main from "./Components/Main.tsx";
import SectionBox from './Components/SectionBox.tsx';
import Footer from './Components/Footer.tsx';

function App() {
  const [mainBGColor, setMainBGColor] = useState('#FEED76');
  const HandleMainBGColor = (bg:string) =>{
    setMainBGColor(bg);
  }
  return (
    <div>
      <Header bgcolor = {mainBGColor} />
      <Main HandleMainBGColor={HandleMainBGColor} />
      <SectionBox bgcolor = {mainBGColor}/>
      <Footer /> 
    </div>
  );
}

export default App;
