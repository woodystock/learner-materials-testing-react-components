import { render, screen, fireEvent } from '@testing-library/react';
import NumberOfBeingsInput from './NumberOfBeingsInput';

test('renders number of beings input', () => {
	
	render(<NumberOfBeingsInput />);

	const label = screen.getByText("Number of Beings:")

	const input = screen.getByRole("textbox");

	expect(label).toBeInTheDocument();
	expect(input).toBeInTheDocument();
    
});

test('input values into number of beings input', () => {

	const mockOnChange = jest.fn();

	render(<NumberOfBeingsInput value="12" onChange={mockOnChange}/>)

	const input = screen.getByRole("textbox");

	expect(input.value).toBe("12");
})

test('change values in number of being input', () => {
	const mockOnChange = jest.fn();

	render(<NumberOfBeingsInput value="12" onChange={mockOnChange}/>)

	const input = screen.getByRole("textbox");

	fireEvent.change(input, {target: {value: "13"}})

	expect( mockOnChange ).toBeCalledTimes(1);
})

test('validates the input with the following: Must be between 3 and 23 characters. No numbers or special characters allowed!', () => {
	const mockOnChange = jest.fn();
	
	render(<NumberOfBeingsInput value="" onChange={mockOnChange}/>)

	const input = screen.getByRole("textbox");

	fireEvent.change(input, {target: {value: "abc"}})

	const invalidNumbers = screen.getByText("Numbers Only")

	expect(invalidNumbers).toBeInTheDocument();

	fireEvent.change(input, {target: {value: "100"}})

	const invalidAmount = screen.getByText("Must be at least 1,000,000,000");

	expect(invalidAmount).toBeInTheDocument();
})