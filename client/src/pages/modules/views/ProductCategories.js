import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'https://mtv.mtvnimages.com/uri/mgid:ao:image:mtv.com:680914?height=972&width=1728&format=jpg&quality=.7auto=format&fit=crop&w=400&q=80',
      title: 'Ed Sheeran',
      width: '40%',
    },
    {
      url:
        'https://mtv.mtvnimages.com/uri/mgid:ao:image:mtv.com:676273?height=972&width=1728&format=jpg&quality=.7auto=format&fit=crop&w=400&q=80',
      title: 'Ariana Grande',
      width: '20%',
    },
    {
      url:
        'https://cdn.cnn.com/cnnnext/dam/assets/170424135815-justin-bieber-exlarge-169.jpg?auto=format&fit=crop&w=400&q=80',
      title: 'Justin Bieber',
      width: '40%',
    },
    {
      url:
        'https://mtv.mtvnimages.com/uri/mgid:file:http:shared:mtv.com/news/wp-content/uploads/2019/02/GettyImages-1097588244-1549852626.jpg?auto=format&fit=crop&w=400&q=80',
      title: 'Post Malone',
      width: '38%',
    },
    {
      url:
        'https://www.bet.com/shows/hip-hop-awards/2017/photos/performers/hip-hop-awards-living-in-the-lime-light-ft-playboi-carti/_jcr_content/mainCol/imagegallerycontainer/galleryimage_5.custom1540fx865fx0xcrop.dimg/__1506473855286__1506457203639/092617-shows-hha-hip-hop-awards-living-in-the-lime-light-ft-playboi-carti-4.jpgauto=format&fit=crop&w=400&q=80',
      title: 'Playboi Carti',
      width: '38%',
    },
    {
      url:
        'https://www.bet.com/music/2019/08/14/megan-thee-stallion-hot-girl-summer-video-shoot-shut-down-cops/_jcr_content/image.large2x1image.dimg/__1565812917825__1565809159436/081419-music-megan-thee-stallion-hot-girl-summer-video-shoot-shut-down-cops.jpgauto=format&fit=crop&w=400&q=80',
      title: 'Megan Thee Stallion',
      width: '24%',
    },
    {
      url:
        'https://cdn.cnn.com/cnnnext/dam/assets/190623190514-h-e-r--exlarge-169.jpgauto=format&fit=crop&w=400&q=80',
      title: 'H.E.R',
      width: '40%',
    },
    {
      url:
        'https://cdn.cnn.com/cnnnext/dam/assets/180831123101-drake-in-concert-exlarge-169.jpgauto=format&fit=crop&w=400&q=80',
      title: 'Drake',
      width: '20%',
    },
    {
      url:
        'https://www.bet.com/music/2018/12/22/travis-scott/_jcr_content/image.large2x1image.dimg/__1545529353254__1545529214816/122218-music-travisauto=format&fit=crop&w=400&q=80',
      title: 'Travis Scott',
      width: '40%',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Any Artist for any style of music
      </Typography>
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);