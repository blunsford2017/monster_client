import './MonsterCard.css';
import Form from '../Form/Form';
import { useState } from 'react';

const MonsterCard = (props) => {

    const [formVisible, setFormVisible] = useState(false);

    function toggleForm() {
        setFormVisible(!formVisible);
    }

    return (
        <>
        {
            formVisible ?
            <div className="monster-card">
                <div className="card">
                <div className="card-header">
                        <h1 className="monster-title"> { props.monster.name } </h1>
                    </div>
                    <div className="card-body">
                        <Form 
                            monster={props.monster}
                            name={props.monster.name} 
                            handleSubmit={props.handleUpdate}
                            formVisible={formVisible}
                        />
                    </div>
                    <div className="card-footer">
                        <button onClick={toggleForm}>Cancel</button>
                    </div>
                </div>
            </div>
            :
            <div className="monster-card">
                <div className="card">
                    <div className="card-header">
                        <h1 className="monster-title"> { props.monster.name } </h1>
                        <button onClick={toggleForm}> Update </button>
                    </div>
                    <div className="card-body">
                        <p>Height: { props.monster.height } </p>
                        <p>Weight:  { props.monster.weight } </p>
                        <p> { props.monster.description } </p>
                    </div>
                    <div className="card-footer">
                        {/* Convert timestamp to JS date object */}
                        <p> Created: {new Date(props.monster.created_at).toLocaleDateString()} </p>
                        <p> Updated: {new Date(props.monster.updated_at).toLocaleDateString()} </p>
                    </div>

                </div>
            </div>
        }
        </>
    );
}

export default MonsterCard;