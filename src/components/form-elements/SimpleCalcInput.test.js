import { render, screen, fireEvent } from '@testing-library/react';
import SimpleCalcInput from './SimpleCalcInput';

test('renders simple calc input', () => {
	
	render(<SimpleCalcInput />);

	const label = screen.getByText("What is 2 + 2?")

	const input = screen.getByRole("combobox");

	expect(label).toBeInTheDocument();
	expect(input).toBeInTheDocument();
    
});

test('input values into simple calc input', () => {

	const mockOnChange = jest.fn();

	render(<SimpleCalcInput value="4" onChange={mockOnChange}/>)

	const input = screen.getByRole("combobox");

	expect(input.value).toBe("4");
})

test('change values in simple calc input', () => {
	const mockOnChange = jest.fn();

	render(<SimpleCalcInput value="4" onChange={mockOnChange}/>)

	const input = screen.getByRole("combobox");

	fireEvent.change(input, {target: {value: "Not 4"}})

	expect( mockOnChange ).toBeCalledTimes(1);
})

test("validates input with the following rules: '4' must be selected. Selecting 'Not 4' should display an error.", () => {
	const mockOnChange = jest.fn();

	render(<SimpleCalcInput value="" onChange={mockOnChange}/>)

	const input = screen.getByRole("combobox");

	fireEvent.change(input, {target: {value: "Not 4"}})

	const invalid = screen.getByText("Incorrect answer");

	expect(invalid).toBeInTheDocument();
});