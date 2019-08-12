import React, { Component } from 'react';
import ShelfBlock from './ShelfBlock';
import { StyleSheet, css } from 'aphrodite';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

const useStyles = StyleSheet.create({
    fab: {
        margin: 1,
        position: 'absolute',
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
    render(){
        return (
            <div>
                <ShelfBlock name='Currently Reading'/>
                <ShelfBlock name='Want to Read'/>
                <ShelfBlock name='Read'/>
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