import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <Box>
    <Link to="/recipes">
      <Typography variant="body2">Recipes Page</Typography>
    </Link>
  </Box>
);

export default React.memo(Home);
