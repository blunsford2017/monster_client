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

  function handleAdd(event, formInputs) {
    event.preventDefault()
    formInputs = JSON.stringify(formInputs);
    fetch('/monsters', {
      body: formInputs,
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdMonster => createdMonster.json())
    .then(jsonedMonster => { setMonsterState(prevState => 
      ({ monsters: [jsonedMonster, ...prevState.monsters] }))
    })
    .catch(error => console.log(error))
  }

  function handleUpdate(event, formInputs) {
    event.preventDefault();
    fetch(`/monsters/${formInputs.id}`, {
      body: JSON.stringify(formInputs),
      method: 'PUT',
      headers: {
     'Accept': 'application/json, text/plain, */*',
     'Content-Type': 'application/json'
   }
  })
   .then(() => {
     getMonsters();
   })
   .catch(error => console.log(error));
  }

  function handleDelete(deletedMonster) {
    fetch(`/monsters/${deletedMonster.id}`, {
       method: 'DELETE',
       headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-Type': 'application/json'
       }
     })
   .then(() => {
    getMonsters();
   })
   .catch(error => console.log(error));
  }

  return (
    <div className="App">
      <Header />
      <NewMonster handleAdd={handleAdd} />
      
        <MonsterCardHolder 
          monsters={monsterData.monsters}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      
    </div>
  );
}

export default App;
