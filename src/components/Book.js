import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import BookIcon from '@material-ui/icons/Book';
import Bookmarks from '@material-ui/icons/Bookmarks';
import DoneAll from '@material-ui/icons/DoneAll';


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
            <BookIcon color={props.book.shelf==="currentlyReading"? "primary": "action"}  />
          </IconButton>
        </Tooltip>
        <Tooltip title="Want to Read">
          <IconButton aria-label="share" label="Want to read">
            <Bookmarks color={props.book.shelf==="wantToRead"? "primary": "action"} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Already Read"> 
          <IconButton aria-label="share">
            <DoneAll color={props.book.shelf==="read"? "primary": "action"} />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

export default Book
