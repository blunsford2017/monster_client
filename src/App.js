import './App.css';
import Header from './components/Header/Header';
import MonsterCardHolder from './components/MonsterCardHolder/MonsterCardHolder';
import NewMonster from './components/NewMonster/NewMonster';

function App() {
  return (
    <div className="App">
      <Header />
      <NewMonster />
      {/* Pass down the monster data through here. */}
      <MonsterCardHolder />
    </div>
  );
}

export default App;
