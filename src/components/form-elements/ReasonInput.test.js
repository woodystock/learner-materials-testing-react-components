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