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
  title: {
    margin: '1px',
    textAlign: 'center',
    
    fontSize: '14px',
  },
  author: {
    textAlign: 'center',
    
    fontSize: '12px',
  },
});

class Book extends Component  {

  constructor(props) {
    super(props);
    this.state = { query: '',
        book: props.book
    };
    
  }

  
  updateBook = (e) => {
    e.preventDefault()
    BooksAPI.update(this.props.book, e.currentTarget.value).then( (bookResult) => {
      if (this.props.onUpdateParent) {
        this.props.onUpdateParent()
      }       
    })
  }

  render(){
    const { book } = this.state
    let author;
    if (book.authors) {
      author = <p className={css(useStyles.author)}>{book.authors.toString()}</p>
    }

    let thumbnail;
    if(book.imageLinks && book.imageLinks.thumbnail) {
      thumbnail = book.imageLinks.thumbnail
    } 

    return (
      <Card className={css(useStyles.card)}>
        <CardMedia
          className={css(useStyles.media)}
          image={thumbnail}
        />
        <CardContent className={css(useStyles.content)}>
          <p className={css(useStyles.title)}>{book.title.substring(0,20)}</p>
          {author}
        </CardContent>
        <CardActions disableSpacing>
            <Tooltip title="Reading">
              <IconButton aria-label="currently Reading"  value = "currentlyReading" onClick={this.updateBook}>
                <BookIcon color={book.shelf==="currentlyReading"? "primary": "action"}  />
              </IconButton>
            </Tooltip>
            <Tooltip title="Want to Read">
              <IconButton aria-label="want to read" label="Want to read"  value = "wantToRead" onClick={this.updateBook}>
                <Bookmarks color={book.shelf==="wantToRead"? "primary": "action"} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Already Read"> 
              <IconButton aria-label="already read" value = "read" onClick={this.updateBook}>
                <DoneAll color={book.shelf==="read"? "primary": "action"} />
              </IconButton>
            </Tooltip>
          
        </CardActions>
      </Card>
    )
  }
}

export default Book
