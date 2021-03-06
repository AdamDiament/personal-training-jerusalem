import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Grid from '@material-ui/core/Grid'
import { Container, Typography } from '@material-ui/core'
import style from './style'
import { withStyles } from '@material-ui/core/styles'

const AboutHome = ({ slice, classes }) => { 
  

  return (
  <div>
    <a name="about">
      
    </a>

<Container className={classes.container}>

    <Grid alignItems="center" justify="center" className={classes.grid} container>
     
        {slice.primary.image && <img className={classes.image} src={slice.primary.image.url}/>}
    
      <Grid item xs={12} sm={12} md={7} container direction="column">
        {
          slice.primary.title &&
            <RichText render={slice.primary.title} />
        }
         <div className={classes.line}></div>

         {
          slice.primary.description &&
            <RichText render={slice.primary.description} />
        }
      </Grid>

    </Grid>
    </Container>
    </div>
)};

AboutHome.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withStyles(style)(AboutHome)
