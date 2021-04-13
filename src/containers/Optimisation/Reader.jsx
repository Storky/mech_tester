import React from 'react';
/* eslint react/prop-types: 0 */

const Reader = (props) => {

    console.log('ReaderProps', props);
    console.info('%c====================================================', "color:blue");

    const stop = props.stopperFunc || props.stop

    return (
        <div>
            Reader
            <hr/>
            <button onClick={stop}>Passed Stop</button>
            {props.renderPropsButton && props.renderPropsButton('kek')}
        </div>
    );
};

export default Reader;
