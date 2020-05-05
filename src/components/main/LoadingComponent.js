import React from 'react';
import ReactLoading from 'react-loading';

export default ({ type, color, delay, height, width }) => (
    <ReactLoading
        type={type}
        color={color}
        delay={delay}
        height={height}
        width={width}
    />
);
