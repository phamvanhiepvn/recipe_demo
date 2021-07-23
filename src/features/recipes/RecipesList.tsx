import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useRecipes from '../../hooks/useRecipes';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Loader from '../../components/Loader';
import { getDocumentScreen } from '../../helpers/screen';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#F0F0F0',
  },
  card: {
    backgroundColor: '#FFFFF',
    borderRadius: 0,
  },
  media: {
    height: 250,
  },
  content: {
    height: 50,
    textTransform: 'uppercase',
  },
  title: {
    fontWeight: 500,
    fontSize: '1rem',
  },
}));

const RecipesList = () => {
  const { loading, list, getList } = useRecipes();
  const classes = useStyles();
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
            <Grid container className={classes.root} spacing={3}>
              {list?.length > 0 ? (
                <>
                  {list.map((recipes: any) => (
                    <Grid item xs={12} sm={4} key={recipes.contentId}>
                      <Paper className={classes.card} variant="outlined">
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={recipes.imageList[documentWidth].url}
                            title={recipes.title}
                          />
                          <CardContent className={classes.content}>
                            <Typography
                              gutterBottom
                              variant="h6"
                              component="h6"
                              align="center"
                              className={classes.title}
                            >
                              {recipes.title}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Paper>
                    </Grid>
                  ))}
                </>
              ) : (
                <Typography variant="h6" align="center">
                  No Recipes found
                </Typography>
              )}
            </Grid>
          )}
        </Box>
      </Grid>
    </Box>
  );
};

export default React.memo(RecipesList);
