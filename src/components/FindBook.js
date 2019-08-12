import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { StyleSheet, css } from 'aphrodite';
import * as BooksAPI from '../service/BooksAPI'
import Book from './Book'
import Grid from '@material-ui/core/Grid';

const useStyles = StyleSheet.create({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    },
    input: {
      marginLeft: 8,
      flex: 1
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      width: 1,
      height: 28,
      margin: 4,
    },
  });

class FindBook extends Component {

    constructor(props) {
        super(props);
        this.state = { query: '',
            books: [],
            typing_interval: 0,
            typingTimeout: 0 };
        
      }


    componentDidMount(){
        BooksAPI.getAll()
          .then( (books) => {
            this.setState( () => ({
                books
            }))
          })
      }   

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }));
        (query.trim() && query.trim().length) &&
        BooksAPI.search(query.trim())
        .then( (books) => {
            (books && books.length) &&
            this.setState( () => ({
                books
            }))
        })
      }


    render(){
        const { query } = this.state

        return (
            <div className='list-books'>
                <Paper className={css(useStyles.root)}>
                    <IconButton className={css(useStyles.iconButton)} aria-label="back"
                    component={ Link } to="/">
                        <ArrowBack />
                    </IconButton>
                    <InputBase
                        className={css(useStyles.input)}
                        placeholder="Search by Title ou Author"
                        inputProps={{ 'aria-label': 'search book' }}
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                    <IconButton className={css(useStyles.iconButton)} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <div>
                    <Grid container direction="row"justify="center" alignItems="center"
                    spacing={2} alignItems="stretch">
                        {this.state.books.map( (book) => (
                            <Grid item key={book.id} >
                                <Book book={book}/>
                            </Grid>
                        ))}
                    </Grid>
                </div>
                
            </div>
        )
    }
}

export default FindBook