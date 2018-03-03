import React from 'react';

const Loading = ({ animation }) => (
    <div className={`Loading Loading--${animation}`}/>
);

Loading.defaultProps = {
    animation: 'play'
};

export default Loading;