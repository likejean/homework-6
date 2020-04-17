import React from 'react';

export default ({newBoardPlaceOrder, boardsSchema}) => {
    const order = isNaN(newBoardPlaceOrder) || newBoardPlaceOrder === 0 ? 1 : newBoardPlaceOrder;
    return (
        <div className='schema-container'>
            <div style={{backgroundColor: 'red', order: order}} className='block-element'>{order}</div>

            {boardsSchema.map((block, idx) => (
                idx + 1 < order
                    ?
                    <div style={{order: idx + 1}} key={idx} className='block-element'>{idx + 1}</div>
                    :
                    <div style={{order: idx + 2}} key={idx} className='block-element'>{idx + 2}</div>
                )
            )}
        </div>
    );
}