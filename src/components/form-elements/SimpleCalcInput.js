import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

function SimpleCalcInput({value, onChange}) {

    const [errorMessage, setErrorMessage] = useState("");

    const validate = (input) => {
        const message = [];
        if(input == "")
            return ""
        
        if(input === "Not 4")
            message.push("Incorrect answer")

        return message.join(", ");
    }

    const onChangeHandler = (event) => {
        const validateMessage = validate(event.target.value);
        setErrorMessage(validateMessage);
        onChange(event);
    }
    
    return (
        <div className="form__input-container">
            <label htmlFor="simple_calc_select" className="form__label">What is 2 + 2?</label>
            <div className="validated-input-container">
                <select id="simple_calc_select" className="form__input form__input--text input__dropdown" value={value} onChange={onChangeHandler}>
                    <option value="" hidden disabled></option>
                    <option value="4">4</option>
                    <option value="Not 4">Not 4</option>
                </select>
                <ErrorMessage errorMessage={errorMessage} />
            </div>
        </div>
    )
}

export default SimpleCalcInput