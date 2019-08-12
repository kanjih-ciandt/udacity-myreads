import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DoneAll from '@material-ui/icons/DoneAll';
import Bookmarks from '@material-ui/icons/Bookmarks';
import BookIcon from '@material-ui/icons/Book';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    width: 200,
    height: 450
    
  },
  media: {
    height: 200,
    paddingTop: '56.25%', // 16:9
  },
  content: {
    maxHeight: 30,
    
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
function Book(props) {
  const classes = useStyles();
  

  

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={props.book.imageLinks.thumbnail}
      />
      <CardContent className={classes.content}>
        <p>{props.book.title.substring(0,20)}</p>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Reading">
          <IconButton aria-label="add to favorites">
            <BookIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Want to Read">
          <IconButton aria-label="share" label="Want to read">
            <Bookmarks/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Already Read"> 
          <IconButton aria-label="share">
            <DoneAll />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

export default Book
