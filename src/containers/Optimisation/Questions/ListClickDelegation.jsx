import React from 'react';
import PropTypes from 'prop-types';
import {withGeneratorF, withInterval, withProps} from 'containers/Optimisation/generatorHOC';

const data = [
    'a','b','b','d','e','f','g','h','i','j','k',
];




const ListClickDelegation = props => {
    let lastKey = 0;//todo useRef

    const click = (e) => {
        console.log(e, e.target);
    };
    return (
        <ul onClick={click}>
            {
                data.map(val => {
                    return <li key={lastKey++}>{val}</li>
                })
            }
        </ul>
    );
};

ListClickDelegation.propTypes = {

};


const ComponentWithProps = withProps(ListClickDelegation);
const CompWithInterval = withInterval(ComponentWithProps);

export default CompWithInterval;
