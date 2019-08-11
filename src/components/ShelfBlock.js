import React, { Component } from 'react'

class ShelfBlock extends Component {
    render(){
        const { name } = this.props
        return (
            <div>{name}</div>
        )
    }
}

export default ShelfBlock