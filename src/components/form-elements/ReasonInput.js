import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

function ReasonInput({value, onChange}) {

    const [errorMessage, setErrorMessage] = useState("");

    const validate = (input) => {
        if(input === "")
            return ""
        
        if(input.length < 17)
            return "Must be more than 17 characters"
        else if( input.length > 153)
            return "Must be less than 153 characters"

        return "";
    }

    const onChangeHandler = (event) => {
        const validateMessage = validate(event.target.value);
        setErrorMessage(validateMessage);
        onChange(event);
    }
    
    return (
        <div className="form__input-container">
            <label htmlFor="reason" className="form__label">Reason for Sparing:</label>
            <div className="validated-input-container">
                <textarea 
                    id="reason" 
                    className="form__input form__input--text input__textarea" 
                    rows="5" 
                    value={value} 
                    onChange={onChangeHandler}
                />
                <ErrorMessage errorMessage={errorMessage} />
            </div>
        </div>
    )
}

export default ReasonInput