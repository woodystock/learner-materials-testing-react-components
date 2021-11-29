import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import ErrorMessage from "./ErrorMessage"
import W12MFormInputType from "./W12MFormInputType"

const W12MFormInput = ({
    id,
    label,
    type,
    typeOptions,
    value,
    onChange,
    validate
}) => {

    const [errorMessage, setErrorMessage] = useState("");

    const onChangeHandler = (event) => {
        if(validate) {
            const validateMessage = validate(event.target.value);
            setErrorMessage(validateMessage);
        }
        if(onChange)
            onChange(event);
    }

    const inputText = () => {
        return  <input 
                    id={id} 
                    type="text" 
                    className="form__input form__input--text" 
                    value={value} 
                    onChange={onChangeHandler}
                />
    }

    const inputSelect = () => {
        return  <select 
                    id={id}
                    className="form__input form__input--text input__dropdown"
                    value={value}
                    onChange={onChangeHandler}>
                        <option value="" hidden disabled></option>
                        {typeOptions.split(",").map( option => {
                            return <option key={uuidv4()} value={option}>{option}</option>
                        })}
                </select>
    }

    const inputTextArea = () => {
        return <textarea 
                id={id} 
                className="form__input form__input--text input__textarea" 
                rows={typeOptions} 
                value={value} 
                onChange={onChangeHandler}
    />
    }

    return (
        <div className="form__input-container">
            <label htmlFor={id} className="form__label">{label}</label>
            <div className="validated-input-container">
                {type === W12MFormInputType.TEXT && inputText()}
                {type === W12MFormInputType.SELECT && inputSelect()}
                {type === W12MFormInputType.TEXTAREA && inputTextArea()}
                <ErrorMessage errorMessage={errorMessage} />
            </div>
        </div>
    );
}

export default W12MFormInput;