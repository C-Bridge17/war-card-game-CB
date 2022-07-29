import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import Game from './Game';

afterEach(cleanup)

it('should take a snapshot', () => {
  const { asFragment } = render(<Game />)

  expect(asFragment(<Game />)).toMatchSnapshot()
})

it('should deal both players 26 cards', () => {
  const { Game } = render(<Game />);
  fireEvent.click(getByTestId('deal-cards'));
  expect(Game.playerOnesHand).toEqual(Game.playerTwosHand);
})

it('should play a round of war', () => {
  const { Game } = render(<Game />);
  fireEvent.click(getByTestId('start-round'));
  expect(Game.playerOnesHand).toNotEqual(Game.playerTwosHand);
})
