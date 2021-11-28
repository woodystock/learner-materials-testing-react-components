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

test('validates the input with the following: Must be between 2 and 49 characters. Numbers are allowed, but no special characters.', () => {
	const mockOnChange = jest.fn();
	
	render(<PlanetNameInput value="" onChange={mockOnChange}/>)

	const input = screen.getByRole("textbox");

	fireEvent.change(input, {target: {value: "a"}})

	let invalid = screen.getByText("Must contain more than 2 letters")

	expect(invalid).toBeInTheDocument();

	fireEvent.change(input, {target: {value: "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"}})

	invalid = screen.getByText("Must contain less than 49 letters")

	expect(invalid).toBeInTheDocument();

	fireEvent.change(input, {target: {value: "ca$h"}})

	invalid = screen.getByText("Cannot contain special characters")

	expect(invalid).toBeInTheDocument();
})