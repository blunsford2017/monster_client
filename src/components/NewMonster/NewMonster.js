import './NewMonster.css';
import Form from '../Form/Form';

const NewMonster = (props) => {
    return (
        <div className="new-monster">
            <Form handleSubmit={props.handleAdd} />
        </div>
    );
}

export default NewMonster;