import { render, screen, fireEvent } from '@testing-library/react';
import SubmitFormContainer from './SubmitFormContainer';

test('renders submit button', () => {
	
	render(<SubmitFormContainer />);

	const button = screen.getAllByRole("button").find(button => button.id === "submit");

	expect(button).toBeInTheDocument();
});

test('submit button click', () => {
    const mockOnSubmitClick = jest.fn();

	const { container } = render(<SubmitFormContainer onSubmitClick={mockOnSubmitClick} />);

	const submitButton = screen.getAllByRole("button").find(button => button.id="submit");

	fireEvent.click(submitButton);

    expect(mockOnSubmitClick).toHaveBeenCalledTimes(1);
})