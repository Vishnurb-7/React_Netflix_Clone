
import React from "react";
import NavBar from "./Components/navBar/NavBar";
import './App.css'
import {action,original,HorrorMovies,ComedyMovies,RomanceMovies} from './urls'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={original} title='Netflix Orginals'/>
      <RowPost url={action} title='Action' isSamll/>
      <RowPost url={HorrorMovies} title='HorrorMovies' isSamll/>
      <RowPost url={ComedyMovies} title='ComedyMovies' isSamll/>
      <RowPost url={RomanceMovies} title='RomanceMovies' isSamll/>
    </div>
  );
}

export default App;
