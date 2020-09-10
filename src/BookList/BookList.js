import React from 'react';

export default function BookList (props){
    //console.log(props)
    
    const {returnedBooks} = props

    
    return (
    <div>{props.results.items}</div>
    )
    
}