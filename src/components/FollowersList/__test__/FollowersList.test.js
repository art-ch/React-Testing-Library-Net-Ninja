import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowersList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
);

const mockedUsers = () => {
  const mockedUser = {
    name: {
      first: 'Ronnie',
      last: 'Polla'
    },
    picture: {
      large: 'img'
    },
    login: {
      username: 'barrel'
    }
  };

  const result = [];

  for (let i = 0; i < 5; i++) {
    result.push(mockedUser);
  }

  return result;
};

const mockedData = {
  data: {
    results: mockedUsers()
  }
};

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: () => mockedData
  }
}));

describe('<FollowersList />', () => {
  beforeAll(() => {
    console.log('beforeAll ran');
  });

  it('should render user at all', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-item-0');
    expect(followerDivElement).toBeInTheDocument();
  });

  it('should render exactly 5 users', async () => {
    render(<MockFollowersList />);
    const followerDivElements = await screen.findAllByTestId(/follower-item/i);
    expect(followerDivElements.length).toBe(5);
  });

  afterEach(() => console.log('afterEach ran'));
});
