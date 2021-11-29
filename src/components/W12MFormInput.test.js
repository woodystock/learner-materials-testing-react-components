import { render, screen, fireEvent } from "@testing-library/react";
import W12MFormInput from "./W12MFormInput";

/**
 * W12MFormInput props reminder
 * 
 * id,
 * label,
 * type,
 * typeOptions,
 * value,
 * onChange,
 * validate
 * 
 */

describe("render each type of input:", () => {

    test.each([
        ["text","textbox"],
        ["select","combobox"],
        ["textarea","textbox"]
    ])("input type: '%s' creates an element with role: '%s'", (inputType, role) => {
        
        let typeOptions = "";

        if(inputType === "select")
            typeOptions = "1,2";
        if(inputType === "textarea")
            typeOptions = "3";

        render(<W12MFormInput 
                id={inputType}
                type={inputType}
                typeOptions={typeOptions}/>)

        var inputElement = screen.getAllByRole(role).find(element => element.id === inputType);

        expect(inputElement)
            
    });
});

describe("call a change handler when the component is changed:", () => {

    test.each([
        ["text","textbox"],
        ["select","combobox"],
        ["textarea","textbox"]
    ])("input type: '%s'", (inputType, role) => {
        
        let typeOptions = "";

        if(inputType === "select")
            typeOptions = "1,2";
        if(inputType === "textarea")
            typeOptions = "3";

        const mockChange = jest.fn();

        render(<W12MFormInput 
                id={inputType}
                type={inputType}
                typeOptions={typeOptions}
                onChange={mockChange}/>)

        var inputElement = screen.getAllByRole(role).find(element => element.id === inputType);

        fireEvent.change(inputElement, {target: {value:"1"}});

        expect(mockChange).toBeCalledTimes(1);
            
    });
});

describe("call a validation handler when the component is changed:", () => {

    test.each([
        ["text","textbox"],
        ["select","combobox"],
        ["textarea","textbox"]
    ])("input type: '%s'", (inputType, role) => {
        
        let typeOptions = "";

        if(inputType === "select")
            typeOptions = "1,2";
        if(inputType === "textarea")
            typeOptions = "3";

        const mockValidate = jest.fn();

        render(<W12MFormInput 
                id={inputType}
                type={inputType}
                typeOptions={typeOptions}
                validate={mockValidate}/>)

        var inputElement = screen.getAllByRole(role).find(element => element.id === inputType);

        fireEvent.change(inputElement, {target: {value:"1"}});

        expect(mockValidate).toBeCalledTimes(1);
            
    });
});