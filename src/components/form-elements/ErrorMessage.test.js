import { render, screen } from '@testing-library/react';
import ErrorMessage from "./ErrorMessage"


test("Error message renders", () => {
    
    render(<ErrorMessage errorMessage="This is an Error"/>)

    const someText = screen.getByText("This is an Error");

    expect(someText).toBeInTheDocument();
})