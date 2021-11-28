import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import W12MForm from './W12MForm';

test('renders form element', () => {
	// we can hold onto the object returned from render()
	// this object has a container property that we can destructure and inspect
	const { container } = render(<W12MForm />);

	// the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
	// the firstChild of our container should be our form element
	expect(container.firstChild).toHaveClass('w12MForm');
});

test("submit form handler is called when the form is submitted", () => {
	
	const onMockSubmit = jest.fn();

	render(<W12MForm onFormSubmit={onMockSubmit} />);

	const submitButton = screen.getAllByRole("button").find(button => button.type = "submit");

	expect(submitButton).toBeInTheDocument();

	userEvent.click(submitButton);

	expect(onMockSubmit).toHaveBeenCalledTimes(1);
});
