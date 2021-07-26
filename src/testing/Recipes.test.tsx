import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { createMemoryHistory } from 'history';
import RecipesPage from '../features/recipes';
import { Router } from 'react-router-dom';

test('Check page recipes has text', () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <RecipesPage />
      </Router>
    </Provider>
  );

  expect(getByText('Recipes Page')).toBeTruthy();
});
