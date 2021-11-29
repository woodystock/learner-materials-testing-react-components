const specialCharCheck = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const numberCheck = /\d/;

const validateSpeciesName = (input) => {
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

const validateSimpleCalc = (input) => {
    const message = [];
    if(input == "")
        return ""
    
    if(input === "Not 4")
        message.push("Incorrect Answer")

    return message.join(", ");
}

const validateReason = (input) => {
    if(input === "")
        return ""
    
    if(input.length < 17)
        return "Must be more than 17 characters"
    else if( input.length > 153)
        return "Must be less than 153 characters"

    return "";
}

const validatePlanetName = (input) => {
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

const validateNumberOfBeings = (input) => {
        
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

module.exports = {
    validateSpeciesName,
    validateSimpleCalc,
    validateReason,
    validatePlanetName,
    validateNumberOfBeings
}
