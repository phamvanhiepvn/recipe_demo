import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { createMemoryHistory } from 'history';
import RecipesPage from '../features/recipes';
import { Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

test('Check page recipes no result', async () => {
  const history = createMemoryHistory();
  await act(async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <RecipesPage />
        </Router>
      </Provider>
    );
    expect(getByText('No Recipes found')).toBeTruthy();
  });
});
