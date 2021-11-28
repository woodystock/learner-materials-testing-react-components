import { render, screen, fireEvent } from '@testing-library/react';
import SpeciesNameInput from './SpeciesNameInput';

test('renders species name input', () => {
	
	render(<SpeciesNameInput />);

	const label = screen.getByText("Species Name:")

	const input = screen.getByRole("textbox");

	expect(label).toBeInTheDocument();
	expect(input).toBeInTheDocument();
    
});

test('input values into species name input', () => {

	const mockOnChange = jest.fn();

	render(<SpeciesNameInput value="Human" onChange={mockOnChange}/>)

	const input = screen.getByRole("textbox");

	expect(input.value).toBe("Human");
})

test('change values in species name input', () => {
	const mockOnChange = jest.fn();

	render(<SpeciesNameInput value="Human" onChange={mockOnChange}/>)

	const input = screen.getByRole("textbox");

	fireEvent.change(input, {target: {value: "Cat"}})

	expect( mockOnChange ).toBeCalledTimes(1);
})

test("validates input with the following rules: Must be between 3 and 23 characters. No numbers or special characters allowed!", () => {
	const mockOnChange = jest.fn();

	render(<SpeciesNameInput value="" onChange={mockOnChange}/>)

	const input = screen.getByRole("textbox");

	fireEvent.change(input, {target: {value: "ab"}})

	let invalid = screen.getByText("Must contain more than 3 letters");

	expect(invalid).toBeInTheDocument();

	fireEvent.change(input, {target: {value: "abcdefghijklmnopqrstuvwxyz"}})

	invalid = screen.getByText("Must contain less than 23 letters");

	expect(invalid).toBeInTheDocument();

	fireEvent.change(input, {target: {value: "abc!£$"}})

	invalid = screen.getByText("Cannot contain special characters");

	expect(invalid).toBeInTheDocument();

	fireEvent.change(input, {target: {value: "abc123"}})

	invalid = screen.getByText("Cannot contain numbers");

	expect(invalid).toBeInTheDocument();
});