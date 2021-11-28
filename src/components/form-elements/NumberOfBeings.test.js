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