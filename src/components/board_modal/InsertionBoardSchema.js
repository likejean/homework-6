import React from 'react';

export default ({newBoardPlaceOrder, boardsSchema}) => {
    const order = isNaN(newBoardPlaceOrder) || newBoardPlaceOrder === 0 ? 1 : newBoardPlaceOrder;
    return (
        <div className='schema-container'>
            <i style={{color: 'red', order: order, marginRight: 7}} className="fas fa-level-down-alt fa-3x"/>

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