import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import ArrowBack from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import { css, StyleSheet } from 'aphrodite';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../service/BooksAPI';
import Book from './Book';
import { Redirect } from 'react-router-dom'

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
            toHome: false
           };
        this.updateParent = this.updateParent.bind(this);
        
      }


    componentDidMount(){
        
      }   

    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }));
        
        if (query.trim() && query.trim().length){
            BooksAPI.search(query.trim())
            .then( (books) => {
                (books && books.length) &&
                this.setState( () => ({
                    books
                }))
            })
        } else {
            this.setState(() => ({
                books: []
            }));
        }
    }

    updateParent(){
        this.setState(() => ({
            toHome: true
        }));
    }

    getAllBooks(){
        BooksAPI.getAll()
          .then( (books) => {
            this.setState( () => ({
                books
            }))
          })
    }


    render(){
        const { query } = this.state

        if (this.state.toHome === true) {
            return <Redirect to='/' />
          }

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
                    spacing={2}>
                        {this.state.books.map( (book) => (
                            <Grid item key={book.id} >
                                <Book book={book} onUpdateParent={() => {
                                    this.updateParent()
                                    
                                }}/>
                            </Grid>
                        ))}
                    </Grid>
                </div>
                
            </div>
        )
    }
}

export default FindBook