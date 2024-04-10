import { render } from '@testing-library/react';
import Navbar from './components/Navbar';

test('renders home button in navbar', () => {
	const { getByText } = render(<Navbar />);
	const text = getByText(/Home/i);
	expect(text).toBeInTheDocument;
});
