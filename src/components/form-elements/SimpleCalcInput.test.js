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