import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useRecipes from '../../hooks/useRecipes';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Loader from '../../components/Loader';
import { getDocumentScreen } from '../../helpers/screen';
import { Paper, withStyles } from '@material-ui/core';
const GridRoot = withStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#F0F0F0',
  },
})(Grid);
const PaperRoot = withStyles({
  root: {
    backgroundColor: '#FFFFF',
    borderRadius: 0,
  },
})(Paper);
const CardMediaRoot = withStyles({
  root: {
    height: 250,
  },
})(CardMedia);
const CardContentRoot = withStyles({
  root: {
    height: 50,
    textTransform: 'uppercase',
  },
})(CardContent);
const TypographyTitle = withStyles({
  root: {
    fontWeight: 500,
    fontSize: '1rem',
  },
})(Typography);

const RecipesList = () => {
  const { loading, list, getList } = useRecipes();
  const [documentWidth, setDocumentWidth] = useState('landscapewidedesktop3x');

  const _getDocumentScreen = () => {
    const _documentWidth = getDocumentScreen();
    setDocumentWidth(_documentWidth);
  };

  useEffect(() => {
    _getDocumentScreen();
    getList();
  }, []);

  return (
    <Box>
      <Grid item xs={12} style={{ maxWidth: '100%' }}>
        <Box display="flex" p={3} alignItems="center" justifyContent="center">
          {loading ? (
            <Loader />
          ) : (
            <GridRoot container spacing={3}>
              {list?.length > 0 ? (
                <>
                  {list.map((recipes: any) => (
                    <Grid item xs={12} sm={4} key={recipes.contentId}>
                      <PaperRoot variant="outlined">
                        <CardActionArea>
                          <CardMediaRoot
                            image={recipes.imageList[documentWidth].url}
                            title={recipes.title}
                          />
                          <CardContentRoot>
                            <TypographyTitle
                              gutterBottom
                              variant="h6"
                              align="center"
                            >
                              {recipes.title}
                            </TypographyTitle>
                          </CardContentRoot>
                        </CardActionArea>
                      </PaperRoot>
                    </Grid>
                  ))}
                </>
              ) : (
                <Typography variant="h6" align="center">
                  No Recipes found
                </Typography>
              )}
            </GridRoot>
          )}
        </Box>
      </Grid>
    </Box>
  );
};

export default React.memo(RecipesList);
