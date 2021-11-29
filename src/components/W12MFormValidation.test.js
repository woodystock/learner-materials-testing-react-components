const { validateSpeciesName, validateSimpleCalc, validateReason, validatePlanetName, validateNumberOfBeings } = require("./W12MFormValidation");

describe("validateSpeciesName:", () => {

    test.each([
        ["",""],
        ["ab","Must contain more than 3 letters"],
        ["abcdefghijklmnopqrstuvwxyz","Must contain less than 23 letters"],
        ["abc123","Cannot contain numbers"],
        ["abc!£$","Cannot contain special characters"],
        ["12","Must contain more than 3 letters, Cannot contain numbers"]
    ])("input: %s => message: %s", (input, output) => {

        const result = validateSpeciesName(input)

        expect(result).toBe(output);
    });
})

describe("validateSimpleCalc:", () => {

    test.each([
        ["",""],
        ["4",""],
        ["Not 4","Incorrect Answer"]
    ])("input: %s => message: %s", (input, output) => {

        const result = validateSimpleCalc(input)

        expect(result).toBe(output);
    });
})

describe("validateReason:", () => {

    test.each([
        [0,""],
        [10,"Must be more than 17 characters"],
        [154,"Must be less than 153 characters"]
    ])("input with length: %i => message: %s", (inputLength, output) => {

        let input = "";

        for (let i = 0; i < inputLength; ++i)
            input += "a"

        const result = validateReason(input)

        expect(result).toBe(output);
    });
})

describe("validatePlanetName:", () => {

    test.each([
        ["",""],
        ["a","Must contain more than 2 letters"],
        ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "Must contain less than 49 letters"],
        ["ca£$%gf", "Cannot contain special characters"],
        ["$", "Must contain more than 2 letters, Cannot contain special characters"]
    ])("input: %s => message: %s", (input, output) => {
            
        const result = validatePlanetName(input)

        expect(result).toBe(output);
    });
})

describe("validateNumberOfBeings:", () => {

    test.each([
        ["",""],
        ["abc","Numbers Only"],
        ["100","Must be at least 1,000,000,000"]
    ])("input: %s => message: %s", (input, output) => {
            
        const result = validateNumberOfBeings(input)

        expect(result).toBe(output);
    });
});