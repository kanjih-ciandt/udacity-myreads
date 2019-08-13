import React, { Component } from 'react';
import ShelfBlock from './ShelfBlock';
import { StyleSheet, css } from 'aphrodite';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../service/BooksAPI'

const useStyles = StyleSheet.create({
    fab: {
        margin: 1,
        position: 'fixed',
        display: 'block',
        bottom: '30px',
        right: '30px',
        padding: '16px'
,    },
    extendedIcon: {
      marginRight: 1,
    },
  });

  



class Shelf extends Component {
    constructor(props) {
        super(props);
        this.state = { query: '',
            wantToRead: [],
            currentlyReading: [],
            read: []
           };
        this.updateShelf = this.updateShelf.bind(this);
      }
    
    
    updateShelf(){
        BooksAPI.getAll()
          .then( (books) => {
            this.setState( () => ({
                wantToRead:  books.filter(b=> {return b.shelf === "wantToRead"}),
                currentlyReading:  books.filter(b=> {return b.shelf === "currentlyReading"}),
                read: books.filter(b=> {return b.shelf === "read"})
            }))
        })
    }


    componentDidMount(){
        this.updateShelf();
        
    }

    render(){
        const { wantToRead, currentlyReading, read } = this.state
        return (
            <div>
                <ShelfBlock name='Currently Reading' books={currentlyReading} onUpdateShelf={this.updateShelf} />
                <ShelfBlock name='Want to Read' books={wantToRead} onUpdateShelf={this.updateShelf} />
                <ShelfBlock name='Read' books={read} onUpdateShelf={this.updateShelf} />
                <Fab color="primary" 
                     aria-label="add" 
                     className={css(useStyles.fab)}
                     component={ Link } to="/search">
                    <AddIcon />
                </Fab>
            </div>
        )
    }
}

export default Shelf