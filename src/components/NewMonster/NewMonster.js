import './NewMonster.css';
import Form from '../Form/Form';

const NewMonster = (props) => {
    return (
        <div className="form-group">
            <Form handleSubmit={props.handleAdd} />
        </div>
    );
}

export default NewMonster;