import React from 'react';
import { render } from '@testing-library/react';

import App from './App';
import { formattedRank } from './components/Players'

//==========
//tests for App.js

it('renders without crashing', () => {render(<App/>)
});

test('Dark-Mode button rendered', () => {
  const { getByText } = render(<App/>);
  getByText(/dark mode/i);
});

//============
//tests for FetchPlayers.js

test('Title is rendered to page', () => {
  const { getByTestId } = render(<App/>);
  getByTestId('pageTitle')
});

test('Name column title rendered', () => {
  const { getByTestId } = render(<App/>);
  getByTestId('rankTableHeader');
});

test('Name column title rendered', () => {
  const { getByText } = render(<App/>);
  getByText(/name/i);
});

test('Country column title rendered', () => {
  const { getByText } = render(<App/>);
  getByText(/country/i);
});

test('Interest Score column title rendered', () => {
  const { getByText } = render(<App/>);
  getByText(/interest score/i);
});

//============
//tests for Players.js
test('formattedRank function returns arg +1', () => {
  let actual;
  let expected;


  actual = formattedRank(4);
  expected = 5;

  expect(actual).toBe(expected);


});



function newFunction() {
  return 'formattedRank function returns arg +1';
}

