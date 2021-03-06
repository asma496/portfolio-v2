import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Grow from '@material-ui/core/Grow';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ProjectsInfo, UrlIcons } from '../Info.json';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5rem 1rem',
    textAlign: 'center',
    minHeight: window.innerHeight,
    position: 'relative',
  },
  background: {
    position: 'absolute',
    top: '0',
    left: '0',
    opacity: '90%',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${ProjectsInfo.background})`,
    backgroundSize: 'contain',
    zIndex: '-999',
  },
  title: {
    fontWeight: 400,
    fontSize: '3em',
    margin: '1rem',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  subtitle: {
    fontWeight: 300,
    fontSize: '2rem',
    margin: '1rem',
    color: 'black',
  },
  caption: {
    fontSize: '1rem',
  },
  picture: {
    width: '100%',
  },
  img: {
    boxShadow: '0px 10px 15px 5px gray',
    maxHeight: '20rem',
    maxWidth: '90%',
  },
  article: {
    padding: '3rem 0',
  },
  columnInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  columnImg: {
    padding: '1rem 1rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: '1rem',
    display: 'flex',
  },
  iconList: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: '0 1rem',
  },
  icon: {
    width: '2rem',
  },
}));

const ProjectsHome = () => {
  const classes = useStyles();
  const { title, projects } = ProjectsInfo;
  return (
    <Slide direction="up" in timeout={1000}>
      <Grid component="section" container className={classes.root}>
        <div className={classes.background} />
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h2">
            {title}
          </Typography>
        </Grid>
        {projects.map((item) => (
          <Grid container key={uuidv4()} component="article" className={classes.article}>
            <Hidden mdUp>
              <Grid item xs={12}>
                <Typography className={classes.links} variant="h2">
                  <Link className={classes.subtitle} href={item.live} target="_blank" rel="noreferrer">
                    {item.title}
                  </Link>
                  <Link className={classes.caption} href={item.source} target="_blank" rel="noreferrer">
                    Source
                  </Link>
                </Typography>
              </Grid>
            </Hidden>
            <Grid item xs={12} md={6} className={classes.columnImg}>
              <Grow in timeout={3000}>
                <picture className={classes.picture}>
                  <img className={classes.img} src={item.screenshots[0]} alt="screenshot" />
                </picture>
              </Grow>
            </Grid>
            <Grid item xs={12} md={6} className={classes.columnInfo}>
              <Hidden smDown>
                <Typography className={classes.links} variant="h2">
                  <Link className={classes.subtitle} href={item.live} target="_blank" rel="noreferrer">
                    {item.title}
                  </Link>
                  <Link className={classes.caption} href={item.source} target="_blank" rel="noreferrer">
                    Source
                  </Link>
                </Typography>
              </Hidden>
            </Grid>









      </Grid>



))};



</Grid>




 </Slide>
  );
};

export default ProjectsHome;
