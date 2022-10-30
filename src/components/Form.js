import React from "react";
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress}) => {
    /*{value, onChange, onCreate, onKeyPress}*/

    // const value = props.value;
    // const onChange = props.onChange;
    // const onCreate = props.onCreate;
    // const onKeyPress = props.onKeyPress;

    // value = 10;

    // const {value, onChange, onCreate, onKeyPress} = props;

    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} onKeyDown={onKeyPress}/>
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
};

export default Form;