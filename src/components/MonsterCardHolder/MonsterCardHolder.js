import './MonsterCardHolder.css';
import MonsterCard from '../MonsterCard/MonsterCard';

const MonsterCardHolder = (props) => {
    return (
        <div className="card-holder"> 
            <h2> Monster Card Holder</h2>
            {props.monsters.map(monster => 
               <MonsterCard 
                key={monster.id} 
                monster={monster} 
                handleUpdate={props.handleUpdate}
                /> 
            )}
            
        </div>
    );
}

export default MonsterCardHolder;