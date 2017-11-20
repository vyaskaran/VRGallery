import React from 'react';

let Image = function statelessFunctionComponentClass(props) {
    let source =  props.source;
    let index = props.index;

    let style = {
        width: '100px',
        height:'100px',
        margin: '10px 5px 0px 5px'
    };

    return (
        <img id={index} src={source} style={style} />

    );
};

export default Image;