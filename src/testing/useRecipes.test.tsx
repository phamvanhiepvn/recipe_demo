import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import useRecipes from '../hooks/useRecipes';
test('test recipes list length', async () => {
  const wrapper = ({ children }: { children: any }) => (
    <Provider store={store}>{children}</Provider>
  );
  const { result, waitForNextUpdate } = renderHook(() => useRecipes(), {
    wrapper,
  });

  act(() => {
    result.current.getList();
  });
  await waitForNextUpdate();
  const { list = [] } = result.current;
  // check length
  expect(list).toHaveLength(6);
  // check not equal
  const expected = ['Alice', 'Bob'];
  expect(list).not.toEqual(expect.arrayContaining(expected));
  for (let i = 0; i < list.length; i++) {
    if (list[i]) {
      expect(list[i]).toHaveProperty('contentId');
      expect(list[i]).toHaveProperty('title');
      expect(list[i]).toHaveProperty('isFavourited');
      expect(list[i]).toHaveProperty('imageList');
    }
  }
});
