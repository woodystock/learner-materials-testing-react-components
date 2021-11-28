import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

function NumberOfBeingsInput({value, onChange}) {

    const [errorMessage, setErrorMessage] = useState("");

    const validate = (input) => {
        
        const numbersOnlyCheck = /^\d*$/;
        
        const message = [];

        if(input === "")
            return "";
        if(! numbersOnlyCheck.test(input))
            message.push("Numbers Only")
        else if( Number(input) < 1000000000)
            message.push("Must be at least 1,000,000,000")
            
        

        return message.join(", ")
    }

    const onChangeHandler = (event) => {
        const validateMessage = validate(event.target.value);
        setErrorMessage(validateMessage);
        onChange(event);
    }
    
    return (
        <div className="form__input-container">
            <label htmlFor="beings_num" className="form__label">Number of Beings:</label>
            <div className="validated-input-container">
                <input 
                    id="beings_num" 
                    type="text" 
                    className="form__input form__input--text" 
                    value={value} 
                    onChange={onChangeHandler}/>
                <ErrorMessage errorMessage={errorMessage} />
            </div>
        </div>
    )
}

export default NumberOfBeingsInput;