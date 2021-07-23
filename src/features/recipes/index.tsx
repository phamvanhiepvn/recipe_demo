import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import RecipesList from './RecipesList';

const RecipesPage = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Typography variant="h3">Recipes Page</Typography>
      <Switch>
        <Route exact path={path} component={RecipesList} />
      </Switch>
    </>
  );
};

export default React.memo(RecipesPage);
