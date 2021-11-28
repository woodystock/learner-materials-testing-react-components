import { render, screen, fireEvent } from '@testing-library/react';
import PlanetNameInput from './PlanetNameInput';

test('renders planet name input', () => {
	
	render(<PlanetNameInput />);

	const label = screen.getByText("Planet Name:")

	const input = screen.getByRole("textbox");

	expect(label).toBeInTheDocument();
	expect(input).toBeInTheDocument();
    
});

test('input values into planet name input', () => {

	const mockOnChange = jest.fn();

	render(<PlanetNameInput value="Jupiter" onChange={mockOnChange}/>)

	const input = screen.getByRole("textbox");

	expect(input.value).toBe("Jupiter");
})

test('change values in planet name input', () => {
	const mockOnChange = jest.fn();

	render(<PlanetNameInput value="Jupiter" onChange={mockOnChange}/>)

	const input = screen.getByRole("textbox");

	fireEvent.change(input, {target: {value: "Earth"}})

	expect( mockOnChange ).toBeCalledTimes(1);
})