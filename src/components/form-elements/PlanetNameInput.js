import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

function PlanetNameInput({value, onChange}) {

    const specialCharCheck = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    
    const [errorMessage, setErrorMessage] = useState("");

    const validate = (input) => {
        let message = [];
        if(input === "")
            return "";
        if(input.length < 2)
            message.push("Must contain more than 2 letters");
        else if(input.length > 49)
            message.push("Must contain less than 49 letters");
        if(specialCharCheck.test(input))
            message.push("Cannot contain special characters")

        return message.join(", ")
    }

    const onChangeHandler = (event) => {
        const validateMessage = validate(event.target.value);
        setErrorMessage(validateMessage);
        onChange(event);
    }


    return (
        <div className="form__input-container">
            <label htmlFor="planet_name" className="form__label">Planet Name:</label>
            <div className="validated-input-container">
                <input id="planet_name" 
                type="text" 
                className="form__input form__input--text" 
                value={value} 
                onChange={onChangeHandler}/>
                <ErrorMessage errorMessage={errorMessage} />
            </div>
        </div>
    )
}

export default PlanetNameInput