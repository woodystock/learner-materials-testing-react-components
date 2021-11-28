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