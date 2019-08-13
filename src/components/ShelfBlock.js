import React, { Component } from 'react'
import Book from './Book'
import Grid from '@material-ui/core/Grid';

class ShelfBlock extends Component {

    updateParent(){
        this.props.onUpdateShelf()
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

export default ShelfBlock