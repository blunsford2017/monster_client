import './MonsterCardHolder.css';
import MonsterCard from '../MonsterCard/MonsterCard';

const MonsterCardHolder = (props) => {
    return (
        
        <div className="card-holder"> 
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