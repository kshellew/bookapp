import React from 'react';

export default function Filter (props){


    return (
        <div className='print-type-filter'>
            <label>Print Type:</label>
            <form 
                action="" 
                className="print-type-filterform"
                onChange = {event => props.handlePrintType(event.target.value)}
                >
                <select 
                    name="print-type-filter">
                    <option 
                        value="all">
                        All
                    </option>
                    <option 
                        value="books">
                        Only Books
                    </option>
                    <option 
                        value="magazines">
                        Only Magazines
                    </option>
                </select>
            </form>
        </div>
    )
}