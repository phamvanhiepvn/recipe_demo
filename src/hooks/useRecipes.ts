import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { getRecipesList } from '../store/slices/recipesSlice';

const useRecipes = () => {
  const [loading, setLoading] = useState(false);
  const { list, current } = useAppSelector((state: any) => state.recipes);
  const dispatch = useAppDispatch();

  const getList = async () => {
    setLoading(true);
    try {
      await dispatch(getRecipesList());
      Promise.resolve();
    } finally {
      setLoading(false);
    }
  };

  return {
    list,
    current,
    loading,
    getList,
  };
};

export default useRecipes;
