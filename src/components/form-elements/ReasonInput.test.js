import { render, screen, fireEvent } from '@testing-library/react';
import ReasonInput from './ReasonInput';

test('renders reason input', () => {
	
	render(<ReasonInput />);

	const label = screen.getByText("Reason for Sparing:")

	const input = screen.getByRole("textbox");

	expect(label).toBeInTheDocument();
	expect(input).toBeInTheDocument();
    
});

test('input values into reason input', () => {

	const mockOnChange = jest.fn();

	render(<ReasonInput value="This is a good reason" onChange={mockOnChange}/>)

	const input = screen.getByRole("textbox");

	expect(input.value).toBe("This is a good reason");
})

test('change values in reason input', () => {
	const mockOnChange = jest.fn();

	render(<ReasonInput value="This is a good reason" onChange={mockOnChange}/>)

	const input = screen.getByRole("textbox");

	fireEvent.change(input, {target: {value: "This is a bad reason"}})

	expect( mockOnChange ).toBeCalledTimes(1);
})

test("validates input with the following rules: Must be between 17 and 153 characters.", () => {
	const mockOnChange = jest.fn();

	render(<ReasonInput value="" onChange={mockOnChange}/>)

	const input = screen.getByRole("textbox");

	fireEvent.change(input, {target: {value: "not enough"}})

	let invalid = screen.getByText("Must be more than 17 characters")

	expect(invalid).toBeInTheDocument();

	let longString = ""
	for( let i = 0; i <= 153; ++i)
		longString += "a";

	fireEvent.change(input, {target: {value: longString}});

	invalid = screen.getByText("Must be less than 153 characters");

	expect(invalid).toBeInTheDocument();
});