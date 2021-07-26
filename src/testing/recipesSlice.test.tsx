import React from 'react';
import reducer, { setList } from '../store/slices/recipesSlice';

test('test recipes slice setList', async () => {
  const previousState: any = { list: [] };
  const state: any = [
    {
      contentId: 5333,
      title: 'ANZAC Smoothie',
      urlPartial: 'anzac-smoothie',
      isFavourited: false,
    },
  ];

  expect(reducer(previousState, setList(state))).toEqual({ list: state });
});
