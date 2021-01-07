import './MonsterCardHolder.css';
import MonsterCard from '../MonsterCard/MonsterCard';

const MonsterCardHolder = (props) => {
    return (
        <div className="card-holder"> 
            <h2> Monster Card Holder</h2>
            <MonsterCard />
        </div>
    );
}

export default MonsterCardHolder;