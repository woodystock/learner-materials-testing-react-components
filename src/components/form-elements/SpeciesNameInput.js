import { useState } from "react"
import ErrorMessage from "./ErrorMessage";

function SpeciesNameInput({value, onChange}) {

    const [errorMessage, setErrorMessage] = useState("");

    const validate = (input) => {
        if(input !== "")
            return "No input allowed"
        else return "";
    }

    const onChangeHandler = (event) => {
        const validateMessage = validate(event.target.value);
        setErrorMessage(validateMessage);
        onChange(event);
    }

    return (
        <div className="form__input-container">
            <label htmlFor="species_name" className="form__label">Species Name:</label>
            <div className="validated-input-container">
                <input 
                    id="species_name" 
                    type="text" 
                    className="form__input form__input--text" 
                    value={value} 
                    onChange={onChangeHandler}/>
                <ErrorMessage errorMessage={errorMessage} />
            </div>
        </div>
    )
}

export default SpeciesNameInput