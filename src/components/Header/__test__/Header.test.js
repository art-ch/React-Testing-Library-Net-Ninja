import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('<Header />', () => {
  describe('get by', () => {
    it('should render the text from prop', () => {
      render(<Header title="My Header" />);
      const headingElement = screen.getByText(/my header/i);
      expect(headingElement).toBeInTheDocument();
    });

    it('should contain header with text passed from prop', () => {
      render(<Header title="My Header" />);
      const headingElement = screen.getByRole('heading', { name: 'My Header' });
      expect(headingElement).toBeInTheDocument();
    });

    it('should contain header with title header', () => {
      render(<Header title="My Header" />);
      const headingElement = screen.getByTitle('Header');
      expect(headingElement).toBeInTheDocument();
    });

    it('should contain header with test-id header-1', () => {
      render(<Header title="My Header" />);
      const headingElement = screen.getByTestId('header-1');
      expect(headingElement).toBeInTheDocument();
    });
  });

  // describe('find by', () => {
  //   it('should render the text from prop', async () => {
  //     render(<Header title="My Header" />);
  //     const headingElement = await screen.findByText(/my header/i);
  //     expect(headingElement).toBeInTheDocument();
  //   });
  // });

  // describe('query by', () => {
  //   it('should render the text from prop', () => {
  //     render(<Header title="My Header" />);
  //     const headingElement = screen.queryByText(/my header/i);
  //     expect(headingElement).toBeInTheDocument();
  //   });
  // });

  // describe('get all by role', () => {
  //   it('should render the text from prop', () => {
  //     render(<Header title="My Header" />);
  //     const headingElements = screen.getAllByRole('heading');
  //     expect(headingElements.length).toBe(2);
  //   });
  // });
});
