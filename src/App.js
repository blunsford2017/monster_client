import './App.css';
import Header from './components/Header/Header';
import MonsterCardHolder from './components/MonsterCardHolder/MonsterCardHolder';
import NewMonster from './components/NewMonster/NewMonster';

import { useState, useEffect } from 'react';



function App() {

  useEffect(() => {
    getMonsters();
  }, []);

  const [monsterData, setMonsterState] = useState({ monsters: [] });
  
  function getMonsters() {
    fetch('/monsters')
    .then(response => response.json())
    .then(json => setMonsterState({ monsters: json }))
    .catch(error => console.error(error));
  }

  // console.log(monsterData.monsters)
  return (
    <div className="App">
      <Header />
      <NewMonster />
      {/* {monsterData.monsters[0]} */}
      {/* Pass down the monster data through here. */}
      <MonsterCardHolder monsters={monsterData.monsters} />
    </div>
  );
}

export default App;
