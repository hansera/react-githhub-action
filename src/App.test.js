import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);
  const counterElemnet = screen.getByTestId("counter");
  expect(counterElemnet).toHaveTextContent(0);
});

test('minus button has correct text', () => {
  render(<App />);

  const buttonElemnet = screen.getByTestId("minus-button");
  expect(buttonElemnet).toHaveTextContent("-")
})

test('plus button has correct text', () => {
  render(<App />);
  const buttonElemnet = screen.getByTestId("plus-button");
  expect(buttonElemnet).toHaveTextContent("+");
})

test('when the + button is pressed, the counter changes to 1',() => {
render(<App />);
const buttonElemnet = screen.getByTestId("plus-button")
fireEvent.click(buttonElemnet);
const counterElemnet = screen.getByTestId("counter");
expect(counterElemnet).toHaveTextContent(1);
})

test('on/off button has blue color', () => {
  render(<App />);
  const buttonElemnet = screen.getByTestId("on/off-button");
  expect(buttonElemnet).toHaveStyle({backgroundColor: 'blue'});
})

test("Prevent the -,+ button from being pressed when the on/off button is clicked", () => {
  render(<App />);
  const onOffButtonElement = screen.getAllByTestId("on/off-button");
  fireEvent.click(onOffButtonElement);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled();
})