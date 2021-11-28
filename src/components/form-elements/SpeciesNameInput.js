import { useState } from "react"
import ErrorMessage from "./ErrorMessage";

function SpeciesNameInput({value, onChange}) {

    const specialCharCheck = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const numberCheck = /\d/;

    const [errorMessage, setErrorMessage] = useState("");

    const validate = (input) => {
        let message = [];
        if(input === "")
            return "";
        if(input.length < 3)
            message.push("Must contain more than 3 letters");
        else if(input.length > 23)
            message.push("Must contain less than 23 letters");
        if(specialCharCheck.test(input))
            message.push("Cannot contain special characters")
        if(numberCheck.test(input))
            message.push("Cannot contain numbers")

        return message.join(", ")
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