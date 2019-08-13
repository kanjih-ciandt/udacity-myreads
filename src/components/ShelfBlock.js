import React, { Component } from 'react'
import Book from './Book'
import Grid from '@material-ui/core/Grid';
import * as BooksAPI from '../service/BooksAPI'

class ShelfBlock extends Component {

    updateBook(book, action ){
        BooksAPI.update(book, action)
            .then( (bookResult) => {
                this.setState((currentState) => ({
                    book: bookResult
                }))
            this.props.onUpdateShelf()    
        })
    }

    render(){
        const { name, books } = this.props
        return (
            <div>
                <div>
                    <h2>{name}</h2>
                </div>
                <div>
                    <Grid container direction="row"justify="center"
                    spacing={2} alignItems="stretch">
                        {books.map( (book) => (
                            <Grid item key={book.id} >
                                <Book book={book} onUpdateBook={(book, action) => {
                                    this.updateBook(book, action)
                                    
                                }}/>
                            </Grid>
                        ))}
                    </Grid>
                </div>
               
            </div>
           
        )
    }
}

export default ShelfBlock