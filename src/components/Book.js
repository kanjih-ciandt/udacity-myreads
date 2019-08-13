import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';
import { StyleSheet, css } from 'aphrodite';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import BookIcon from '@material-ui/icons/Book';
import Bookmarks from '@material-ui/icons/Bookmarks';
import DoneAll from '@material-ui/icons/DoneAll';
import * as BooksAPI from '../service/BooksAPI'



const useStyles = StyleSheet.create({
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
    maxHeight: 30
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class Book extends Component  {

  constructor(props) {
    super(props);
    this.state = { query: '',
        book: props.book
    };
    
  }

  
  handleSubmit = (e) => {
    e.preventDefault()

    if (this.props.onUpdateBook) {
      this.props.onUpdateBook(this.props.book, e.currentTarget.value)
    } else {
        BooksAPI.update(this.props.book, e.currentTarget.value)
            .then( (bookResult) => {
        })
    } 
  }

  render(){
    const { book } = this.state

    return (
      <Card className={css(useStyles.card)}>
        <CardMedia
          className={css(useStyles.media)}
          image={this.props.book.imageLinks.thumbnail}
        />
        <CardContent className={css(useStyles.content)}>
          <p>{book.title.substring(0,20)}</p>
        </CardContent>
        <CardActions disableSpacing>
            <Tooltip title="Reading">
              <IconButton aria-label="currently Reading"  value = "currentlyReading" onClick={this.handleSubmit}>
                <BookIcon color={book.shelf==="currentlyReading"? "primary": "action"}  />
              </IconButton>
            </Tooltip>
            <Tooltip title="Want to Read">
              <IconButton aria-label="want to read" label="Want to read"  value = "wantToRead" onClick={this.handleSubmit}>
                <Bookmarks color={book.shelf==="wantToRead"? "primary": "action"} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Already Read"> 
              <IconButton aria-label="already read" value = "read" onClick={this.handleSubmit}>
                <DoneAll color={book.shelf==="read"? "primary": "action"} />
              </IconButton>
            </Tooltip>
          
        </CardActions>
      </Card>
    )
  }
}

export default Book
