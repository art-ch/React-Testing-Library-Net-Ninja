import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom';

const MockTodo = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole('button', { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: { value: task }
    });
    fireEvent.click(buttonElement);
  });
};

describe('<Todo />', () => {
  it('should render text from input aftew button was pressed', () => {
    render(<MockTodo />);
    addTask(['Go grocery shopping']);
    const divElement = screen.getByText(/Go grocery shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  it('should render multiple items', () => {
    render(<MockTodo />);
    addTask([
      'Take water from well',
      'Go grocery shopping',
      'Go Trainwatching'
    ]);
    const divElements = screen.getAllByTestId('task-container');
    expect(divElements.length).toBe(3);
  });

  it('task should not have completed class when initially rendered', () => {
    render(<MockTodo />);
    addTask(['Go grocery shopping']);
    const divElement = screen.getByText(/Go grocery shopping/i);
    expect(divElement).not.toHaveClass('todo-item-active');
  });

  it('task should have completed class when clicked', () => {
    render(<MockTodo />);
    addTask(['Go grocery shopping']);
    const divElement = screen.getByText(/Go grocery shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass('todo-item-active');
  });
});
